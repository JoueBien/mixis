// import { MidiTransport } from "@joue-bien/rtp-midi-transport";
// import { setupClient } from "@joue-bien/rtp-midi-transport/testing";

export function createObjectStore<T extends Record<string, unknown>>(
  defaultValue: T,
) {
  let store = {
    state: defaultValue,
  };

  function set(value: T) {
    store.state = value;
  }

  function patch(value: Partial<T>) {
    store.state = {
      ...store.state,
      ...value,
    };
  }

  function get(): { state: T } {
    return store;
  }

  return {
    store,
    set,
    patch,
    get,
  };
}

// setupClient;

// MidiTransport
// export function createStore<T extends object>(defaultState: T) {
//   const store: T = JSON.parse(JSON.stringify(defaultState));

//   const set = <R extends keyof T>(key: R, value: T[R]) => {
//     store[key] = value;
//   };

//   const patchArray = <R extends keyof T>(
//     key: R,
//     index: number,
//     value: T[R],
//   ) => {
//     if (Array.isArray(store[key]) && Array.isArray(value) && value.length > 0) {
//       // store[key][index] = value[0];
//       // copy array section.
//     }
//   };

//   // T[R][number];
//   const pushArray = <R extends keyof T>(
//     key: R,
//     index: number,
//     value: R extends any[] ? T[R] : never,
//   ) => {
//     if (Array.isArray(store[key])) {
//       store[key][index] = value;
//     }
//   };

//   return {
//     store,
//     set,
//     patchArray,
//   };
// }

// const { store, set, patchArray } = createStore<{
//   test: string;
//   ar: string[];
// }>({ test: "val", ar: ["sss", ""] });

// set("test", "saasdasdasd");
// set("ar", []);

// patchArray("ar", 0, []);

// patchArray("test", 0, []);
