import { InputStyle } from './InputStyle';
import { Option } from '../../models/types/Option';
import { InputType } from './InputType';

export type InputProps = {
  placeholder?: string,
  inputType?: InputType,
  onChange?: (value: string) => any,
  value?: string,
  isSelect?: boolean,
  options?: Array<Option>
  setTargetOption?: (props: any) => any,
  targetOption?: Option,
  disablePast?: boolean,
  shouldDisableTime?: () => any,
  inputStyle?: InputStyle,
  width?: string,
  height?: string,
  disabled?: boolean
}
