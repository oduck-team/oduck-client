import { useCallback, useState } from "react";

export default function useLocalStorage<T>(key: string, initialValue?: T) {
  const getStorageValue = useCallback(
    (key: string) => {
      const storageValue = window.localStorage.getItem(key);

      if (storageValue === null) {
        return initialValue as T;
      }

      return deserialize(storageValue);
    },
    [initialValue],
  );

  const [value, setValue] = useState<T | null>(getStorageValue(key));

  const setStorageValue = (value: T) => {
    setValue(value);
    window.localStorage.setItem(key, serialize(value));
  };

  const removeStorageValue = () => {
    setValue(null);
    window.localStorage.removeItem(key);
  };

  return { value, setStorageValue, removeStorageValue } as const;
}

function serialize<T>(value: T) {
  try {
    return JSON.stringify(value);
  } catch (e) {
    console.log(e);
    throw new Error("Failed to serialize the value");
  }
}

function deserialize(value: string) {
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}
