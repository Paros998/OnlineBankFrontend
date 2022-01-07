import { defaultRowStyle } from './defaultRowStyle';

export const defaultColumnStyle = {
  headerAlign: 'center',
  headerClasses: 'border-top text-dark',
  classes: () => {
    return defaultRowStyle;
  },
}
