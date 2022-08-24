import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import loginForm from "@/components/LoginForm.vue";
import createAnAccount from "@/components/view/LoginAcc.vue";

//Micro Bank Poster
describe("loginAcc.vue", () => {
  it("Visibility of MicroBankPoster Component ", () => {
    const wrapper = shallowMount(createAnAccount);
    expect(wrapper.isVisible);
  });
});

//login Form
describe("loginForm.vue", () => {
  it("Visibility of loginForm Component ", () => {
    const wrapper = shallowMount(loginForm);
    expect(wrapper.isVisible);
  });
});

describe("loginForm.vue", () => {
  it("All inner text in Login Form", () => {
    const wrapper = shallowMount(loginForm);
    const loginAcutualInnerText = [
      "Login",
      "Please login to your accoun",
      "Email or Phone",
      "Password",
      "Forgot Password?",
      "Login",
      "Don't have an account?",
      "Create an Account",
    ];
    expect(loginAcutualInnerText).to.have.lengthOf(8);
    const loginRegisterInnerText = wrapper.get(".log-in-form-container");
    for (let i = 0; i < loginAcutualInnerText.length; i++) {
      expect(loginRegisterInnerText.text()).contain(loginAcutualInnerText[i]);
    }
  });
});

describe("loginForm.vue", () => {
  it("Input fields and Log In Button visibility and Click", () => {
    const wrapper = shallowMount(loginForm);
    const visibilityEmailInoutField = wrapper.get('[data-test="email-input"]');
    const visibilityPasswordInoutField = wrapper.get(
      '[data-test="password-input"]'
    );
    const loginBtn = wrapper.get("button");
    expect(visibilityEmailInoutField.isVisible);
    expect(visibilityEmailInoutField.trigger("click"));
    expect(visibilityPasswordInoutField.isVisible);
    expect(visibilityPasswordInoutField.trigger("click"));
    expect(loginBtn.isVisible);
  });
});

describe("loginForm.vue", () => {
  it("Login Btn visibility", () => {
    const wrapper = shallowMount(loginForm);
    const loginBtn = wrapper.get("button", ".login-Btn");
    expect(loginBtn.isVisible);
  });
});
// positive flow
// negative flow
