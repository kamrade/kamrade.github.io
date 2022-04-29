// General
import * as Options from "./options";

export interface Icon {
  name: Options.IconName;
  size: number;
  type?: Options.IconType;
}

// - [ ] Loading
// - [ ] Icon
// - [ ] Negative margin for child Icons
// - [ ] Size
// - [ ] Block
// - [ ] Outline
// - [ ] More themes
// - [ ] More themes
// - [ ] Use mixins and loops for theming and sizing.
// - [ ] Circled button
// - [ ] Link and Anchor button
export interface ButtonProperties {
  size?: Options.Size; // default = sm
  block?: boolean; // default = false
  theme?: Options.Theme; // default = default
  iconBefore?: Icon;
  iconAfter?: Icon;
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
