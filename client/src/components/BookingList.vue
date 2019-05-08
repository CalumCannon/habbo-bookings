<template lang="html">
  <div id="bookings-list">
    <div class="booking" v-for="booking in bookings">
      <div id="info-container">
        <h2>{{booking.name}}</h2>
        <h3>{{booking.email}}</h3>
        <p>Checked in {{booking.checkedIn}}</p>
      </div>
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
#booking-list{
  background-color: black;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.booking{
  background-color: grey;
  display: inline-grid;
  width: 30%;
  margin: 10px;
}
.info-container{

}
</style>
