// Võ Minh Tài - 23521382
import { useState } from "react";

export function useSelection() {
  const [selected, setSelected] = useState<ReadonlySet<string>>(
    () => new Set(),
  );

  const toggle = (label: string) => {
    setSelected((current) => {
      const next = new Set(current);
      if (!next.delete(label)) {
        next.add(label);
      }
      return next;
    });
  };

  return { selected, toggle };
}

export type Selection = ReturnType<typeof useSelection>;
