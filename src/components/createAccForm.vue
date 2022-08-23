<template>
  <div class="sign-up">
    <div class="sign-up-form-container">
      <h1>Create an Account</h1>
      <form>
        <label class="sign-up-form-heading">Full Name</label>
        <input
          type="name"
          class="input-container"
          v-model="signInuserInput.name"
        />
        <label class="sign-up-form-heading">Date of Incorporation</label>
        <input
          type="date"
          class="input-container"
          v-model="signInuserInput.date"
        />
        <label class="sign-up-form-heading">Email</label>
        <input
          type="email"
          class="input-container"
          v-model="signInuserInput.email"
        />
        <label class="sign-up-form-heading">Password</label>
        <input
          type="password"
          class="input-container"
          v-model="signInuserInput.password"
        />
        <label class="sign-up-form-heading">Confirm Password</label>
        <input
          type="password"
          class="input-container"
          v-model="signInuserInput.confirmPwd"
        />
        <button @click.prevent="signin()" class="Create-account-btn">
          <h1>Create an Account</h1>
        </button>
        <h3 class="existing-acc">
          Already have an account?&nbsp;<router-link
            to="/Login"
            class="highlight"
            >Login</router-link
          >
        </h3>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      signInuserInput: {
        name: "",
        email: "",
        date: "",
        password: "",
        confirmPwd: "",
        availableServices: [
          {
            id: 1,
            name: "Current Account",
            imgURL: "CurrentAccount.svg",
          },
          {
            id: 2,
            name: "Payroll",
            imgURL: "Payroll.svg",
          },
          {
            id: 3,
            name: "Payments",
            imgURL: "Payment.svg",
          },
          {
            id: 4,
            name: "Wallet",
            imgURL: "Wallet.svg",
          },
          {
            id: 5,
            name: "Investments",
            imgURL: "Investments.svg",
          },
          {
            id: 6,
            name: "Tax Payment",
            imgURL: "Tax Payment.svg",
          },
          {
            id: 7,
            name: "Loans",
            imgURL: "Loans.svg",
          },
        ],
      },
    };
  },
  methods: {
    signin() {
      this.$store.dispatch("signIn", this.signInuserInput);
    },
  },
};
</script>

<style scoped>
.sign-up {
  background: white;
}
.sign-up-form-container {
  height: 690px;
  width: 320px;
}

.sign-up-form-container-form-container h1 {
  height: 44px;
  padding-right: 26px;
  margin-bottom: 8px;
  margin: 0;
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;
  color: #1a1a1a;
}

.sign-up-form-heading {
  padding-top: 24px;
  margin: 0px;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  /* identical to box height */
  margin: 0px;
  display: flex;
  align-items: flex-end;
  color: #1a1a1a;
}
.input-container {
  margin-top: 8px;
  width: 320px;
  height: 50px;
  font-size: large;
  background: #e8e8e8;
  border: initial;
  border-radius: 12px;
}

.Create-account-btn {
  margin-top: 32px;
  width: 320px;
  height: 50px;
  background: #d90429;
  box-shadow: 0px 6px 28px 5px rgba(254, 45, 23, 0.3);
  border-radius: 12px;
  cursor: pointer;
  border: initial;
}
.Create-account-btn h1 {
  padding-left: 70px;
  padding-right: 70px;
  margin: 0px;
  padding-top: 14px;
  padding-bottom: 11px;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */
  text-align: center;
  color: #ffffff;
}
.existing-acc {
  margin-top: 32px;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #828282;
  width: 221px;
  height: 19px;
  margin-left: 50px;
  margin-right: 49px;
}
.highlight {
  font-style: normal;
  color: #d90429;
  text-decoration: none;
}
@media screen and (min-width: 1350px) {
  .sign-up-form-container {
    margin: 110px 181px 62px 182px;
  }
}
</style>
