import { BasePage } from './base-page';
import type { Locator, Page } from '@playwright/test';
import { test, expect } from '@playwright/test';

export class IndexPage extends BasePage {
	inputBox: (page: Page) => Locator;
	translatedTextBox: (page: Page) => Locator;
	clearButton: (page: Page) => Locator;
	headingTwo: (page: Page, name: string) => Locator;
	changeTranslationModeButton: (page: Page) => Locator;

	constructor() {
		super();
		this.baseUrl = 'http://localhost:5173';
		this.url = this.baseUrl + '/';
		this.inputBox = (page: Page) => page.getByLabel('Enter text to translate here...');
		this.translatedTextBox = (page: Page) => page.getByLabel('Translated text');
		this.clearButton = (page: Page) => page.getByRole('button', { name: 'Clear text' });
		this.headingTwo = (page: Page, name: string) => page.getByRole('heading', { name });
		this.changeTranslationModeButton= (page: Page) => page.getByRole('button', { name: 'Click to reverse translation' });
	}

	private assertInputBoxExists(page: Page) {
		return test.step('Input box exists', async () => {
			await expect(this.inputBox(page)).toBeInViewport();
		});
	}

	private async assertTextInInputBox(page: Page, inputText: string) {
		return test.step(`Assert that input box has text ${inputText}`, async () => {
			const currentValue = await this.inputBox(page).inputValue();
			expect(currentValue).toBe(inputText);
		});
	}

	private async typeTextIntoInputBox(page: Page, text: string) {
		return test.step(`Type ${text} into the input box`, async () => {
			await this.inputBox(page).fill(text);
			await this.assertTextInInputBox(page, text);
		});
	}

	private async assertTranslatedText(page: Page, text: string) {
		return test.step(`Translating text box exists and has text: ${text}`, async () => {
			await expect(this.translatedTextBox(page)).toBeInViewport();
			await expect(this.translatedTextBox(page)).toHaveText(text);
		});
	}

	private async clickTheClearButton(page: Page) {
		return test.step('Click the clear button', async () => {
			await expect(this.clearButton(page)).toBeVisible();
			await this.clearButton(page).click();
		});
	}

	private async assertCorrectHeadingTwoText(page: Page, isEnglishToDovahzul: boolean) {
		return test.step('Assert that heading two has the correct text', async () => {
			const expectedText = isEnglishToDovahzul ? 'English to Dovahzul' : 'Dovahzul to English';
			await expect(this.headingTwo(page, expectedText)).toBeInViewport();
		});
	}

	public async translateEnglishToDovahzul(page: Page, inputText: string, expectedText: string) {
		return test.step('Translate English to Dovahzul', async () => {
			await this.assertCorrectHeadingTwoText(page, true);
			await this.assertInputBoxExists(page);
			await this.typeTextIntoInputBox(page, inputText);
			await this.assertTranslatedText(page, expectedText);
		});
	}

	private async changeTranslationMode(page: Page) {
	return test.step('Change translation mode', async () => {
		await expect(this.changeTranslationModeButton(page)).toBeInViewport();
		await this.changeTranslationModeButton(page).click();
	})
	}

	public async translateDovahzulToEnglish(page: Page, inputText: string, expectedText: string) {
		return test.step('Translate Dovahzul to English', async () => {
			await this.changeTranslationMode(page);
			await this.assertCorrectHeadingTwoText(page, false);

			await this.assertInputBoxExists(page);
			await this.typeTextIntoInputBox(page, inputText);
			await this.assertTranslatedText(page, expectedText);
		})
	}

	public async typeTextAndClear(page: Page, inputText: string) {
		return test.step(`Type text and into the input box and clear it`, async () => {
			await this.assertInputBoxExists(page);
			await this.typeTextIntoInputBox(page, inputText);

			await this.clickTheClearButton(page);
			await this.assertTextInInputBox(page, '');
		});
	}
}
