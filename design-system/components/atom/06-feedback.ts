// Feedback
import * as Options from "./options";

export interface Alert {

}

export interface Drawer {

}

export interface Message {

}

export interface Modal {

}

export interface Notification {

}

export interface PopConfirm {

}

export interface Progress {

}

export interface Result {
  // Success, Warning, Danger.
}

export interface Skeleton {
  /*
  // When to use
  // - When a resource needs long time to load.
  // - When the component contains lots of information, such as List or Card.
  // - Only works when loading data for the first time.
  // - Could be replaced by Spin in any situation, but can provide a better user experience.
  */
  rows?: number; // default = 3
  rowSize: Options.Size | number;
  rowsBlock?: boolean;
  avatar?: boolean;
  active?: boolean; // animated

}

export interface Spinner {
  // When part of the page is waiting for asynchronous data or during a rendering process,
  // an appropriate loading animation can effectively alleviate users' inquietude.

  size?: Options.Size; // default = sm

}
