<template>
  <div class="carousel" id="home">
    <div class="carousel-inner flex justify-content-space-between">
      <div
        v-for="(image, index) in images"
        :key="index"
        :class="['slide', { active: index === currentSlide }]"
      >
        <img :src="image" alt="Image" />
        <div class="text-container">
          <div class="text">{{ texts[index] }}</div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" @click="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <!-- <span class="sr-only">Previous</span> -->
    </button>
    <button class="carousel-control-next" @click="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <!-- <span class="sr-only">Next</span> -->
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "/images/two-young-women-playing-enjoying-with-holi-colors.jpg",
        "/images/mountain-hiking.jpg",
        "/images/skatting.jpg",
        "/images/singers.jpg",
        "/images/marathon.jpg",
        "/images/friends-clinking-drink-glasses-modern-bar.jpg",
      ],
      texts: [
        "Holi is a time to celebrate life. So soak up the sun, dance to the music, and make some memories that will last a lifetime.",
        "The best things in life are free, like the wind in your hair and the view from the top of a mountain.",
        "Let the music move you and your body will follow.",
        "Street musicians are the unsung heroes of our cities.",
        "I'm not sure what's tougher, running a marathon or training for one",
        "Let's get this party started!",
      ],
      currentSlide: 0,
      intervalId: null,
      intervalDuration: 3500, // Interval duration in milliseconds (e.g., 3 seconds)
    };
  },
  mounted() {
    this.startCarousel();
  },
  beforeUnmount() {
    this.stopCarousel();
  },
  methods: {
    prev() {
      this.currentSlide =
        (this.currentSlide - 1 + this.images.length) % this.images.length;
    },
    next() {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
    },
    startCarousel() {
      this.intervalId = setInterval(this.next, this.intervalDuration);
    },
    stopCarousel() {
      clearInterval(this.intervalId);
    },
  },
};
</script>

<style scoped>
.carousel {
  position: relative;
}

.carousel-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 500px; /* Adjust the height as needed */
}

.slide {
  flex: 0 0 100%;
  display: none;
}

.slide.active {
  display: block;
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.carousel-control-prev {
  left: 10px;
}

.carousel-control-next {
  right: 10px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text-container {
  position: absolute;
  top: 10px;
  left: 10px;
  margin-top: 15%;
  margin-left: 15%;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  width: 70%;
  color: black;
}

.text {
  background-color: white;
  opacity: 0.5;
  font-style: italic;
}

.sr-only {
  color: white;
  font-weight: 600;
}

/* Styles for screens smaller than 600px */
@media (min-width: 600px) and (max-width: 900px) {
  .text-container {
    font-size: 15px;
    margin-top: 45%;
  }

  .carousel {
    margin-top: -38%;
  }
}

/* Styles for screens larger than 600px */
@media (min-width: 601px) {
  /* CSS rules for larger screens */
}
</style>
