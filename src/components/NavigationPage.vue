<template>
  <div class="sticky-navigation">
    <div class="row navigation">
      <div class="col-lg-2 col-md-2 col-sm-2 logo">
        <a href="/"><img alt="Vue logo" src="../assets/Logo.png" /></a>
      </div>

      <div class="col-lg-7 col-md-7 col-sm-10">
        <nav>
          <a href="#home" class="custom-link">HOME</a>
          <a href="#about" class="custom-link">ABOUT</a>
          <a href="#features" class="custom-link">FEATURES</a>
          <a href="#contact" class="custom-link">CONTACT</a>
          <router-link to="/faqs">FAQs</router-link>
        </nav>
      </div>

      <div class="col-lg-2 col-md-2">
        <a href="https://event-master-dashboard.vercel.app/" target="_blank">
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
  width: 120px;
  margin-top: -10%;
}

nav {
  padding-top: 30px;
}

nav a {
  text-decoration: none;
  color: black;
  font-weight: bold;
  padding-right: 150px;
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
  margin-top: 10%;
  outline: none;
  margin-left: 80%;
}

/* Styles for screens smaller than 600px */
@media (max-width: 600px) {
  .logo {
    margin-left: -2.5%;
  }

  img {
    width: 50px;
    margin-top: 5px;
  }

  nav {
    margin-top: -20%;
    margin-left: 15%;
  }

  nav a {
    padding-right: 10px;
    font-size: 8px;
  }

  button {
    display: none;
  }
}

/* Styles for screens larger than 600px */
@media (min-width: 600px) and (max-width: 900px) {
  nav a {
    padding-right: 50px;
  }

  .logo {
    margin-left: 5px;
  }

  button {
    width: 130px;
    font-size: 12px;
    margin-left: 20px;
    margin-top: 20%;
  }

  nav a {
    font-size: 12px;
  }
}
</style>
