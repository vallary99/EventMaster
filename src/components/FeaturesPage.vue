<template>
  <div class="features" id="features">
    <div class="title">APP<span>FEATURES</span></div>

    <div class="row mx-auto">
      <div class="col-lg-3 col-md-3 col-sm-12 card">
        <div class="feature">REGISTRATION & PROFILES</div>
        <img src="../assets/profile.png" alt="Toggle Image" />
        <div>
          Enable users to sign up and generate profiles containing pertinent
          details, offering the capability to include their interests, location,
          and personal preferences.
        </div>
      </div>

      <div class="col-lg-3 col-md-3 col-sm-12 card">
        <div class="feature">EVENT MANAGEMENT</div>
        <img src="../assets/create.png" alt="Toggle Image" />
        <div>
          Grants event organizers the ability to define event specifics like
          title, description, location, date, time, and duration. Offer features
          to include event-related media such as images and videos.
        </div>
      </div>

      <div class="col-lg-3 col-md-3 col-sm-12 card">
        <div class="feature">EVENT DISCOVERY</div>
        <img src="../assets/search.png" alt="Toggle Image" />
        <div>
          Provide users with a search functionality that enables them to
          discover events based on their interests, location, and preferred
          dates. Supply filters and sorting capabilities to fine-tune the search
          results.
        </div>
      </div>
    </div>

    <div class="row mx-auto">
      <div class="col-lg-3 col-md-3 col-sm-12 card">
        <div class="feature">EVENT PROMOTION</div>
        <img src="../assets/share.png" alt="Toggle Image" />
        <div>
          Facilitates event organizers to promote their events using the app,
          offering social sharing functionalities that enable them to share
          events on various platforms.
        </div>
      </div>

      <div class="col-lg-3 col-md-3 col-sm-12 card">
        <div class="feature">NOTIFICATIONS</div>
        <img src="../assets/notification.png" alt="Toggle Image" />
        <div>
          Delivering notifications to users regarding upcoming events that align
          with their interests as well as reminders for events they have either
          registered for or expressed interest in.
        </div>
      </div>

      <div class="col-lg-3 col-md-3 col-sm-12 card">
        <div class="feature">MAPS & NAVIGATION</div>
        <img src="../assets/navigation.png" alt="Toggle Image" />
        <div>
          Incorporated mapping services to facilitate directions and navigation
          to event venues for convenient reference.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "FeaturesPage",

  setup() {
    const showElement = ref(false);
    const imagePath = ref("path-to-show-image"); // Set the initial image path

    function toggleElement() {
      showElement.value = !showElement.value;
      imagePath.value = showElement.value
        ? "path-to-hide-image"
        : "path-to-show-image";
    }

    return {
      showElement,
      imagePath,
      toggleElement,
    };
  },
};
</script>

<style scoped>
.features {
  text-align: center;
}
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
  padding-right: 10px;
}

img {
  width: 100px;
  margin-left: 30%;
  background: none;
  padding: 10px;
}

.feature {
  font-size: 20px;
  padding: 10px;
  font-weight: 600;
  color: white;
  background-color: #ff6900;
  box-shadow: 2px 2px 4px gray;
}

.card {
  font-style: italic;
  margin-left: 50px;
  padding: 20px;
  box-shadow: 2px 2px 4px gray;
  margin-top: 20px;
}

/* Styles for screens smaller than 600px */
@media (max-width: 600px) {
  .features {
    /* margin-top: -40%; */
  }

  .title {
    font-size: 20px;
  }

  .card {
    width: 90%;
    margin-left: 5%;
  }

  img {
    width: 80px;
  }
}

/* Styles for screens larger than 600px */
@media (min-width: 600px) and (max-width: 900px) {
  .title {
    font-size: 40px;
  }
}
</style>
