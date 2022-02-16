export type TriadNodeSize  = 'sm' | 'md' | 'lg';
export type TriadNodeShape = 'triangle' | 'square' | 'circle';
export type TriadNodeColor = 'primary' | 'secondary' | 'tertiary';
export type TriadNodeFill  = 'solid' | 'outline' | 'pattern';

export interface ITriadNodeProps {
  size:     TriadNodeSize;
  shape:    TriadNodeShape;
  color:    TriadNodeColor;
  fill:     TriadNodeFill;
  keyId:    number;
  onClick?:  (key: number) => void;
  selected?: boolean;
  unvisible?: boolean;
}

export const shapes: TriadNodeShape[]  = ['triangle', 'square', 'circle'];
export const sizes:  TriadNodeSize[]   = ['lg', 'md', 'sm'];
export const colors: TriadNodeColor[]  = ['primary', 'secondary', 'tertiary'];
export const fills:  TriadNodeFill[]   = ['solid', 'outline', 'pattern'];

export const primaryColor    = '#fed914';
export const secondaryColor  = '#0bdb45';
export const tertiaryColor   = '#2b99ff';

export const triadColors: any = { primary: primaryColor, secondary: secondaryColor, tertiary: tertiaryColor };
