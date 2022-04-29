import * as Options from "./options";

// Layout

export interface Divider { // horizontal line
  type?: Options.DividerType; // default = solid
  textContent?: string; // if needed
  textPosition?: Options.DividerTextPosition; // if provided
  space?: number; // default = 16
}

export interface Space { // Crowded components horizontal spacing.
  gap?: number; // default = 8
}

// Container
// Grid = bootstrap
// Panel
// Card
