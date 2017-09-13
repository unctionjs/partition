# @unction/partition

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> PredicateFunctionType => FunctorType => [FunctorType, FunctorType]

This function takes an functgor and returns an array of two of the same type of functor. the first of which contains elements which satisfy the predicate, the second of which contains element which do not.

``` javascript
partition(isOdd)([1,2,3,4]) // [[1,3],[2,4]]
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/partition.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/partition.svg?maxAge=2592000&style=flat-square
