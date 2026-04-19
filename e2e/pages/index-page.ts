import { BasePage } from './base-page';
import type { Locator, Page } from '@playwright/test';
import { test, expect } from '@playwright/test';

export class IndexPage extends BasePage {
	inputBox: (page: Page) => Locator;
	translatedTextBox: (page: Page) => Locator;

	constructor() {
		super();
		this.baseUrl = 'http://localhost:5173';
		this.url = this.baseUrl + '/';
		this.inputBox = (page: Page) => page.getByLabel('Enter text to translate here...');
		this.translatedTextBox = (page: Page) => page.getByLabel('Translated text');
	}

	private assertInputBoxExists(page: Page) {
		return test.step('Input box exists', async () => {
			await expect(this.inputBox(page)).toBeInViewport();
		});
	}

	private async typeTextIntoInputBox(page: Page, text: string) {
		return test.step(`Type ${text} into the input box`, async () => {
			await this.inputBox(page).fill(text);
			const currentValue = await this.inputBox(page).inputValue();
			expect(currentValue).toBe(text);
		});
	}

	private async assertTranslatedText(page: Page, text: string) {
		return test.step(`Translating text box exists and has text: ${text}`, async () => {
			await expect(this.translatedTextBox(page)).toBeInViewport();
			await expect(this.translatedTextBox(page)).toHaveText(text);
		});
	}

	public async typeTextToTranslate(page: Page, inputText: string, expectedText: string) {
		return test.step('Type text to translate into the input box', async () => {
			await this.assertInputBoxExists(page);
			await this.typeTextIntoInputBox(page, inputText);
			await this.assertTranslatedText(page, expectedText);
		});
	}
}
