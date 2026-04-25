import { translateText } from './translate-text';

// TODO: Fix skipped test case
describe('translateText', () => {
	describe('english to dovahzul', () => {
		test('returns untranslated object when a matching word does not exist', () => {
			const actual = translateText('notAWord', true);

			expect(actual.length).toBe(1);
			expect(actual[0]).toEqual({ english: 'notAWord', dovahzul: null, translated: false });
		});

		test('returns translated object when a matching word exists', () => {
			const actual = translateText('accursed', true);

			expect(actual.length).toBe(1);
			expect(actual[0]).toEqual({ english: 'accursed', dovahzul: ['dur'], translated: true });
		});

		test('when there are multiple Dovahzul words matching an English word', () => {
			const actual = translateText('alive', true);

			expect(actual.length).toBe(1);
			expect(actual[0]).toEqual({
				english: 'alive',
				dovahzul: ['nahlaas', 'nahl'],
				translated: true
			});
		});

		test.each(['.', '!', '?'])(
			'%s at end of string should not affect the translation',
			(punctuation) => {
				const actual = translateText('accursed' + punctuation, true);

				expect(actual.length).toBe(1);
				expect(actual[0]).toEqual({
					english: 'accursed' + punctuation,
					dovahzul: ['dur' + punctuation],
					translated: true
				});
			}
		);

		test('Handles a full sentence', () => {
			const actual = translateText('I am a dragon!', true);

			expect(actual.length).toBe(4);
			expect(actual).toEqual([
				{ english: 'I', dovahzul: ["zu'u"], translated: true },
				{ english: 'am', dovahzul: ['los'], translated: true },
				{ english: 'a', dovahzul: ['aan'], translated: true },
				{ english: 'dragon!', dovahzul: ['dovah!', 'dov!'], translated: true }
			]);
		});

		// Todo: handle multi word phrases
		test.skip('translates a multi word phrase', () => {
			const actual = translateText('dragon of the north', true);

			expect(actual.length).toBe(1);
			expect(actual[0]).toEqual({
				english: 'dragon of the north',
				dovahzul: ['dovahsebrom'],
				translated: true
			});
		});
	});

	describe('dovahzul to english', () => {
		test('returns untranslated object when a matching word does not exist', () => {
			const actual = translateText('notAWord', false);

			expect(actual.length).toBe(1);
			expect(actual[0]).toEqual({ english: null, dovahzul: ['notAWord'], translated: false });
		});

		test('returns translated object when a matching word exists', () => {
			const actual = translateText('fodiiz', false);

			expect(actual.length).toBe(1);
			expect(actual[0]).toEqual({ english: 'weathered', dovahzul: ['fodiiz'], translated: true });
		});

		test.each(['.', '!', '?'])(
			'%s at end of string should not affect the translation',
			(punctuation) => {
				const actual = translateText('fodiiz' + punctuation, false);

				expect(actual.length).toBe(1);
				expect(actual[0]).toEqual({
					english: 'weathered' + punctuation,
					dovahzul: ['fodiiz' + punctuation],
					translated: true
				});
			}
		);

		test('Handles a full sentence', () => {
			const actual = translateText('Inhus uv dinok?', false);

			expect(actual.length).toBe(3);
			expect(actual).toEqual([
				{ english: 'mastery', dovahzul: ['Inhus'], translated: true },
				{ english: 'or', dovahzul: ['uv'], translated: true },
				{ english: 'death?', dovahzul: ['dinok?'], translated: true }
			]);
		});
	});
});
