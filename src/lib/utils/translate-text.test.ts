import {translateText} from "./translate-text";

// a b : c
// punctuation should not affect translation status
describe('translateText', () => {
    test('returns untranslated object when a matching word does not exist', () => {
        const actual = translateText('notAWord');

        expect(actual.length).toBe(1);
        expect(actual[0]).toEqual({english: 'notAWord', dovahzul: null, translated: false});
    })

    test('returns translated object when a matching word exists', () => {
        const actual = translateText('accursed');

        expect(actual.length).toBe(1);
        expect(actual[0]).toEqual({english: 'accursed', dovahzul: ['dur'], translated: true});
    })

    test('when there are multiple Dovahzul words matching an English word', () => {
        const actual = translateText('alive');

        expect(actual.length).toBe(1);
        expect(actual[0]).toEqual({english: 'alive', dovahzul: ['nahlaas', 'nahl'], translated: true});
    })

    test.each([
        '.',
        '!',
        '?'
    ])('%s at end of string should not affect the translation', (punctuation) => {
        const actual = translateText('accursed' + punctuation);

        expect(actual.length).toBe(1);
        expect(actual[0]).toEqual({english: 'accursed' + punctuation, dovahzul: ['dur' + punctuation], translated: true});
    })

    test('Handles a full sentence', () => {
        const actual = translateText('I am a dragon!');
        console.log(actual)

        expect(actual.length).toBe(4);
        expect(actual).toEqual([
            {english: 'I', dovahzul: null, translated: false},
            {english: 'am', dovahzul: ['los'], translated: true},
            {english: 'a', dovahzul: ['aan'], translated: true},
            {english: 'dragon!', dovahzul: ['dovah!', 'dov!'], translated: true},
        ]);
    })

    // Todo: handle multi word phrases
    test.skip('translates a multi word phrase', () => {
        const actual = translateText('dragon of the north');
        console.log(actual)

        expect(actual.length).toBe(1);
        expect(actual[0]).toEqual({english: 'dragon of the north', dovahzul: ['dovahsebrom'], translated: true});
    })
})