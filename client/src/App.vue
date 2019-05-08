<template>
  <div id="app">
    <BookingForm/>
    <BookingList/>
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

</style>
