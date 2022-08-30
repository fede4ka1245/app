import { InputType } from './InputType';
import { Option } from '../../helpers/Option';

export type InputProps = {
  placeholder?: string,
  inputType?: InputType | string,
  onChange?: Function,
  value?: string,
  isSelect?: boolean,
  options?: Array<Option>
  setTargetOption?: Function,
  targetOption?: Option
}
