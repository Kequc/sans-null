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
