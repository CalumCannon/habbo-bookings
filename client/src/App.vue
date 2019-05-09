<template>
  <div id="app">
<<<<<<< HEAD
    <img id="habbo" src="../public/images/Habbo-logo.png">

  <div id="booking">
    <BookingForm/>
    <BookingList :bookings="bookings"/></div>
=======

    <div class="background">
      <img id="background" src="@/../public/images/hotel2.png" alt="">
      <img id="logo" src="@/../public/images/Habbo-logo.png" alt="">


    <div class="form-wrapper">
      <BookingForm/>
    </div>


    <div class="list-wrapper">
      <BookingList :bookings="bookings"/>
    </div>

    </div>
>>>>>>> 4b91d7a96021ad87c6ab512caa1f0cc4c86af365
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



#background {
  max-width: 600px;


}
.form-wrapper {
  background-color: #f4d442;
  width: 400px;
  height: 150px;
  border: 6px solid black;
  border-radius: 3px;
  margin-bottom: 30px;
  box-shadow: 5px 5px 5px 1px black;
}

.list-wrapper {
  background-color: orange;
  border: 6px solid black;
  border-radius: 3px;
  box-shadow: 5px 5px 5px 1px black;

}

.background {
  position:relative;
  height: 800px;
}

#logo {
  max-width: 350px;
  position: absolute;
  top: 120px;
  right: 370px;
  transform: rotate(-90deg);
}
#app {
  max-width: 650px;
  margin: auto;
}
</style>
