"use client";

/* eslint-disable no-plusplus */
// eslint-disable-next-line import/no-extraneous-dependencies
// import { computed, effect, signal } from "@preact/signals-react";
// import { computed, effect, signal } from "@preact/signals-react";
import React from "react";
import {
  computed,
  effect,
  signal,
  useComputed,
  useSignal,
  useSignalAndValue,
  useSignalValue,
} from "signals-react-safe";

const count = signal(1);
const double = signal(count.value * 2);

effect(() => {
  console.log("count", count.value);
  console.log("double", double.value);
});

export default function Sample() {
  const local = useSignal(100);
  const localValue = useSignalValue(local);
  const localDouble = useComputed(() => local.value * 2);

  const counterValue = useSignalValue(count);
  const doubletwo = computed(() => count.value * 2);

  const [countHook, countValueHook] = useSignalAndValue<number>(0);

  const doubleValue = useSignalValue(double);

  console.log("local :>> ", local.value);
  console.log("localDouble :>> ", localDouble);
  return (
    <div className="flex w-screen h-screen justify-center items-center flex-col">
      <button type="button" onClick={() => local.value++}>
        local : {localValue}
      </button>
      doubletwo: {doubletwo.value}
      <button type="button" onClick={() => countHook.value++}>
        hook : {countValueHook}
      </button>
      <button type="button" onClick={() => count.value++}>
        count
      </button>
      <button type="button" onClick={() => double.value++}>
        double
      </button>
      <div>{count.value}</div>
      <div>counterValue: {counterValue}</div>
      <div>doubleValue: {doubleValue}</div>
      <div>{double.value}</div>
    </div>
  );
}
