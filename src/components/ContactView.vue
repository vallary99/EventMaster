<template>
  <div class="row contact" id="contact">
    <div class="col-lg-3 col-md-3 col-sm-12 logo left">
      <img alt="Vue logo" src="../assets/logo.png" />

      <div class="email">eventmaster@gmail.com</div>

      <div class="phone">07xxxxxxxx</div>
    </div>

    <div class="col-lg-3 col-md-3 col-sm-12 features">
      <p>FEATURES</p>
      <div class="feature">Registration & Profiles</div>

      <div class="feature">Event Management</div>

      <div class="feature">Event Discovery</div>

      <div class="feature">Event Promotion</div>

      <div class="feature">Notifications</div>

      <div class="feature">Maps & Navigation</div>
    </div>

    <div class="col-lg-3 col-md-3 col-sm-12 anchors">
      <p>NAVIGATION</p>
      <div class="anchor"><a href="#home" class="custom-link">HOME</a></div>
      <div class="anchor"><a href="#about" class="custom-link">ABOUT</a></div>
      <div class="anchor">
        <a href="#features" class="custom-link">FEATURES</a>
      </div>
      <div class="anchor">
        <a href="#contact" class="custom-link">CONTACT</a>
      </div>
      <div class="anchor"><router-link to="/faqs">FAQs</router-link></div>
    </div>

    <div class="col-lg-3 col-md-3 col-sm-12 logo">
      <img alt="Vue logo" src="../assets/logo.png" />

      <div class="email">eventmaster@gmail.com</div>

      <div class="phone">07xxxxxxxx</div>
    </div>
  </div>
</template>

<style scoped>
.contact {
  background-color: black;
  margin-top: 20px;
  padding-top: 20px;
  padding-bottom: 30px;
  color: white;
  text-align: center;
}

img {
  width: 200px;
  height: 150px;
  background: none;
  margin-top: 20%;
}

a {
  text-decoration: none;
  color: white;
}

.anchors {
  margin-top: 20px;
}
.anchor {
  margin-top: 30px;
}

.feature {
  margin-top: 30px;
}

.features {
  margin-top: 20px;
}

p {
  border-bottom: 1pt solid white;
}

.email,
.phone {
  padding-top: 20px;
}

.logo {
  text-align: center;
}

@media (min-width: 600px) and (max-width: 900px) {
  img {
    width: 80px;
    height: 80px;
  }

  .contact {
    font-size: 12px;
  }
}

@media (max-width: 601px) {
  img {
    width: 80px;
    height: 80px;
  }

  .contact {
    font-size: 10px;
    padding-top: 10px;
  }

  .anchors,
  .features {
    display: none;
  }

  .left {
    display: none;
  }
}
</style>
