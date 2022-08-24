import { expect } from "chai";
import { mount } from "@vue/test-utils";
import SignInForm from "@/components/CreateAccForm.vue";
import SignIn from "@/components/view/SignIn.vue";
//Micro Bank Poster
describe("SignIn.vue", () => {
  it("Visibility of MicroBankPoster  ", () => {
    const wrapper = mount(SignIn);
    expect(wrapper.isVisible);
  });
});

//Sign In Form
describe("createAnAccount.vue", () => {
  it("Visibility of SignIn Form  ", () => {
    const wrapper = mount(SignInForm);
    expect(wrapper.isVisible);
  });
});

describe("createAnAccount.vue", () => {
  it("All inner text in Sign Form", () => {
    const wrapper = mount(SignInForm);
    const SignInActualInnerText = [
      "Create an Account",
      "Full Name",
      "Date of Incorporation",
      "Email",
      "Password",
      "Confirm Password",
      "Create an Account",
      "Already have an account?",
      "Login",
    ];
    expect(SignInActualInnerText).to.have.lengthOf(9);
    const signinRegisterInnerText = wrapper.get(".sign-up-form-container");
    for (let i = 0; i < SignInActualInnerText.length; i++) {
      expect(signinRegisterInnerText.text()).contain(SignInActualInnerText[i]);
    }
  });
});

describe("createAnAccount.vue", () => {
  it("Input fields and Create Account Button visibility and Click ", () => {
    const wrapper = mount(SignInForm);
    var dataTestArray = [
      '[data-test="full-name-input"]',
      '[data-test="date-input"]',
      '[data-test="email-input"]',
      '[data-test="password-input"]',
      '[data-test="confirm-password-input"]',
    ];
    for (let i = 0; i < dataTestArray.length; i++) {
      const visibilityInoutField = wrapper.get(dataTestArray[i]);
      expect(visibilityInoutField.isVisible);
      expect(visibilityInoutField.trigger("click"));
    }
    const createAnAccountBtn = wrapper.get("button");
    expect(createAnAccountBtn.isVisible);
  });
});
