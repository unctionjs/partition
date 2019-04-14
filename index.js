import append from "@unction/append";
import couple from "@unction/couple";
import fresh from "@unction/fresh";
import reduceValues from "@unction/reducevalues";
export default function partition (predicate) {
  return function partitionPredicate (functor) {
    const freshFunctor = fresh(functor);
    const initalFunctorPair = [freshFunctor, freshFunctor];


    return reduceValues((accumulation) => (value) => {
      const [consequent, alternate] = accumulation;
      const appendedValue = append(value);

      if (predicate(value)) {
        return couple(appendedValue(consequent))(alternate);
      }

      return couple(consequent)(appendedValue(alternate));
    })(initalFunctorPair)(functor);
  };
}
