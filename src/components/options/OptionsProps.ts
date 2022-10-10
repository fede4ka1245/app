import { Option } from '../../helpers/Option';

export type OptionsProps = {
  options?: Array<Option>,
  value?: any,
  setValue?: (props: any) => any,
  isScrollable?: boolean,
  isOutlined?: boolean,
  limit?: number
}
