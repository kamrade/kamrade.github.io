// General
import * as Options from "./options";

// React icons
export interface Icon {
  name: Options.IconName;
  size: number;
  color: string;
}

// - [ ] Loading
// - [ ] Outline
// - [ ] More themes
// - [ ] More themes
// - [ ] Link and Anchor button
export interface ButtonProperties {
  size?: Options.Size; // default = sm
  block?: boolean; // default = false
  theme?: Options.Theme; // default = default
  prefix?: Icon;
  suffix?: Icon;
  disabled?: boolean;
  loading?: boolean;
  hover: boolean;
  active: boolean;
  focus: boolean;
}

export interface IconButtonProperties {
  size?: Options.Size;
  icon?: Icon;
  block?: boolean;
  theme?: Options.Theme;
  disabled?: boolean;
  loading?: boolean;
  hover: boolean;
  active: boolean;
  focus: boolean;
}
