import { expect } from "chai";
import { mount } from "@vue/test-utils";
import loginForm from "@/components/loginForm.vue";
import microBankPoster from "@/components/microBankPoster.vue";

//Micro Bank Poster
describe("microBankPoster.vue", () => {
  it("Visibility of MicroBankPoster Component ", () => {
    const wrapper = mount(microBankPoster);
    expect(wrapper.isVisible);
  });
});

//login Form
describe("loginForm.vue", () => {
  it("renders inner text in Login Form", () => {
    const wrapper = mount(loginForm);
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
    expect(loginRegisterInnerText.text()).contain("Login");
  });
});

// positive flow
// negative flow
