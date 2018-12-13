<style>
  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: white;
}
  body {
  height: 100%;
  margin: 0;}
  .bg {
  /* The image used */
  background-image: url("");

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
<template>
  <body>
<div class="bg">
        <div class="container" style="height:10%;left:250px;position:fixed;width:70%;z-index:999">
  <div class=" middle" style="color:white; placeholder-color:white;">
    <input type="text" class="  " style="font-size:15px;-webkit-input-placeholder:white; -moz-border-radius:20px; border-radius:20px; background-color:#FF5A5F; color:white" placeholder="🔎 Search Here">
  </div>
</div>
    <br><br><br>
    <div class="container" style="padding-left:100px">
<div class= "padded half compressible" style="width:500px">
 <ul id="v-for-object" class="demo">
<div  v-for="book in books" :value="book.value" :key="book.value">
          <table class="center fill" style="width:500px">
      <thead>
        <tr> <a style="font-size:20px">{{book.name}}</a><th></th></tr>
      </thead>
      <tbody>
        <tr><div class="card" style="width:500px; height:350px">
      <div>
        <div class="white  rounded">
            <img style="width:250px;height: 100%;" class=""  v-bind:src="book.image"/>
        </div>
        <div class=" rounded" style="background-color:white">
            <h1 style="color:#FF5A5F">${{book.price}}</h1>
            <img style="width:100px;height:100px;" class="oval center top" id="pic3" v-bind:src="book.photo"/>
        </div>
      </div>
    </div></tr>
      </tbody>
    </table>
</div>
</ul>
</div>
      <div class= "half compressible">
          <div class="half" style="padding-top:100px;padding-left:200px;">
          <div id="searchPanel" class="padded" style="background-color:white; width:400px; height:530px;">
            <h4> Find new books at the best prices!</h4>
            <div class="container">
          <div class=" center" style="padding-right:25px;color:white; placeholder-color:white;">
            <input type="text" class="  " style="font-size:15px;-webkit-input-placeholder:white; -moz-border-radius:20px; border-radius:20px; background-color:#FF5A5F; color:white" placeholder="🔎 Search Here">
        </div>
      </div>
            <div class="container">
                  <div class="half">
        <select class="fill">
          <option>Bla</option>
          <option>Two</option>
          <option>Three</option>
        </select></div>
          <div class="half">
        <select class="fill">
          <option>Bla</option>
          <option>Two</option>
          <option>Three</option>
        </select>
      </div>
            </div>
            <div class="container" style="padding-left: 55px">
            <a class="file-submit btn pulse large rounded center" v-on:click="search" style="background-color:#FF5A5F; width:250px; position:absolute; bottom:100px"><tt>Search</tt></a>
            </div>
          </div>
  </div>
      </div>
  </div>
    </div>
  <Navigation></Navigation><router-view/>
</body>
</template>

<script>
import { db } from '../main'
import Navigation from '../components/Navigation'
require('firebase')
var firebase = require('firebase')

require('firebase')
export default {
  name: 'BookTable',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      showModal: false,
      time: 0,
      duration: 5000,
      books: []
    }
  },
  beforeMount () {
    this.get_books()
  },
  components: {
    'Navigation': Navigation
  },
  methods: {
    get_books () {
      var ref = db.collection('books').doc('all').collection('recent')
      ref.get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data())
            console.log('checking' + doc.id, '=>', doc.data().photos[0])
            var bookPhoto = doc.data().photos[0]
            var sellerPhoto = doc.data().sellerPhoto
            this.books.push({price: doc.data().price, seller: doc.data().sellerName, name: doc.data().title, image: bookPhoto, photo: sellerPhoto})
          })
        })
        .catch(err => {
          console.log('Error getting documents', err)
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

<style scoped>

</style>
