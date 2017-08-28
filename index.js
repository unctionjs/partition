import append from "@unction/append"
import couple from "@unction/couple"
import fresh from "@unction/fresh"
import reduceValues from "@unction/reducevalues"

export default function partition (predicate: PredicateType): Function {
  return function partitionPredicate (functor: FunctorType): [FunctorType, FunctorType] {
    const freshIterable = fresh(functor)
    const initalIterablePair = [
      freshIterable,
      freshIterable,
    ]

    return reduceValues((accumulation: [FunctorType, FunctorType]): Function => (value: ValueType): [FunctorType, FunctorType] => {
      const [consequent, alternate] = accumulation
      const appendedValue = append(value)

      if (predicate(value)) {
        return couple(appendedValue(consequent))(alternate)
      }

      return couple(consequent)(appendedValue(alternate))
    })(initalIterablePair)(functor)
  }
}
