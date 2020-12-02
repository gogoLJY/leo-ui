import Vue from 'vue';

export type ButtonType =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'text'
  | '';
export type ComponentSize = 'large' | 'medium' | 'small' | 'mini' | '';

export declare class Button extends Vue {
  type?: ButtonType;
  size?: ComponentSize;
  icon?: string;
  loading?: boolean;
  disabled?: boolean;
  round?: boolean;
  circle?: boolean;
}
