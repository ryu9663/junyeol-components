const AsyncFunction = async function () {}.constructor;

// eslint-disable-next-line @typescript-eslint/ban-types
export const isAsync = (fn: Function) => fn instanceof AsyncFunction;
