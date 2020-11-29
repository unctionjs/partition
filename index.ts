import append from "@unction/append";
import couple from "@unction/couple";
import fresh from "@unction/fresh";
import reduceValues from "@unction/reducevalues";
import {PredicateFunctionType} from "./types";

export default function partition<A> (predicate: PredicateFunctionType<A>) {
  return function partitionPredicate (enumerable: Array<A> | Set<A> | RecordType<unknown, A> | string): [Array<A> | Set<A> | RecordType<unknown, A> | string, Array<A> | Set<A> | RecordType<unknown, A> | string] {
    const freshEnumerable = fresh(enumerable);
    const initalEnumerablePair = [freshEnumerable, freshEnumerable];

    return reduceValues((accumulation: [Array<A> | Set<A> | RecordType<unknown, A> | string, Array<A> | Set<A> | RecordType<unknown, A> | string]) => (value: A) => {
      const [consequent, alternate] = accumulation;
      const appendedValue = append(value);

      if (predicate(value)) {
        return couple(appendedValue(consequent))(alternate);
      }

      return couple(consequent)(appendedValue(alternate));
    })(initalEnumerablePair)(enumerable);
  };
}
