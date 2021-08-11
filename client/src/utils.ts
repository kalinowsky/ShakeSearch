export type TMap<TKey extends string | number, TValue> = {
  [K in TKey]: TValue;
};
export type SMap<TValue> = TMap<string, TValue>;

export type State<T extends string> = {
  type: T;
};

export type ValueState<T extends string, V extends any> = State<T> & {
  value: V;
};

export type F0<R = void> = () => R;
export type F1<T, R = void> = (arg: T) => R;
export type F2<T1, T2, R = void> = (arg1: T1, arg2: T2) => R;

export type NotFetched = State<"NotFetched">;
export type Fetching = State<"Fetching">;
export type Fetched<T> = ValueState<"Fetched", T>;
export type FetchError = ValueState<"FetchError", string>;
export type Async<T> = NotFetched | Fetching | Fetched<T> | FetchError;
