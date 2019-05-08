<template lang="html">
  <form id="bookings-form" v-on:submit="handleSubmit">
		<h2>Add a Booking</h2>
		<div>
			<label for="name">Name:</label>
			<input type="text" id="name" v-model="name" />
		</div>
		<div>
			<label for="email-address">Email Address:</label>
			<input type="text" id="email-address" v-model="email" />
		</div>
		<div>
			<label for="checked-in">Checked in:</label>
			<input type="checkbox" id="checked-in" v-model="checkedIn" />
		</div>

		<input type="submit" value="Save" id="save"/>
	</form>
</template>

<script>
import BookingService from '@/services/bookingService'
import { eventBus } from '@/main.js'
export default {
  name: "BookingForm",
  	data(){
  		return {
  			name: "",
  			email: "",
  			checkedIn: null
  		}
  	},

  methods: {
    handleSubmit() {
      event.preventDefault();

      const payload = {
        name: this.name,
        email: this.email,
        checkedIn: this.checkedIn
      };

      BookingService.postBooking(payload)
      .then(response => {
        eventBus.$emit('refresh');
      });
    }
  }
}
</script>

<style lang="css" scoped>
</style>
