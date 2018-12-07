<template>
  <div class="account">
  </div>
</template>
<script src="https://www.gstatic.com/firebasejs/5.6.0/firebase.js"></script>

<script>
    var firebase = require('firebase')

    import { db } from '../main'


export default {
  name: 'Account',

  methods: {
      create_user () {
      modal.
      alert('create user')
      firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function (error) {
        // Handle Errors here.
        // var errorCode = error.code
        var errorMessage = error.message
        console.log(errorMessage)
        // ...
      })
    },

    login_user (email, pass) {
      alert('log in user');
      firebase.auth().signInWithEmailAndPassword(email, pass).catch(function (error) {
        // Handle Errors here.
        // var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
      })
    },

    add_city () {
        alert("uid"+firebase.auth().currentUser.uid)
        firebase.firestore().collection('location').add({
          name: 'California',
          country: 'USA'
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
