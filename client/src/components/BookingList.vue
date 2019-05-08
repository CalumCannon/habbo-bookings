<template lang="html">
  <div id="bookings-list">
    <div class="booking" v-for="booking in bookings">
      <h2>{{booking.name}}</h2>
      <h3>{{booking.email}}</h3>
      <p>Checked in {{booking.checkedIn}}</p>
    </div>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';
import BookingService from '@/services/bookingService.js';

export default {
  name: "BookingList",
  props: ["bookings"],

  methods:{
    handleDelete(id){
      BookingService.deleteBooking(id)
      .then(response =>{
          eventBus.$emit('refresh');
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
