import { type Page, test } from '@playwright/test';

export class BasePage {
	baseUrl: string;
	url: string;

	constructor() {
		this.baseUrl = 'http://localhost:5173';
		this.url = this.baseUrl + '/';
	}

	public async navigateTo(page: Page, url: string) {
		return test.step(`Navigate to url ${url}`, async () => {
			await page.goto(url);
			await page.waitForURL(url);
		});
	}
}
