import { expect, test } from "@playwright/test";

const baseUrl = process.env.BASE_URL || "http://localhost:3000/";

test("has title", async ({ page }) => {
	await page.goto(baseUrl);
	await expect(page.getByRole("img", { name: "Next.js logo" })).toBeVisible();
});
