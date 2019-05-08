<template>
  <div id="app">

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data () {
    return {
      bookings: []
    }
  },
  components: {
    BookingsForm,
    BookingsGrid
  },
  mounted(){
    this.fetchData();
}
</script>

<style>

</style>
