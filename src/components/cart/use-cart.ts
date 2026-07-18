"use client";

import { useSyncExternalStore } from "react";
import { cartStore } from "@/lib/cart/store";

export function useCart() {
  return useSyncExternalStore(
    cartStore.subscribe,
    cartStore.getSnapshot,
    cartStore.getServerSnapshot,
  );
}
