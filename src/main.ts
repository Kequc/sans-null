export type SansNull<T> = T extends null
    ? undefined
    : T extends (infer U)[]
    ? SansNull<U>[]
    : T extends object
    ? { [K in keyof T]: SansNull<T[K]> }
    : T;

export function sansNull<T>(value: T): SansNull<T> {
    if (value === null || value === undefined) {
        return undefined as SansNull<T>;
    }

    if (Array.isArray(value)) {
        return value.map(sansNull) as SansNull<T>;
    }

    if (value instanceof Date) {
        return value as SansNull<T>;
    }

    if (typeof value === 'object') {
        const entries = Object.entries(value).map(([key, val]) => [key, sansNull(val)]);
        return Object.fromEntries(entries) as SansNull<T>;
    }

    return value as SansNull<T>;
}
