<template>
  <div class="current-services-card">
    <h1>Current Services</h1>
    <div id="current-services-flex">
      <div
        class="current-service"
        v-for="allCurrentServices in DisplayUserCurrentServices"
        :key="allCurrentServices.id"
      >
        <img
          :src="require(`../assets/images/${allCurrentServices.imgURL}`)"
          :alt="allCurrentServices.name + 'IMG'"
        />
        <p>{{ allCurrentServices.name }}</p>
        <div class="star-wrapper">
          <div
            :class="ratingcal(allCurrentServices.rating, star)"
            v-for="star in 5"
            :key="star.id"
          >
            &#9733;
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    DisplayUserCurrentServices() {
      return this.$store.getters["userAllCurrentServices"];
    },
  },
  methods: {
    ratingcal(rating, totalStar) {
      return rating >= totalStar ? "star" : "unstar";
    },
  },
};
</script>

<style>
.star-wrapper {
  display: flex;
  justify-content: center;
}
.star,
.unstar {
  font-size: 27px;
  border: rgba(0, 0, 0, 0.54);
  background-color: unset;
  color: #0a8b1f;
  height: 21px;
  padding-right: 0px;
  padding-left: 3px;
}
.unstar {
  color: grey;
}
.star:hover,
.unstar:hover {
  cursor: pointer;
  color: #0a8b1f;
}
.current-services-card {
  margin: 12px 12px 24px 12px;
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
}

.current-services-card h1 {
  margin: 0px;
  padding: 24px 0px 0px 24px;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  display: flex;
  align-items: flex-end;
  color: #1a1a1a;
}
#current-services-flex {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: baseline;
  padding-bottom: 20px;
}
.current-service {
  padding-top: 26.5px;
  margin-left: 24px;
  width: 140px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.current-service p {
  padding-top: 15px;
  font-size: 18px;
  line-height: 25px;
  color: #1a1a1a;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.current-service img {
  width: 48px;
  padding-right: 0px;
  height: 56px;
}

@media screen and (min-width: 1016px) {
  .current-services-card {
    margin-left: 24px;
    margin-right: 24px;
  }
  .current-service {
    width: 218px;
    height: 123px;
    padding-top: 24px;
  }
  .current-service p {
    text-align: center;
  }
}
</style>
