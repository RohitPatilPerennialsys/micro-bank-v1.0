<template>
  <div class="summary-container">
    <h1>Summary</h1>
    <div class="summary-flex">
      <div class="summary-card-content" v-for="i in data" v-bind:key="i">
        <h4>{{ i.name }}</h4>
        <h5>{{ i.value }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      data: [
        {
          id: "accNo",
          name: "Account Number",
          value: "67238744 ",
        },
        {
          id: "incomeNo",
          name: "Income",
          value: "$20,00,000 ",
        },
        {
          id: "spendsno",
          name: "Spends",
          value: "$11,00,000 ",
        },
      ],
    };
  },
};
</script>
<style scoped>
.summary-container {
  margin: 12px 12px 0px 12px;
  background: #fff0f3;
  border: 1px solid rgba(217, 4, 41, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  padding-bottom: 20px;
}
.summary-container h1 {
  margin: 24px 225px 0px 24px;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  display: flex;
  align-items: flex-end;
  color: #1a1a1a;
}

.summary-flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}

.summary-card-content {
  /* width: 336px;
  height: 72px; */
  padding: 24px 24px 0px 24px;
  margin-right: 150px;
}
h4 {
  /* summary card content texts */
  font-size: 12px;
  line-height: 12px;
  align-items: center;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.38);
  margin: 0px;
}
h5 {
  /* summary card content values */
  margin: 0px;
  padding-top: 9.5px;
  width: 75px;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
}

@media screen and (min-width: 1016px) {
  .summary-container {
    margin-left: 24px;
    margin-right: 24px;
  }
}
</style>
