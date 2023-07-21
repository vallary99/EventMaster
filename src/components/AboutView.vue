<template>
  <div class="about" id="about">
    <div class="mission">
      <div class="card">
        <div class="title"><span>OUR MISSION</span></div>

        <div class="mission-content">
          Our mission is to make it easy for people to connect with each other
          and have fun. Whether you're looking for a bike ride, a hike, a
          skating session, a swim, or a color fest, you can find it on
          EventMaster.
        </div>
      </div>
    </div>

    <div class="title">ABOUT<span>US</span></div>

    <div class="row team">
      <div class="team-content col-lg-6 col-md-6 col-sm-12">
        <div class="title"><span>OUR TEAM</span></div>
        <div class="text">
          We are a passionate team who are dedicated to making EventMaster the
          best event organizing app possible. We are constantly working to
          improve the app and add new features, and we are always looking for
          ways to make it easier for users to find and attend events.
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 team-image"></div>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 50px;
  font-weight: 600;
  text-align: center;
  padding-top: 20px;
  color: black;
}

span {
  color: white;
  background-color: #ff6900;
  margin-left: 20px;
  padding: 5px;
}

.card {
  box-shadow: 2px 2px 4px gray;
  padding: 10px 70px 20px 70px;
  background-color: black;
  color: white;
  font-size: 25px;
  text-align: center;
  margin-top: 20px;
}

.team-image {
  background-image: url("@/assets/high-angle-smiley-colleagues-working-together.jpg");
  background-size: cover;
  font-weight: 600;
  width: 100%;
}

.team {
  background-color: black;
  color: white;
  height: 550px;
  width: 99.5%;
  margin-left: 0.25%;
  margin-top: 2%;
}

.team-content {
  text-align: center;
  font-size: 25px;
  padding: 100px;
  font-style: italic;
}

/* Styles for screens smaller than 600px */
@media (max-width: 600px) {
  .title {
    font-size: 20px;
    margin-bottom: 5px;
    background-repeat: no-repeat;
  }

  .card {
    font-size: 10px;
    padding: 5px 50px 20px 50px;
  }

  .team {
    background-image: url("@/assets/high-angle-smiley-colleagues-working-together.jpg");
    background-size: cover;
    height: 50%;
    color: black;
  }

  .team-content {
    font-size: 15px;
    padding: 20px;
    background: none;
    opacity: 0.5;
  }

  .text {
    font-size: 15px;
    background-color: white;
    color: black;
    padding: 10px;
  }
  .team-image {
    display: none;
  }

  .team .title {
    display: none;
  }

  .mission {
    margin-top: -40%;
  }
}

/* Styles for screens larger than 600px */
@media (min-width: 601px) and (max-width: 900px) {
  .team {
    background-image: url("@/assets/high-angle-smiley-colleagues-working-together.jpg");
    background-size: cover;
    height: 50%;
    color: black;
  }

  .team-image {
    display: none;
  }

  .text {
    font-size: 15px;
    background-color: white;
  }

  .team-content {
    opacity: 0.5;
  }

  .card {
    font-size: 20px;
  }

  .title {
    font-size: 40px;
  }
}
</style>
