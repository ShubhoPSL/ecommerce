import { screen, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Navbar from "../Navbar";

jest.mock("../../List/List");

describe("Navbar is being tested", () => {
  const NewNavBar = () => {
    return (
      <RecoilRoot>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </RecoilRoot>
    );
  };
  test("should have text ShopKart", () => {
    render(<NewNavBar />);
    expect(screen.getByText("ShopKart")).toBeInTheDocument();
  });
  test("should have List item with text Home", () => {
    render(<NewNavBar />);
    expect(screen.getByText("List - Home")).toBeInTheDocument();
  });
  test("should have List item with text Products", () => {
    render(<NewNavBar />);
    expect(screen.getByText("List - Products")).toBeInTheDocument();
  });
  test("should have List item with text Contact Us", () => {
    render(<NewNavBar />);
    expect(screen.getByText("List - Contact Us")).toBeInTheDocument();
  });
  test("should match with snapshot of Navbar module", () => {
    const tree = renderer.create(<NewNavBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
