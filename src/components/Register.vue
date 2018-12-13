<template>
<body>
      <Navigation></Navigation><router-view/>
      <div class="rightHalf" style="background-color:white;
   width: 30%;
   position: absolute;
   left: 0px;
   height: 100%">
                 <div id="addPanel" class="padded" style="padding-left:60px;background-color:white; width:400px; height:530px;">
            <h4> Register, Join Us!</h4>
          <br>
            <label class="quarter left">email: </label>
         <input type="text" id="username" class="fill" style="border-color:black">
                   <br><br><br>
                        <label class="quarter left">password: </label>
        <input type="text" id="password" class="fill" style="border-color:black">
                      <br><br><br>
                   <label class="quarter left">name: </label>
         <input type="text" id="name" class="fill" style="border-color:black">
                   <br><br><br>
              <input type="file" id="file-select" v-on:change="file_changed" class="file-select" accept="image/*"/>
            <a class="file-submit btn pulse large rounded center" @click="add_user" style="background-color:#acece6; width:250px; position:absolute; bottom:100px"><tt>Register</tt></a>
            </div>
          </div>
  <div class="leftHalf" style="background-color:blue; background:url(http://papers.co/wallpaper/papers.co-am71-smoke-color-white-abstract-fog-art-illust-29-wallpaper.jpg);
   width: 70%;
   position: absolute;
   right: 0px;
   height: 100%;">
  </div>
</body>
</template>

<script>
import Navigation from '../components/Navigation'
import Router from '../router/index'
var firebase = require('firebase')
self.add_user = function () {
  console.log('checking')
  var un = document.getElementById('username').value
  var pw = document.getElementById('password').value
  console.log('checking' + un + ' ' + pw)
  firebase.auth().createUserWithEmailAndPassword(un, pw).then(function (firebaseUser) {
    console.log(firebaseUser.user)
    Router.push('/')
  })
    .catch(function (error) {
      console.log(error)
    })
}
export default {
  name: 'Register',
  data () {
    return {}
  },
  components: {
    'Navigation': Navigation
  },
  methods: {
    add_user: self.add_user
  }
}

</script>
