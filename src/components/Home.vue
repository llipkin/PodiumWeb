<style>
 ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: white;
}
    body {
  height: 100%;
  margin: 0;}
    video {
  margin: 0;
  padding: 0;
}

    .bodyback {
      background-color:black;
    }
body {
  font-family: "Oxygen", sans-serif;
}
  .content {
  position: relative;
  top: 30%;
  z-index: 2;
  margin: 0 auto;
  max-width: 720px;
  text-align: center;
}
#video-background {
/*  making the video fullscreen  */
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
}
.content__heading {
  margin-bottom: 24px;
  color: rgb(39,39,39);
  font-size: 44px;
}

.content__teaser {
  margin-bottom: 24px;
  color: rgb(89,89,89);
  font-size: 22px;
}

.content__cta {
  display: inline-block;
  margin: 0;
  padding: 12px 48px;
  color: rgb(255,60,100);
  font-size: 22px;
  text-decoration: none;
  border: solid 4px rgb(255,60,100);
}
  .video {
  position: fixed;
  top: 50%; left: 50%;
  z-index: 1;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
}
  .bg {
    /* The image used */
    background-image: url("https://images.unsplash.com/photo-1503610220663-a45ce52a7137?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=976&q=80");

    /* Full height */
    height:100%;
    width:100%;

    /* Center and scale the image nicely */
  }

</style>
<template>
<body id="bodyback">
<video autoplay loop id="video-background" muted plays-inline>
  <source src="..//assets/hubVideo.mp4" type="video/mp4">
</video>
    <Navigation></Navigation><router-view/>
<div class ="container">
  <div class="half padded" style="padding-top:100px;padding-left:200px;">
          <div id="addPanel" class="padded" style="background-color:white; width:400px; height:530px;">
            <h4> Join the community, post your book. It starts here!</h4>
          <br>
            <label class="quarter left">Title: </label>
         <input type="text" id ="title" class="fill" style="border-color:black">
                      <br>
                        <label class="quarter left">Isbn: </label>
        <input type="text" id ="isbn" class="fill" style="border-color:black">
                      <br>
                        <label class="quarter left">Meeting Location</label>
        <input id ="meetingplace"  type="text" class="fill" style="border-color:black">
                      <br>
                        <label class="quarter left">Price</label>
        <input id ="price" type="text" class="fill" style="border-color:black">
                      <br>
                        <label class="quarter left">Comments</label>
        <input id ="comments" type="text" class="fill" style="border-color:black">
                      <br>
                        <label class="quarter left">Book Photo</label>
              <input type="file" id="file-select" v-on:change="file_changed" class="file-select" accept="image/*"/>
            <div class="container" style="padding-left: 55px">
            <a class="file-submit btn pulse large rounded center" v-on:click="add_image" style="background-color:#FF5A5F; width:250px; position:absolute; bottom:100px"><tt>Add</tt></a>
            </div>
            <div style="background-color:white; width:300px; height:430px; font-size: 10px; padding-top: 20px;">
            <h4> You must first log in to add a book</h4>
            </div>
          <br>
          </div>
  </div>
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
          <modal id="register_modal" name="Register"
         :width="300"
         :height="300"
         @before-open="beforeOpen"
         @before-close="beforeClose">
    <h1>the time: {{time}}</h1>
  Email: <input type="text" name="email" id = "fname"><br>
  Password: <input type="text" name="password"><br>
            Name: <input type="text" name="name"><br>
  <input type="submit" value="Submit" v-on:click="hide2">
  </modal>
</body>
</template>
<script src="https://www.gstatic.com/firebasejs/5.6.0/firebase.js"></script>

<script>
  var firebase = require('firebase')
  import Router from '../router/index'
  import { db } from '../main'
  import {store} from '../main'
  import Navigation from '../components/Navigation'
  import Login from '../components/Login'
  var selectedFile;
       self.file_changed = function(event) {
        var input = event.target;
        var file = input.files[0];
        selectedFile = file;
        console.log(selectedFile + 'file');
       };

  self.add_image = function(event) {
    var file = selectedFile;
    console.log(selectedFile + 'slected')
    var uploadTask = firebase.storage().ref().child('images/' + file.name).put(file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
    uploadTask.on('state_changed', function (snapshot) {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running');
          break;
      }
    }, function (error) {
      // Handle unsuccessful uploads
    }, function () {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        console.log('File available at', downloadURL);
        var posts = [];
        posts.push(downloadURL)
      if (Login.data().logged == true) {
        console.log("logged in here")
        firebase.firestore().collection('books').doc('all').collection('recent').add(
          {
            isActive: true,
            isbn: document.getElementById('isbn').value,
            meetingPlace: document.getElementById('meetingplace').value,
            photos: posts,
            price: document.getElementById('price').value,
            sellerId: firebase.auth().currentUser.uid,
            sellerName: "Rob",
            sellerPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQArwyrotMyhHuQ7JJif9C_bZCRKNWgGHcpQYn45jPdBHzCCBjd",
            title: document.getElementById('title').value
          })
        Router.push('/BookTable')
      }
      else {
        console.log("didn't work here")
      }
      });
    });
  };
     self.show = function(event) {
      console.log("cheecking-this"+event.target.$modal);
      document.getElementById('register_modal').show()
      this.$modal.show('home');
    };
    self.hide = function(event) {
      this.$modal.hide('home');
      console.log(this.$modal.valueOf());

    };self.show2 = function(event) {
      console.log('CHECKSNDLKANDLAKS in HELLO WORLD FAM')
      this.$modal.show('Register');
      console.log("finished3 " + firebase.auth().currentUser.uid);
    };
    self.hide2 =function(event){
      this.$modal.hide('Register');
      var email = document.querySelector('#fname').value;
      var password = document.querySelector('#fname').value;
      firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
        console.log("finished1 " + firebase.auth().currentUser.uid)
        self.user = firebase.auth().currentUser.uid
      }).catch(function (error) {
        // Handle Errors here.
        // var errorCode = error.code
        var errorMessage = error.message
        console.log(errorMessage)
        // ...
      })
    };
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      showModal: true,
      time: 0,
      duration: 5000,
      selectedFile: "x",
      logged_in:false
    }
  },
    beforeMount () {
    console.log("here")
    console.log('firebase auth: ' + firebase.auth().currentUser.uid)
      if (firebase.auth().currentUser.uid  != null){logged_in:true}
  },
  components: {
    'Navigation': Navigation,
     template: 'modal'
  },
  methods: {
    show: self.show,
    show2:self.show2,
    hide: self.hide,
    hide2:self.hide2,
    file_changed: self.file_changed,
    add_image: self.add_image,
    changeImage: function (event) {
      var input = event.target;
      var filex = input.files[0];
      console.log("filex+ " + filex)
      /*
      file = document.getElementById('file-select').value
      fileName = file.name;
      storageRef = firebase.storage().ref(storageFolder + fileName);
      console.log("change CHANG ECHANGE"+document.getElementById('file-select').value)
      //selectedFile = this.target.files[0];
      console.log("check" + document.getElementsByClassName("file-select").value+document.getElementById('file-select').value)
      this.selectedFile = document.getElementById('file-select').value
      uploadTask = storageRef.ref.put(''+file);*/

    },
    beforeOpen (event) {
      console.log(event)
      // Set the opening time of the modal
      this.time = Date.now()
    },
    beforeClose (event) {
      console.log(event)
      // If modal was open less then 5000 ms - prevent closing it
      if (this.time + this.duration < Date.now()) {
        event.stop()
      }
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
<style>
  .topnav .topright {
        float:right
  }
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
