<template>
  <div class = "topnav">
    <nav>
      <router-link v-for="routes in links"
      v-bind:key="routes.id"
      :to=" `${routes.page}` ">
        <a> {{routes.text}} </a></router-link>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'Navigation',
  data () {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page: '/'
        },
        {
          id: 1,
          text: 'Collection',
          page: '/BookTable'
        },
        {
          id: 2,
          text: 'Login',
          page: '/Login'
        },
        {
          id: 3,
          text: 'Register',
          page: '/Register'
        }
      ]
    }
  },
  methods: {
    change_patch () {
    }
  }
}
</script>

<style>
.topnav {
background-color: #FF5A5F;
overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
float: left;
color: #ffffff;
text-align: center;
padding: 14px 16px;
text-decoration: none;
font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
background-color: #ff8084;
color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
background-color: #4CAF50;
color: white;
}

/* Right-aligned section inside the top navigation */
.topnav-right {
float: right;
}
</style>
