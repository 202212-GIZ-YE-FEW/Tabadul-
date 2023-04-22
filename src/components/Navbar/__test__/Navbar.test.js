import renderer from "react-test-renderer";

import Navbar from "../NavBar";

it("renders correctly", () => {
    const tree = renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
});