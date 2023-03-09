import { screen, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Products from "../Products";

describe("Products component is being tested", () => {
  const NewProducts = () => {
    return (
      <RecoilRoot>
        <BrowserRouter>
          <Products />
        </BrowserRouter>
      </RecoilRoot>
    );
  };

  test("should have text All Products", () => {
    render(<NewProducts />);
    expect(screen.getByText("All Products")).toBeInTheDocument();
  });
  describe("Testing product rendering", () => {
    test("should have Product with id - 1", () => {
      render(<NewProducts />);
      expect(screen.getByText("Item - 1")).toBeInTheDocument();
    });
    test("should have Product with id - 2", () => {
      render(<NewProducts />);
      expect(screen.getByText("Item - 2")).toBeInTheDocument();
    });
    test("should have Product with id - 3", () => {
      render(<NewProducts />);
      expect(screen.getByText("Item - 3")).toBeInTheDocument();
    });
    test("should have Product with id - 4", () => {
      render(<NewProducts />);
      expect(screen.getByText("Fav Item - 4")).toBeInTheDocument();
    });
    test("should have Product with id - 5", () => {
      render(<NewProducts />);
      expect(screen.getByText("Item - 5")).toBeInTheDocument();
    });
    test("should have Product with id - 6", () => {
      render(<NewProducts />);
      expect(screen.getByText("Item - 6")).toBeInTheDocument();
    });
    test("should have Product with id - 7", () => {
      render(<NewProducts />);
      expect(screen.getByText("Item - 7")).toBeInTheDocument();
    });
    test("should have Product with id - 8", () => {
      render(<NewProducts />);
      expect(screen.getByText("Item - 8")).toBeInTheDocument();
    });
    test("should have Product with id - 9", () => {
      render(<NewProducts />);
      expect(screen.getByText("Item - 9")).toBeInTheDocument();
    });
    test("should have Product with id - 10", () => {
      render(<NewProducts />);
      expect(screen.getByText("Item - 10")).toBeInTheDocument();
    });
  });

  test("should match with snapshot of Products module", () => {
    const tree = renderer.create(<NewProducts />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
