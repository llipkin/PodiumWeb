<template>
<body>
      <Navigation></Navigation><router-view/>
      <div class="rightHalf" style="background-color:white;
   width: 30%;
   position: absolute;
   right: 0px;
   height: 100%">
                 <div id="addPanel" class="padded" style="padding-left:60px;background-color:white; width:400px; height:530px;">
            <h4> Login, Welcome Back!</h4>
          <br>
            <label class="quarter left">email: </label>
         <input type="text" id="username" class="fill" style="border-color:black">
                   <br><br><br>
                         <label class="quarter left">password: </label>
        <input type="password" id="password" class="fill" style="border-color:black">
                      <br>
            <div class="container" style="padding-left: 55px">
            <a class="file-submit btn pulse large rounded center" @click="verify_user" style="background-color:#acece6; width:250px; position:absolute; bottom:100px"><tt>Login</tt></a>
            </div>
          </div>
      </div>
  <div class="leftHalf" style="background-color:blue; background:url(https://www.hdwallpapers.in/download/colorful_smoke-HD.jpg);
   width: 70%;
   position: absolute;
   left: 0px;
   height: 100%;">
  </div>
</body>
</template>

<script>
import Navigation from '../components/Navigation'
import Router from '../router/index'
var firebase = require('firebase')
self.verify_user = function () {
  console.log('checking')
  var un = document.getElementById('username').value
  var pw = document.getElementById('password').value
  console.log('checking' + un + ' ' + pw)
  firebase.auth().signInWithEmailAndPassword(un, pw).then(function () {
    Router.push('/')
  }).catch(function (error) {
    // Handle Errors here
    // var errorCode = error.code;
    var errorMessage = error.message
    console.log(errorMessage)
  })
}
export default {
  name: 'Login',
  data () {
    return {}
  },
  components: {
    'Navigation': Navigation
  },
  methods: {
    verify_user: self.verify_user
  }
}
</script>
