import { InputType } from './InputType';

export type InputProps = {
  placeholder?: string,
  inputType?: InputType | string,
  onChange?: Function,
  value?: string,
}
