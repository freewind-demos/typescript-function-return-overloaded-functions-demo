function buildKeys<T>(): {
  <P1 extends keyof NonNullable<T>>(prop1: P1): string;
  <P1 extends keyof NonNullable<T>, P2 extends keyof NonNullable<NonNullable<T>[P1]>>(prop1: P1, prop2: P2): string;
  <P1 extends keyof NonNullable<T>, P2 extends keyof NonNullable<NonNullable<T>[P1]>, P3 extends keyof NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>>(prop1: P1, prop2: P2, prop3: P3): string
} {
  return (...nestedKeys: string[]): string => {
    return nestedKeys.join('.');
  }
}

type State = {
  aaa: {
    bbb?: {
      ccc: string,
      ddd: string
    }
  }
}

const keys = buildKeys<State>()
const keyPath = keys('aaa', 'bbb', 'ccc')

console.log(keyPath);














