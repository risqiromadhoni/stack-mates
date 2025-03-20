import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../page";

describe("Page", () => {
	it("renders a Deploy button", () => {
		render(<Page />);
		const deployButton = screen.getByText(/deploy now/i);
		expect(deployButton).toBeDefined();
	});

	it("matches homepage snapshot", () => {
		const { container } = render(<Page />);
		expect(container).toMatchSnapshot();
	});
});
