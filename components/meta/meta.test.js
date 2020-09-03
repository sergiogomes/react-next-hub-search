import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Meta from "./meta";

/** @test {Tests for Meta Component} */
describe("Meta Component", () => {
  let wrapper;
  const qtMetaTags = 24;
  const qtLinkTags = 2;
  const qtScriptTags = 3;

  beforeAll(() => {
    configure({ adapter: new Adapter() });
  });

  beforeEach(() => {
    wrapper = mount(<Meta />);
  });

  it(`should render ${qtMetaTags} meta tags without crashing`, () => {
    expect(wrapper.find("meta")).toHaveLength(qtMetaTags);
  });

  it(`should render ${qtLinkTags} link tags without crashing`, () => {
    expect(wrapper.find("link")).toHaveLength(qtLinkTags);
  });

  it(`should render ${qtScriptTags} script tags without crashing`, () => {
    expect(wrapper.find("script")).toHaveLength(qtScriptTags);
  });
});
