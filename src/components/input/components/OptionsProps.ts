import { Option } from '../../../helpers/Option';

export type OptionsProps = {
  isOpen: boolean,
  setTargetOption?: Function,
  close: Function,
  options?: Array<Option>,
}
