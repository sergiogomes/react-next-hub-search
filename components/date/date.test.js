import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import DateMonth from "./date";

/** @test {Tests for Date Component} */
describe("Date Component", () => {
  beforeAll(() => {
    configure({ adapter: new Adapter() });
  });

  const dateStr = "2020-09-04T22:12:17Z";
  const dateTxt = "5 Sep";

  it("should render the correct date text converted", () => {
    const wrapper = mount(<DateMonth ISOdate={dateStr} />);
    expect(wrapper.find("span").text()).toBe(dateTxt);
  });

  it("should render empty component for empty date", () => {
    const wrapper = mount(<DateMonth ISOdate="" />);
    expect(wrapper).toMatchObject({});
  });
});
