# @unction/partition

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> PredicateFunctionType<A> => Array<A> | Set<A> | RecordType<unknown, A> | string => [Array<A> | Set<A> | RecordType<unknown, A> | string, Array<A> | Set<A> | RecordType<unknown, A> | string]

This function takes an enumerable and returns an Array of two enumerables. The first of which contains elements which satisfy the predicate, the second of which contains element which do not.

``` javascript
partition(isOdd)([1,2,3,4]) // [[1,3],[2,4]]
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/partition.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/partition.svg?maxAge=2592000&style=flat-square
