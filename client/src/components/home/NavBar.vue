<template>
  <div v-if="this.name">
    <b-navbar toggleable="lg" type="light" class="nav" sticky="true">
      <!-- Logo -->
      <b-navbar-brand href="#" class="mx-auto">
        <img src="images/logo.png" alt="Logo" class="nav-logo" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="justify-content-center">
        <b-navbar-nav class="mx-auto">
          <b-nav-item href="/" class="nav-item">HOME</b-nav-item>
          <b-nav-item href="/#Services" class="nav-item">OUR APPROACH</b-nav-item>        
          <b-nav-item href="/#About" class="nav-item">OUR SCHOOL</b-nav-item>
          <b-nav-item href="/#Teachers" class="nav-item">OUR TEACHERS</b-nav-item>
          <b-nav-item href="/#News" class="nav-item">NEWS</b-nav-item>
          <b-nav-item href="ContactUs" class="nav-item">CONTACT US</b-nav-item>
        </b-navbar-nav>

        <!-- Right Side: Login/Logout -->
        <b-navbar-nav class="ml-auto">
          <div @click="logout" v-if="this.loggedin">
            <b-nav-item href="#"><button class="nav-button logout">Logout</button></b-nav-item>
          </div>
          <div v-else>
            <b-nav-item href="#" @click="redirectLog"><button class="nav-button login">Login</button></b-nav-item>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
const cookie = require("js-cookie");

export default {
  name: "NavBar",
  data() {
    return {
      name: true,
      loggedin: cookie.get("name"),
    };
  },
  methods: {
    logout() {
      cookie.remove("name");
      localStorage.clear();
      window.location.replace("/");
    },
    redirectLog() {
      this.name = false;
      this.$router.push("/Login");
    },
  },
};
</script>

<style scoped>
/* Navbar Styling */
.nav {
  padding: 10px 50px;
  background-color: #fff;
  border-bottom: 2px solid #004080; /* Deep Blue */
}

/* Logo Styling */
.nav-logo {
  max-width: 180px;
}

/* Centering Navbar Items */
.navbar-nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Navbar Links */
.nav-item {
  color: #004080 !important;
  font-weight: 500;
  font-size: 18px;
  text-transform: uppercase;
  position: relative;
  padding: 10px 15px;
  transition: color 0.3s ease-in-out;
}

/* Hover Animation */
.nav-item::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -5px;
  width: 0;
  height: 2px;
  background-color: #fed766; /* Yellow Highlight */
  transition: all 0.3s ease-in-out;
}

.nav-item:hover {
  color: #fe4a49 !important; /* Soft Red */
}

.nav-item:hover::after {
  width: 100%;
  left: 0;
}

/* Login/Logout Buttons */
.nav-button {
  color: #fff;
  padding: 10px 25px;
  border-radius: 8px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.login {
  background-color: #009fb7;
}

.login:hover {
  background-color: #fed766;
}

.logout {
  background-color: #fe4a49;
}

.logout:hover {
  background-color: #fed766;
}
</style>
