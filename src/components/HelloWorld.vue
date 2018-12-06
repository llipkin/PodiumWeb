<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="add_city">print user</button>
    <button v-on:click="verify_user">Login Account</button>
    <h2>Essential Links</h2>

  </div>
</template>
<script src="https://www.gstatic.com/firebasejs/5.6.0/firebase.js"></script>

<script>
  var firebase = require('firebase')

  import { db } from '../main'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'

    }
  },
  methods: {
    create_user () {
      alert('create user')
      firebase.auth().createUserWithEmailAndPassword('trieveon.cooper@gmail.com', '123456').catch(function (error) {
        // Handle Errors here.
        // var errorCode = error.code
        var errorMessage = error.message
        console.log(errorMessage)
        // ...
      })
    },
    add_city () {
        alert("uid"+firebase.auth().currentUser.uid)
        firebase.firestore().collection('location').add({
          name: 'California',
          country: 'USA'
        })
    },
    verify_user () {
      alert('log in user')
      firebase.auth().signInWithEmailAndPassword('trieveon.lee@gmail.com', '123456').catch(function (error) {
        // Handle Errors here.
        // var errorCode = error.code;
        var errorMessage = error.message
        console.log(errorMessage)
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
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
