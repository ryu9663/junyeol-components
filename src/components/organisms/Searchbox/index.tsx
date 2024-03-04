import {
  Input,
  InputProps,
  OptionType,
  Options,
  OptionsProps,
  ValidOptionValue,
} from "@/components/molecules";
import { ChangeEventHandler, useState } from "react";
import styles from "./index.module.scss";
import { cleanClassName } from "@/utils";

export type SearchboxSizeType = "small" | "normal" | "large";

export interface SearchboxProps<_ValidOptionValue = ValidOptionValue>
  extends Omit<InputProps, "size" | "type" | "validation">,
    Pick<OptionsProps, "fontSize" | "fontWeight"> {
  placeholder?: string;
  options: OptionType<_ValidOptionValue>[];
  upward?: boolean;
  onClickOption?: OptionsProps<_ValidOptionValue>["handleClickOption"];
  className?: string;
}

export const Searchbox = <_ValidOption extends ValidOptionValue>({
  placeholder,
  options,
  onChange,
  fontSize = "normal",
  fontWeight = 700,
  value,
  onClickOption,
  className,
}: SearchboxProps<_ValidOption>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState<
    OptionType<_ValidOption>[] | []
  >(options);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const _value = e.target.value;
    const _filteredOptions = options.filter((option) =>
      option.name.includes(_value || ""),
    );
    setFilteredOptions(_filteredOptions);
    onChange?.(e);
  };
  console.log("Searchbox");
  return (
    <div className={styles.searchbox_wrapper}>
      <Input
        className={cleanClassName(
          ` ${styles.selectbox_input} ${styles[`font-size-${fontSize}`]} ${
            styles[`font-weight-${fontWeight}`]
          }`,
        )}
        type="search"
        value={value}
        onChange={(e) => {
          !isOpen && setIsOpen(true);
          handleInputChange(e);
        }}
        onFocus={() => {
          !isOpen && setIsOpen(true);
        }}
        onBlur={() => setIsOpen(false)}
        placeholder={placeholder}
      />

      <Options
        isOpen={isOpen}
        className={cleanClassName(`${className} ${styles.searchbox_options}`)}
        fontSize={fontSize}
        fontWeight={fontWeight}
        onMouseDown={(e) => e.preventDefault()}
        options={filteredOptions}
        handleClickOption={(value) => {
          onClickOption?.(value);
          isOpen && setIsOpen(false);
        }}
      />
    </div>
  );
};
