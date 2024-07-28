"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { FilterCheckboxProps } from "./filter-checkbox";
import { Button, Input } from "../ui";

type Item = FilterCheckboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItem: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValues?: string[];
  className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItem,
  limit = 5,
  searchInputPlaceholder = "Пошук...",
  onChange,
  defaultValues,
  className,
}) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  // const [value, setValue] = useState<string[]>(defaultValues || []);
  const [searchValue, setSearchValue] = useState<string>();

  const onChangeSearchValue = (value: string) => {
    setSearchValue(value);
  };

  const list = showAll ? items : defaultItem?.slice(0, limit);

  return (
    <div className={cn("", className)}>
      <p className='font-bold mb-3'></p>
      {showAll && (
        <div className='mb-5'>
          <Input
            onChange={(e) => onChangeSearchValue(e.target.value)}
            placeholder={`${searchInputPlaceholder}`}
            className='bg-gray-50 border-none'
          />
        </div>
      )}

      <div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
        {list.map((item, index) => (
          <FilterCheckboxProps
            // onCheckedChange={() => onCheckedChange(item.value)}
            onCheckedChange={(ids) => console.log(ids)}
            // checked={selected.has(item.value)}
            checked={false}
            key={String(item.value)}
            value={item.value}
            text={item.text}
            endAdornment={item.endAdornment}
          />
        ))}
      </div>

      {items.length > limit && (
        <div
          className={
            showAll ? "border-t border-t-neutral-100 mt-4" : ""
          }
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className={"text-primary mt-3"}
          >
            {showAll ? "Приховати" : "+ Показати все"}
          </button>
        </div>
      )}
    </div>
  );
};
