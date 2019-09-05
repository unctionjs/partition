import append from "@unction/append";
import couple from "@unction/couple";
import fresh from "@unction/fresh";
import reduceValues from "@unction/reducevalues";
import {PredicateFunctionType} from "./types";
import {EnumerableType} from "./types";

export default function partition<A> (predicate: PredicateFunctionType<A>) {
  return function partitionPredicate (enumerable: EnumerableType<A>): [EnumerableType<A>, EnumerableType<A>] {
    const freshEnumerable = fresh(enumerable);
    const initalEnumerablePair = [freshEnumerable, freshEnumerable];

    return reduceValues((accumulation: [EnumerableType<A>, EnumerableType<A>]) => (value: A) => {
      const [consequent, alternate] = accumulation;
      const appendedValue = append(value);

      if (predicate(value)) {
        return couple(appendedValue(consequent))(alternate);
      }

      return couple(consequent)(appendedValue(alternate));
    })(initalEnumerablePair)(enumerable);
  };
}
