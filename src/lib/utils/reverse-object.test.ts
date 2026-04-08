import { reverseObject } from './reverse-object';

describe('reverseObject()', () => {
	test('returns empty object if passed empty object', () => {
		const actual = reverseObject({});

		expect(actual).toEqual({});
	});

	test('returns reverse of key value pairs', () => {
		const input = { key1: '1', key2: '2', key3: '3' };
		const actual = reverseObject(input);
		const expected = { '1': 'key1', '2': 'key2', '3': 'key3' };

		expect(actual).toEqual(expected);
	});

	test('returns reverse of key value pairs when input object values are arrays', () => {
		const input = { key1: ['1'], key2: ['2'], key3: ['3'] };
		const actual = reverseObject(input);
		const expected = { '1': 'key1', '2': 'key2', '3': 'key3' };

		expect(actual).toEqual(expected);
	});

	test('returns reverse of key value pairs when input object values are arrays with length of > 1', () => {
		const input = { key1: ['abc', 'def'], key2: ['2'], key3: ['3'] };
		const actual = reverseObject(input);
		const expected = { abc: 'key1', def: 'key1', '2': 'key2', '3': 'key3' };

		expect(actual).toEqual(expected);
	});

	test('real object', () => {
		const actual = reverseObject({
			against: ['wah'],
			age: ['fodiiz', 'kruziik', 'wuth', 'sadonvum']
		});

		expect(actual).toEqual({
			fodiiz: 'age',
			kruziik: 'age',
			sadonvum: 'age',
			wah: 'against',
			wuth: 'age'
		});
	});
});
