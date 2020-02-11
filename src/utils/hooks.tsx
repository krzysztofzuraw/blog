import * as React from 'react';

export const useLocalStorage = (key: string, initialValue: any) => {
  // taken from https://usehooks.com/useLocalStorage
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: any) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.log(error);
    }
  };

  return [storedValue, setValue];
};
