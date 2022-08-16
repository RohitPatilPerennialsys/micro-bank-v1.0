<template>
  <div class="current-services-card">
    <h1>Current Services</h1>
    <div id="current-services-flex">
      <div class="current-service">
        <img src="../assets/images/CurrentAccount.svg" alt="" />
        <p>Current Account</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style>
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
}
.current-service {
  padding-top: 26.5px;
  margin-left: 24px;
  width: 130px;
  margin-bottom: 15px;
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
  padding: 2.5px 77.5px 0px 0px;
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
  .current-service img {
    padding: 2.5px 86.5px 0px 84px;
  }
  .current-service p {
    text-align: center;
  }
}
</style>
