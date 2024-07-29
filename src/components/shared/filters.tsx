import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "./title";
import { FilterCheckboxProps } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <Title
        text='Фільтрація'
        size={"sm"}
        className='mb-5 font-bold'
      />
      {/* верхні чекбокси */}
      <div className='flex flex-col gap-4'>
        <FilterCheckboxProps text='Можна зібрати' value='1' />
        <FilterCheckboxProps text='Новинки' value='2' />
      </div>

      {/* Фільтер цін */}
      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className=' font-bold mb-3 '>Ціна від і до</p>
        <div className=' flex gap-3 mb-5'>
          <Input
            type='number'
            placeholder='0'
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input
            type='number'
            placeholder='1000'
            min={100}
            max={1000}
          />
        </div>
        <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
      </div>

      {/* нижні чекбокси */}
      <CheckboxFiltersGroup
        title='Інгредієнти'
        className='mt-5'
        limit={6}
        defaultItem={[
          {
            text: "соус",
            value: "1",
          },
          {
            text: "соус2",
            value: "2",
          },
          {
            text: "соус2",
            value: "3",
          },
          {
            text: "соус3",
            value: "4",
          },
          {
            text: "соус5",
            value: "5",
          },
          {
            text: "соус6",
            value: "6",
          },
          {
            text: "соус7",
            value: "7",
          },
          {
            text: "соус8",
            value: "8",
          },
        ]}
        items={[
          {
            text: "соус",
            value: "1",
          },
          {
            text: "соус2",
            value: "2",
          },
          {
            text: "соус2",
            value: "3",
          },
          {
            text: "соус3",
            value: "4",
          },
          {
            text: "соус5",
            value: "5",
          },
          {
            text: "соус6",
            value: "6",
          },
          {
            text: "соус7",
            value: "7",
          },
          {
            text: "соус8",
            value: "8",
          },
          {
            text: "соус4",
            value: "43",
          },
          {
            text: "соус2",
            value: "46",
          },
          {
            text: "соус2",
            value: "33",
          },
          {
            text: "соус3",
            value: "47",
          },
          {
            text: "соус5",
            value: "54",
          },
          {
            text: "соус6",
            value: "64",
          },
          {
            text: "соус7",
            value: "74",
          },
          {
            text: "соус8",
            value: "84",
          },
        ]}
      />
    </div>
  );
};
