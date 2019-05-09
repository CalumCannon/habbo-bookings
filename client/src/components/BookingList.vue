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

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.booking{
  background: -moz-linear-gradient(top, #b4ddb4 0%, #83c783 4%, #52b152 33%, #008a00 67%, #005700 83%, #002400 100%);
  background: -webkit-linear-gradient(top, #b4ddb4 0%,#83c783 4%,#52b152 33%,#008a00 67%,#005700 83%,#002400 100%);
  display: inline-grid;
  width: 30%;
  margin: 10px;
  border: 3px solid orange;
}
.info-container{

}

p, h1, h2, h3{
  color: white;
  padding-left: 5px;

}
</style>
