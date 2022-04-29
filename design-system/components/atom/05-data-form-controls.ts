// Data form controls
import * as Options from "./options";

export interface TextInput {
  type: Options.TextInputTypes;
  prefix?: any; // Icon, Text, Selector
  suffix?: any; // Icon, Text, Selector
  borderless: boolean;
  confirmCancel?: boolean; // +handler
  withClearIcon?: boolean; // +handler
  withCharacterCounter?: boolean; // +handler
  dataType?: Options.TextInputDataType; // default = text

  pristine: boolean;
  dirty: boolean;
  error: boolean;
  touched: boolean;

  hover: boolean;
  focus: boolean;
}

export interface TextArea {
  type: Options.TextInputTypes;

  borderless: boolean;
  confirmCancel?: boolean; // +handler
  withClearIcon?: boolean; // +handler
  withCharacterCounter?: boolean; // +handler

  pristine: boolean;
  dirty: boolean;
  error: boolean;
  touched: boolean;

  hover: boolean;
  focus: boolean;
}

export interface Autocomplete {
  // Combined TextInput and Dropdown.
}

export interface Checkbox {
  disabled?: boolean;

  checked: boolean;
  hover: boolean;
  active: boolean;
  focus: boolean;
}

export interface Radio {
  disabled?: boolean;

  checked: boolean;
  hover: boolean;
  active: boolean;
  focus: boolean;
}

export interface Switcher {
  disabled?: boolean;

  checked: boolean;
  hover: boolean;
  active: boolean;
  focus: boolean;
}

export interface DatePicker {
  // Dropdown with calendar.
  // To create DateRange picker use two DatePickers.
}

export interface Rate {
  // just five stars
}

export interface Select {
  // Select.Option
}

export interface Slider {

}

export interface Transfer {

}

export interface TreeSelect {

}

export interface Upload {

}

export interface Badge {

}

export interface Calendar {

}

export interface Card {

}

export interface Carousel {

}

export interface Collapse {

}

export interface Comment {

}

export interface DescriptionField {

}

export interface Empty {
  // Nothing found or NoData component
}

export interface Image {

}

export interface List {

}

export interface Popover {

}

export interface Segmented {

}

export interface Table {

}

export interface Tabs {
  // In relations with Router.
}

export interface Tag {

}

export interface Timeline {
  // Similar to Progress
}

export interface Tooltip {

}

export interface TreeView {

}
