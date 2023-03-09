import { screen, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Home from "../Home";

describe("Home Component is being tested", () => {
  const NewHome = () => {
    return (
      <RecoilRoot>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </RecoilRoot>
    );
  };
  test("Should have text about ShopKart", () => {
    render(<NewHome />);
    const paragraph = screen.getByText(
      /ShopKart is the fastest growing e-commerce platform of US! Launched in 2019, it has delivered over 70 million products also during the Covid-19 Lockdown. You can shop anything you want, including daily groceries and medicines. In short, a one-stop shop for everything that you need and craved for!/i
    );
    expect(paragraph).toBeInTheDocument();
  });
  test("Should render tagline", () => {
    render(<NewHome />);
    expect(
      screen.getByRole("heading", { name: "What are you waiting for?!" })
    ).toBeInTheDocument();
  });

  test("Should have shopping button", () => {
    render(<NewHome />);
    expect(
      screen.getByRole("button", { name: "Let's go Shopping!" })
    ).toBeInTheDocument();
  });

  test("should match with snapshot of Home module", () => {
    const tree = renderer.create(<NewHome />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
