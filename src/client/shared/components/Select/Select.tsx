import * as React from "react";
import { FC } from "react";
import * as S from "./Select.style";

type SelectProps = {
  children?: React.ReactNode;
  onChange(e: any): void;
};

const Select: FC<SelectProps> = ({ children, onChange }) => {
  return <S.Select onChange={onChange}>{children}</S.Select>;
};

export default Select;
