import { test } from '@playwright/test';
import { IndexPage } from './pages';

let indexPage: IndexPage;

test.beforeEach(() => (indexPage = new IndexPage()));

test('Can translate English to Dovahzul', async ({ page }) => {
	await indexPage.navigateTo(page, indexPage.url);
	await indexPage.typeTextToTranslate(page, 'Hello I am a dragon!', "Drem zu'u los aan dovah! ");
});

test("Can click 'Clear text' button to clear text", async ({ page }) => {
	await indexPage.navigateTo(page, indexPage.url);
	await indexPage.typeTextAndClear(page, 'Rawr rawr rawr');
});
