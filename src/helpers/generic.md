const last = <T>(arr: T[]): T => {
  return arr[arr.length - 1];
};

const l = last([1, 2, 3, 4, 5, 6]);
const l2 = last(["1", "2", "3", "4"]);

const makeArr = <X, Y>(x: X, y: Y): [X, Y] => {
  return [x, y];
};

const v = makeArr(5, 6);
const v2 = makeArr("a", "c");
const v3 = makeArr<string | null, number>("A", 5);

const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
  };
};

var v4 = makeFullName({ firstName: "Rian", lastName: "Khanafi", age: 20 });

interface Tab<T> {
  id: string;
  position: string;
  data: T[];
}

type NumberTab = Tab<number>;

const TabNum = <T extends NumberTab>(data: T): T => {
  return data;
};

const v6 = TabNum({ id: "1", position: "FE", data: [1, 2, 3] });
