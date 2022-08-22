<template>
  <header>
    <div class="header-left">
      <img
        src="../assets/images/microBankLogoimg.svg"
        alt="microBankLogoimg"
        class="logo"
      />
      <div class="vertical-divider"></div>
      <h1>ABC Pvt. Ltd.</h1>
    </div>
    <div class="header-right">
      <div class="bell">
        <img src="../assets/images/notificationBellImg.svg" />
      </div>
      <div class="profile">
        <p>{{ DisplayUserDetails[4] }}</p>
      </div>
      <div class="drop-arrow" @click="dropDownMenu()">
        <div>
          <img src="../assets/images/dropArrowimg.svg" />
        </div>
      </div>
    </div>
  </header>
  <dashboardMenuOption v-if="visible == true"></dashboardMenuOption>
</template>

<script>
import dashboardMenuOption from "./dashboardMenuOption.vue";
export default {
  components: {
    dashboardMenuOption,
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    dropDownMenu() {
      if (this.visible == false) {
        this.visible = true;
      } else {
        this.visible = false;
      }
    },
  },
  computed: {
    DisplayUserDetails() {
      return this.$store.getters["userDetails"];
    },
  },
};
</script>

<style>
dashboardMenuOption {
  z-index: 1;
}
header {
  height: 72px;
  display: flex;
  flex-direction: row;
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12);
}
.header-left {
  height: 51px;
  width: 163px;
  padding: 12px 0px 0px 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.header-left img {
  width: 151px;
  height: 42px;
  cursor: pointer;
}
.vertical-divider {
  display: none;
  visibility: hidden;
}
.header-left h1 {
  font-weight: bold;
  font-size: 14px;
  /* ABC Pvt. Ltd. */
  padding-top: 2px;
  width: 89px;
  height: 21px;
  margin-bottom: 9px;
  line-height: 19px;
  /* identical to box height */
  align-items: flex-end;
  color: #1a1a1a;
}

.header-right {
  margin: 0px 12px 0px 31.11%;
  width: 54.72%;
  display: flex;
  align-content: space-between;
  justify-content: flex-end;
}
.bell {
  margin-bottom: 24.58px;
  padding-top: 23px;
  height: 47.72px;
  width: 24px;
}
.bell img {
  padding: 2.56px 2.02px 2.08px 2.01px;
}
.profile {
  width: 37px;
  height: 37px;
  background: #d90429;
  border-radius: 100px;
  margin: 17px 12px 0px 12px;
}
.profile p {
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: flex-end;
  color: #ffffff;
  padding: 10px 0px 10px 10px;
  margin-top: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.drop-arrow {
  display: none;
  visibility: hidden;
}
@media screen and (min-width: 900px) {
  .drop-arrow {
    display: block;
    visibility: visible;
    padding-top: 25px;
  }
  .profile {
    margin-left: 26.02px;
  }
  header {
    height: 72px;
    display: flex;
    flex-direction: row;
    background: #ffffff;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12);
  }
  .header-left {
    display: flex;
    flex-direction: row;
    width: 401px;
    padding: 0px;
  }
  .header-left img {
    padding-top: 21px;
    padding-left: 20px;
    width: 171px;
    height: 51px;
  }
  .header-left h1 {
    width: 185px;
    height: 52px;
    padding: 19px 0px 0px 32px;
    margin: 0px;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    color: #1a1a1a;
  }
  .vertical-divider {
    display: block;
    visibility: visible;
    width: 1px;
    margin: 16px 0px 0px 32px;
    height: 40px;
    background: #c4c4c4;
  }
}
</style>
