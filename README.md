# sans-null

`sans-null` is a TypeScript library that deep removes `null` values from objects, arrays, and nested structures, replacing them with `undefined`.

## Installation

You can install `sans-null` via npm:

```sh
npm i sans-null
```

## Usage

Import the `sansNull` function from the library and use it to remove `null` values from your data structures.

```typescript
import { sansNull } from 'sans-null';

const data = {
    a: null,
    b: [1, null, 3],
    c: {
        d: null,
        e: 'text',
        f: {
            g: null,
        },
    },
};

const result = sansNull(data);

typeof result.a; // undefined
typeof result.b; // (number | undefined)[]
typeof result.c.d; // undefined
typeof result.c.e; // string
typeof result.c.f.g; // undefined
typeof result.c.f; // { g: undefined }
typeof result.c; // { d: undefined, e: string, f: { g: undefined } }
```

## API

### `sansNull<T>(value: T): SansNull<T>`

Transforms the input value by replacing all `null` values with `undefined`.

#### Parameters

- `value`: The input value which can be of any type.

#### Returns

- A new value with the same structure as the input, but with all `null` values replaced by `undefined`.

## TypeScript

The `SansNull` type is available.

```typescript
import { SansNull } from 'sans-null';

const data = {
    a: 1,
    b: null,
    c: {
        d: null,
        e: [1, null, 3]
    }
};

SansNull<typeof data>
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.
