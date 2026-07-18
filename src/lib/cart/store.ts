export type CartItem = {
  id: string;
  slug: string;
  name: string;
  price: string;
  image?: string;
  quantity: number;
};

type StoredCart = {
  version: 1;
  items: CartItem[];
};

const STORAGE_KEY = "hoptacdautu-cart";
const EMPTY_CART: CartItem[] = [];
const listeners = new Set<() => void>();
let cachedItems: CartItem[] = [];
let initialized = false;

function readStoredCart(): CartItem[] {
  if (typeof window === "undefined") return [];

  try {
    const rawValue = window.localStorage.getItem(STORAGE_KEY);
    if (!rawValue) return [];

    const stored = JSON.parse(rawValue) as StoredCart;
    return stored.version === 1 && Array.isArray(stored.items)
      ? stored.items
      : [];
  } catch {
    return [];
  }
}

function getClientSnapshot() {
  if (!initialized && typeof window !== "undefined") {
    cachedItems = readStoredCart();
    initialized = true;
  }
  return cachedItems;
}

function getServerSnapshot() {
  return EMPTY_CART;
}

function save(items: CartItem[]) {
  cachedItems = items;
  initialized = true;

  const payload: StoredCart = { version: 1, items };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  listeners.forEach((listener) => listener());
}

export function subscribeToCart(listener: () => void) {
  listeners.add(listener);

  function handleStorage(event: StorageEvent) {
    if (event.key !== STORAGE_KEY) return;
    cachedItems = readStoredCart();
    initialized = true;
    listener();
  }

  window.addEventListener("storage", handleStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", handleStorage);
  };
}

export function addCartItem(item: Omit<CartItem, "quantity">) {
  const items = getClientSnapshot();
  const existing = items.find((cartItem) => cartItem.id === item.id);

  if (existing) {
    save(
      items.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem,
      ),
    );
    return;
  }

  save([...items, { ...item, quantity: 1 }]);
}

export function updateCartItemQuantity(id: string, quantity: number) {
  if (quantity <= 0) {
    removeCartItem(id);
    return;
  }

  save(
    getClientSnapshot().map((item) =>
      item.id === id ? { ...item, quantity } : item,
    ),
  );
}

export function removeCartItem(id: string) {
  save(getClientSnapshot().filter((item) => item.id !== id));
}

export function clearCart() {
  save([]);
}

export const cartStore = {
  subscribe: subscribeToCart,
  getSnapshot: getClientSnapshot,
  getServerSnapshot,
};
