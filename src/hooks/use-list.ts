import { useState, useCallback } from 'react';
import nanoid from 'nanoid';

export interface Item<T = string> {
  id: string;
  value: T;
}

interface Methods<T = string> {
  set: React.Dispatch<React.SetStateAction<Item<T>[]>>;
  add(...items: T[]): Item<T>[];
  remove(id: string): void;
  clear(): void;
  handlePaste(event: React.ClipboardEvent): void;
}

export const createItem = <T>(value: T): Item<T> => ({ id: nanoid(), value });

export const useList = <T = string>(
  initial: T[] = [],
): [Item<T>[], Methods<T>] => {
  const [values, setValues] = useState(() => initial.map(createItem));

  const add = useCallback((...values: T[]) => {
    const items = values.map(createItem);
    setValues(p => p.concat(items));
    return items;
  }, []);

  const remove = useCallback((id: string) => {
    setValues(values => values.filter(item => item.id !== id));
  }, []);

  const clear = useCallback(() => setValues([]), []);

  const handlePaste = useCallback(
    (event: React.ClipboardEvent) => {
      const paste = event.clipboardData.getData('text');
      const pastedValues = paste
        .split('\n')
        .map(name => name.replace(/\s/g, ' '));
      add(...((pastedValues as unknown) as T[]));
      event.preventDefault();
    },
    [add],
  );

  return [values, { set: setValues, add, remove, clear, handlePaste }];
};
