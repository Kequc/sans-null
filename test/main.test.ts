import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sansNull } from '../src/main';

test('should return undefined for null input', () => {
    assert.equal(sansNull(null), undefined);
});

test('should handle arrays containing null', () => {
    assert.deepEqual(sansNull([1, null, 3]), [1, undefined, 3]);
});

test('should handle objects containing null', () => {
    assert.deepEqual(sansNull({ a: 1, b: null, c: 3 }), { a: 1, b: undefined, c: 3 });
});

test('should handle nested objects containing null', () => {
    const input = { a: 1, b: { c: null, d: 4 }, e: [5, null, 6] };
    const expected = { a: 1, b: { c: undefined, d: 4 }, e: [5, undefined, 6] };
    assert.deepEqual(sansNull(input), expected);
});

test('should return the same value for non-null primitives', () => {
    assert.equal(sansNull(42), 42);
    assert.equal(sansNull('hello'), 'hello');
    assert.equal(sansNull(true), true);
});

test('should handle Date objects correctly', () => {
    const date = new Date();
    assert.equal(sansNull(date), date);
});

test('should handle undefined values correctly', () => {
    assert.equal(sansNull(undefined), undefined);
});

test('should handle functions correctly', () => {
    const func = () => {};
    assert.equal(sansNull(func), func);
});

test('should handle symbols correctly', () => {
    const sym = Symbol('test');
    assert.equal(sansNull(sym), sym);
});

test('should handle nested arrays containing null', () => {
    const input = [1, [2, null], 3];
    const expected = [1, [2, undefined], 3];
    assert.deepEqual(sansNull(input), expected);
});

test('should handle deeply nested objects containing null', () => {
    const input = { a: { b: { c: { d: null } } } };
    const expected = { a: { b: { c: { d: undefined } } } };
    assert.deepEqual(sansNull(input), expected);
});

test('should handle objects with multiple null values', () => {
    const input = { a: null, b: null, c: null };
    const expected = { a: undefined, b: undefined, c: undefined };
    assert.deepEqual(sansNull(input), expected);
});

test('should handle arrays with multiple null values', () => {
    const input = [null, null, null];
    const expected = [undefined, undefined, undefined];
    assert.deepEqual(sansNull(input), expected);
});

test('should handle mixed arrays containing null', () => {
    const input = [1, 'string', null, true, null];
    const expected = [1, 'string', undefined, true, undefined];
    assert.deepEqual(sansNull(input), expected);
});

test('should handle objects with optional properties', () => {
    const input = { a: 1, b: null, c: undefined };
    const expected = { a: 1, b: undefined, c: undefined };
    assert.deepEqual(sansNull(input), expected);
});

test('should handle objects with nested arrays containing null', () => {
    const input = { a: [1, null, 3], b: { c: [null, 2, null] } };
    const expected = { a: [1, undefined, 3], b: { c: [undefined, 2, undefined] } };
    assert.deepEqual(sansNull(input), expected);
});

test('should handle arrays with nested objects containing null', () => {
    const input = [{ a: null }, { b: null }];
    const expected = [{ a: undefined }, { b: undefined }];
    assert.deepEqual(sansNull(input), expected);
});

test('should handle objects with Date properties', () => {
    const date = new Date();
    const input = { a: date, b: null };
    const expected = { a: date, b: undefined };
    assert.deepEqual(sansNull(input), expected);
});

test('should handle arrays with Date elements', () => {
    const date = new Date();
    const input = [date, null];
    const expected = [date, undefined];
    assert.deepEqual(sansNull(input), expected);
});
