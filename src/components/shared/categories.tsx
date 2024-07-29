"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";

interface Props {
  className?: string;
}

const cats = [
  { id: 1, name: "Піци" },
  { id: 2, name: "Комбо" },
  { id: 3, name: "Закуски" },
  { id: 4, name: "Коктелі" },
  { id: 5, name: "Напої" },
  { id: 6, name: "Десерити" },
  { id: 7, name: "Кава" },
  { id: 8, name: "Десерити" },
];

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore(
    (state) => state.activeId
  );
  return (
    <div
      className={cn(
        "inline-flex gap-1 bg-gray-50 p-1 rounded-2xl",
        className
      )}
    >
      {cats &&
        cats.map(({ name, id }, index) => (
          <a
            href={`/#${name}`}
            className={cn(
              "flex items-center font-bold h-11 rounded-2xl px-5",
              categoryActiveId === index + 1 &&
                "bg-white shadow-md shadow-gray-200 text-primary"
            )}
            key={`${`${name}` + `${id}`}`}
          >
            <button>{name}</button>
          </a>
        ))}
    </div>
  );
};
