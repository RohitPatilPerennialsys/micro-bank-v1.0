import { expect } from "chai";
import { mount } from "@vue/test-utils";
import dashboardSummary from "@/components/view/DashboardSummary.vue";

describe("dashboardSummary.vue", () => {
  it("Visibility of Dashboard Summary Component ", () => {
    const wrapper = mount(dashboardSummary);
    expect(wrapper.isVisible);
  });
});
