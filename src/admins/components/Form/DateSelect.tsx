import { Select } from "@mantine/core";

interface DateSelect {
  /** 최저년도 */
  min: number;

  /** 최대년도 */
  max: number;

  /** 기본년도 */
  defaultValue: number;

  onChange?: (value: string) => void;
}

export default function DateSelect({
  min,
  max,
  defaultValue,
  onChange,
}: DateSelect) {
  const years = Array.from({ length: max - min + 1 }, (_, i) =>
    (min + i).toString(),
  );
  const stringDefault = defaultValue.toString();
  return (
    <Select
      data={years}
      defaultValue={stringDefault}
      searchable
      onChange={(value) => {
        if (value && onChange) onChange(value);
      }}
    ></Select>
  );
}
