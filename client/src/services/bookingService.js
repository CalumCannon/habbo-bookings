//Get Base URL
const baseURL = 'http://localhost:3000/api/bookings/'

export default {
 // getSightings returns a promise
 getBookings(){
   return fetch(baseURL)
   .then(res => res.json()) // returns a promise which is returned in methods within app.vue (fetchData)
   // the value of the res.json, .then is done on this in app.vue
 },
 postBooking(payload){
   return fetch(baseURL, {
     method: 'POST',
     body: JSON.stringify(payload),
     headers: { 'Content-Type': 'application/json'}
   })
   .then(res => res.json()) // give me an object that is JSON
 },
 deleteBooking(id){
   return fetch(baseURL + id, {
     method: 'DELETE'
   })
 }
}
