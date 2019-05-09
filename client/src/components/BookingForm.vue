  <template lang="html">

  <form class="form-inline" id="bookings-form" v-on:submit="handleSubmit">
    <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet">
		<h1>Add a Booking</h1>

			<label for="name">Name:</label>
			<input type="text" id="name" v-model="name" />

			<label for="email-address">Email Address:</label>
			<input type="text" id="email-address" v-model="email" />

			<label for="checked-in">Checked in:</label>
			<input type="checkbox" class="checkbox" id="checked-in" v-model="checkedIn" />
		<button type="submit" value="Save" id="save">Book! </button>
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

.form-inline {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
}

.form-inline label {
  margin: 5px 10px 5px 0;
}

.form-inline input {
  vertical-align: middle;
  margin: 5px 10px 5px 0;
  padding: 10px;
  background-color: darkorange;
  border: 1px solid #ddd;
  border-radius: 20px;
}

.form-inline input[type=checkbox] {
  width: 100px;
  vertical-align: middle;
  margin: 5px 10px 5px 0;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 20px;
}

.form-inline button {
  margin-top: 15px;
  padding: 10px 20px;
  background-color: darkorange;
  border: 2px solid black;
  color: black;
  border-radius: 40px;
  font-size: 25px;
  font-family: 'Permanent Marker', cursive;

}

h1{
  font-family: 'Permanent Marker', cursive;
  border-radius: 10px;
  color: black
}
</style>
