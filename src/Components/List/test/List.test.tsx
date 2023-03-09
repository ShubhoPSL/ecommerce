import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { navList } from "../../../Data API/NavList";
import { listData } from "../../DataTypes/listData";
import List from "../List";
import renderer from "react-test-renderer";

jest.mock("../../Icons/CartIcon");
jest.mock("../../States/CartItems");
describe("Testing List component", () => {
  const NewList: React.FC<{ data: listData }> = ({
    data,
  }: {
    data: listData;
  }) => {
    return (
      <RecoilRoot>
        <BrowserRouter>
          <List data={data} />
        </BrowserRouter>
      </RecoilRoot>
    );
  };
  it("should have Home item", () => {
    render(<NewList data={navList[0]} />);
    const element = screen.getByRole("link", { name: "Home" });
    expect(element).toBeInTheDocument();
  });
  it("should have Products item", () => {
    render(<NewList data={navList[1]} />);
    const element = screen.getByRole("link", { name: "Products" });
    expect(element).toBeInTheDocument();
  });
  it("should have Contact Us item", () => {
    render(<NewList data={navList[2]} />);
    const element = screen.getByRole("link", { name: "Contact Us" });
    expect(element).toBeInTheDocument();
  });
  it("should have Cart item", () => {
    render(<NewList data={navList[3]} />);
    const element = screen.getByRole("link", { name: /Cart/ });
    expect(element).toBeInTheDocument();
  });
  it("should have Cart item with 2 item", () => {
    render(<NewList data={navList[3]} />);
    const element = screen.getByText(/2/);
    expect(element).toBeInTheDocument();
  });
  it("should have Cart item with 0 item", () => {
    jest.requireActual("../../States/CartItems");
    render(<NewList data={navList[3]} />);
    const element = screen.getByText(/0/);
    expect(element).toBeInTheDocument();
  });
  it("should match with snapshot of List module", () => {
    const tree = renderer.create(<NewList data={navList[0]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
