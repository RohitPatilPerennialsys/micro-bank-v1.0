<template>
  <nav class="navigation-bar">
    <ul>
      <li>
        <router-link to="/DashboardSummary" active-class="summary-active-tab"
          >Summary</router-link
        >
      </li>
      <li>
        <router-link to="/DashboardDetails" active-class="details-active-tab"
          >Details</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<style scoped>
ul {
  list-style: none;
  height: 60px;
  margin-top: 0px;
  padding-left: 0px;
}
li a {
  all: unset;
  padding: 24px;
  padding-top: 17px;
  color: black;
}
li {
  height: 60px;
  border-right: 1px solid #f2f2f2;
  font-size: 16px;
  line-height: 175%;
  float: left;
  padding-top: 16px;
}
.navigation-bar {
  height: 60px;
  margin: 24px 12px 12px 12px;
  /* Base White */
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
}

.details-active-tab {
  font-weight: bold;
  border-top: 3px solid #e8544b;
}
.summary-active-tab {
  font-weight: bold;
  border-top: 3px solid #e8544b;
  border-top-left-radius: 9px;
}
a:-webkit-any-link {
  color: unset;
  cursor: pointer;
}

@media screen and (min-width: 1080px) {
  .navigation-bar {
    margin-left: 24px;
    margin-right: 24px;
  }
}
</style>
