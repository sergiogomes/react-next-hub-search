import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import NavBar from "./navbar";

/** @test {Tests for NavBar Component} */
describe("NavBar Component", () => {
  let wrapper;
  beforeAll(() => {
    configure({ adapter: new Adapter() });
  });

  beforeEach(() => {
    wrapper = mount(<NavBar />);
  });

  it("should render a nav bar without crashing", () => {
    expect(wrapper.find("nav")).toHaveLength(1);
  });

  it("should render one search button without crashing", () => {
    expect(wrapper.find("button")).toHaveLength(1);
  });
});
