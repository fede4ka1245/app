import { InputStyle } from './InputStyle';
import { Option } from '../../helpers/Option';
import { InputType } from './InputType';

export type InputProps = {
  placeholder?: string,
  inputType?: InputType,
  onChange?: (value: string) => any,
  value?: string,
  isSelect?: boolean,
  options?: Array<Option>
  setTargetOption?: Function,
  targetOption?: Option,
  disablePast?: boolean,
  shouldDisableTime?: () => any,
  inputStyle?: InputStyle,
}
