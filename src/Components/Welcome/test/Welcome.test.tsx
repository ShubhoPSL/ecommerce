import { cleanup, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Welcome from "../Welcome";
import { RecoilRoot } from "recoil";

describe("Welcome Page Component Testing", () => {
  const NewWelcome: React.FC = () => {
    return (
      <RecoilRoot>
        <Welcome />
      </RecoilRoot>
    );
  };
  afterEach(() => {
    cleanup();
  });
  test("should have Welcome Message", () => {
    render(<NewWelcome />);
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });
  test("should contains heading with E-Commerce Shopping Site", () => {
    render(<NewWelcome />);
    expect(
      screen.getByRole("heading", { name: "ShopKart" })
    ).toBeInTheDocument();
  });
  test("should match with snapshot of welcome module", () => {
    const tree = renderer.create(<NewWelcome />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
