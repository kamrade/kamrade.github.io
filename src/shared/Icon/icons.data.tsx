import React from "react";

export const icons: any = {

  chevronDown: (color: string, weight: number) => <path d="M6 9L12 15L18 9" stroke={color} strokeWidth={weight} strokeLinejoin="round" />,

  chevronLeft: (color: string, weight: number) => <path d="M15 18L9 12L15 6" stroke={color} strokeWidth={weight} strokeLinejoin="round" />,

  chevronRight: (color: string, weight: number) => <path d="M9 18L15 12L9 6" stroke={color} strokeWidth={weight} strokeLinejoin="round" />,

  hamburger: (color: string, weight: number) => (<>
    <path d="M3 12H21" stroke={color} strokeWidth={weight} strokeLinejoin="round" />
  <path d="M3 6H21" stroke={color} strokeWidth={weight} strokeLinejoin="round" />
  <path d="M3 18H21" stroke={color} strokeWidth={weight} strokeLinejoin="round" />
  </>),

  grid: (color: string, weight: number) => (<>
    <path fillRule="evenodd" clipRule="evenodd" d="M3 3H10V10H3V3Z" stroke={color} strokeWidth={weight} strokeLinejoin="round"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M14 3H21V10H14V3Z" stroke={color} strokeWidth={weight} strokeLinejoin="round"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M14 14H21V21H14V14Z" stroke={color} strokeWidth={weight} strokeLinejoin="round"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M3 14H10V21H3V14Z" stroke={color} strokeWidth={weight} strokeLinejoin="round"/>
  </>),

  x: (color: string, weight: number) => (<>
    <path d="M18 6L6 18" stroke="#1E222A" strokeWidth="2" strokeLinejoin="round"/>
  <path d="M6 6L18 18" stroke="#1E222A" strokeWidth="2" strokeLinejoin="round"/>
  </>)

}
