<template>
  <div id="app">
    <img id="habbo" src="../public/images/Habbo-logo.png">

  <div id="booking">
    <BookingForm/>
    <BookingList :bookings="bookings"/></div>
  </div>
</template>

<script>
import BookingService from '@/services/bookingService'
import BookingForm from '@/components/BookingForm'
import BookingList from '@/components/BookingList'
import {eventBus} from './main.js'

export default {
  name: 'app',
  data () {
    return {
      bookings: []
    }
  },
  components: {
    BookingForm,
    BookingList
  },

  methods: {
    fetchData(){
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings);
    }
  },

  mounted(){
    this.fetchData()
    eventBus.$on('refresh', this.fetchData)
}
}
</script>

<style>

#app {

}

#booking{

}
#habbo{
  height: 150px;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-top: 5%
}


</style>
