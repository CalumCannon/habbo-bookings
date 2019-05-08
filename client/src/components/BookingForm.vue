<template lang="html">
  <form id="bookings-form" v-on:submit="handleSubmit">
		<h2>Add a Booking</h2>
		<div>
			<label for="name">Name:</label>
			<input type="text" id="name" v-model="name" />
		</div>
		<div>
			<label for="email-address">Email Address:</label>
			<input type="text" id="email-address" v-model="EmailAddress" />
		</div>
		<div>
			<label for="checked-in">Checked in:</label>
			<input type="checkbox" id="checked-in" v-model="checkedIn" />
		</div>

		<input type="submit" value="Save" id="save"/>
	</form>
</template>

<script>
export default {
  name: "BookingForm",
  	data(){
  		return {
  			name: "",
  			emailAddress: "",
  			checkedIn: null
  		}
  	},

  methods: {
    handleSubmit() {
      event.preventDefault();

      const payload = {
        name: this.name,
        emailAddress: this.emailAddress,
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
