import { test } from '@playwright/test';
import { IndexPage } from './pages';

let indexPage: IndexPage;

test.beforeEach(() => (indexPage = new IndexPage()));

test('Can translate English to Dovahzul', async ({ page }) => {
	await indexPage.navigateTo(page, indexPage.url);
	await indexPage.translateEnglishToDovahzul(
		page,
		'Hello I am a dragon!',
		"Drem zu'u los aan dovah! "
	);
});

test('Can translate Dovahzul to English', async ({ page }) => {
	await indexPage.navigateTo(page, indexPage.url);
	await indexPage.translateDovahzulToEnglish(page, "Nau gravuun zu'u luv.", 'upon autumn me cry. ');
});

test("Can click 'Clear text' button to clear text", async ({ page }) => {
	await indexPage.navigateTo(page, indexPage.url);
	await indexPage.typeTextAndClear(page, 'Rawr rawr rawr');
});
