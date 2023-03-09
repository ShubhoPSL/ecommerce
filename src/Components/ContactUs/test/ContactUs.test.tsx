import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import ContactUs from "../ContactUs";

describe("Contact Us page testing", () => {
  const NewContactUs: React.FC = () => {
    return (
      <BrowserRouter>
        <ContactUs />
      </BrowserRouter>
    );
  };
  test("Should have Address paragraph", () => {
    render(<NewContactUs />);
    expect(screen.getByText("Address")).toBeInTheDocument();
  });
  test("Should have Phone paragraph", () => {
    render(<NewContactUs />);
    expect(screen.getByText("Phone")).toBeInTheDocument();
  });
  test("Should have Email paragraph", () => {
    render(<NewContactUs />);
    expect(screen.getByText("Email")).toBeInTheDocument();
  });
  test("should match with snapshot of Contact Us module", () => {
    const tree = renderer.create(<NewContactUs />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
