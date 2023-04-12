// Types

export interface OutlineBtnTypes {
  text: string;
  icon?: string;
  width: string;
  height: string;
}

export interface SolidBtnTypes extends OutlineBtnTypes {
  link?: string;
  bg: string;
  onClickSolidBtn?: () => void;
}
