<template>
  <div class="sticky-navigation">
    <div class="row navigation">
      <div class="col-lg-2 col-md-2 col-sm-2 logo">
        <a href="/"><img alt="Vue logo" src="../assets/Logo.png" /></a>
      </div>

      <div class="col-lg-7 col-md-10 col-sm-10">
        <nav>
          <a href="#home" class="custom-link">HOME</a>
          <a href="#about" class="custom-link">ABOUT</a>
          <a href="#features" class="custom-link">FEATURES</a>
          <a href="#contact" class="custom-link">CONTACT</a>
          <router-link to="/faqs">FAQs</router-link>
        </nav>
      </div>

      <div class="col-lg-2">
        <a href="https://event-master-dashboard.vercel.app/">
          <button>SignUp/Login</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationPage",
};
</script>

<style scoped>
.sticky-navigation {
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 100;
}

img {
  width: 100px;
}

nav {
  padding-top: 30px;
}

nav a {
  text-decoration: none;
  color: black;
  font-weight: bold;
  padding-right: 120px;
  font-size: 15px;
}

a:hover {
  text-decoration: underline;
  text-decoration-color: #ff6900;
  text-decoration-thickness: 3pt;
  color: black;
}

button {
  background-color: #ff6900;
  color: white;
  height: 50px;
  width: 150px;
  border: none;
  padding: 10px;
  font-weight: 600;
  border-radius: 5px;
  margin-top: 10px;
  outline: none;
}

.logo {
  margin-left: 5%;
}

/* Styles for screens smaller than 600px */
@media (max-width: 600px) {
  .logo {
    margin-left: -2.5%;
  }

  img {
    width: 50px;
  }

  button {
    display: none;
  }

  nav a {
    padding-right: 10px;
    font-size: 10px;
  }
}

/* Styles for screens larger than 600px */
@media (min-width: 600px) and (max-width: 900px) {
  nav a {
    padding-right: 50px;
  }

  button {
    display: none;
  }
}
</style>
