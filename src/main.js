// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#layout',
  router,
  components: { App },
  template: '<App/>'
});

var firebase = require('firebase');

var config = {
  apiKey: 'AIzaSyCFvJArErxvDuY3_qcO8ZCon58qdtkRAx8',
  authDomain: 'iosbookapp.firebaseapp.com',
  databaseURL: 'https://iosbookapp.firebaseio.com',
  projectId: 'iosbookapp',
  storageBucket: 'iosbookapp.appspot.com',
  messagingSenderId: '1099160631159'
};

firebase.initializeApp(config);
export const db = firebase.firestore();

// var firebase = require('firebase')
// var config = {
//   apiKey: 'AIzaSyCFvJArErxvDuY3_qcO8ZCon58qdtkRAx8',
//   authDomain: 'iosbookapp.firebaseapp.com',
//   databaseURL: 'https://iosbookapp.firebaseio.com',
//   projectId: 'iosbookapp',
//   storageBucket: 'iosbookapp.appspot.com',
//   messagingSenderId: '1099160631159'
// }
// firebase.initializeApp(config)
// export const db = firebase.firestore()
// /*
// firebase.auth().createUserWithEmailAndPassword('trieveon.lee@gmail.com', '123456').catch(function (error) {
//   // Handle Errors here.
//   // var errorCode = error.code
//   var errorMessage = error.message
//   console.log(errorMessage)
//   // ...
// }) */
// var location = document.querySelector('locName')
//
// console.log('ran this portion')
// console.log('placeholder = ' + location.value)
//
// firebase.auth().signInWithEmailAndPassword('trieveon.lee@gmail.com', '123456').catch(function (error) {
//   // Handle Errors here.
//   // var errorCode = error.code;
//   var errorMessage = error.message
//   console.log(errorMessage)
//
//   // ...
// })
// console.log('user key' + firebase.auth().currentUser.uid)
// // var location = document.querySelector('locName')
//
// firebase.firestore().collection('location').add({
//   name: 'Tokyo',
//   country: 'Japan'
// })
//
// const saveButton = document.querySelector('#saveButton')
// saveButton.addEventListener('click', function () {
//   console.log('trying to save')
//   // var location = document.querySelector('locName')
//   // var locationPicture = document.querySelector('locPic')
// })
