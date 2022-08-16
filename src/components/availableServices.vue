<template>
  <div class="available-services-card">
    <h1>Available Services</h1>
    <div id="available-services-flex">
      <div class="available-services">
        <img src="../assets/images/Investments.svg" />
        <p>Investments</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style>
.available-services-card {
  margin: 24px 12px 24px 12px;
  background: #ffffff;
  box-shadow: 0px 1px 5px rgb(0 0 0 / 12%);
  border-radius: 12px;
}
.available-services-card h1 {
  padding: 24px 0px 0px 24px;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  display: flex;
  align-items: flex-end;
  color: #1a1a1a;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
#available-services-flex {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}
.available-services {
  margin-left: 14px;
  padding-top: 24px;
  width: 144px;
  margin-bottom: 15px;
}
.available-services img {
  padding: 15px 86.5px 0px 2.5px;
}
.available-services p {
  padding-top: 15px;
  font-size: 18px;
  line-height: 25px;
  color: #1a1a1a;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

@media screen and (min-width: 1016px) {
  .available-services-card {
    margin: 24px 24px 24px 24px;
  }
  .available-services {
    width: 218px;
    height: 95px;
    margin-left: 24px;
  }
  .available-services img {
    padding: 5px 81.5px 0px 81.5px;
  }
  .available-services p {
    text-align: center;
  }
}
</style>
