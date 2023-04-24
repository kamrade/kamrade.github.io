#!/bin/bash
mkdir $1
cd $1
touch $1.tsx
touch $1.scss
touch index.ts

echo "export { $1 } from './$1.tsx'" >> index.ts

echo "import React from 'react'" >> $1.tsx
echo "import './$1.scss';" >> $1.tsx
printf "\n" >> $1.tsx
echo "export interface $1Props {}" >> $1.tsx
printf "\n" >> $1.tsx
echo "export const $1: React.FC<$1Props> = () => {" >> $1.tsx
printf "\n" >> $1.tsx
echo "return ();" >> $1.tsx
printf "\n" >> $1.tsx
echo "}" >> $1.tsx
cat ./$1.tsx

echo "@import 'app/styles/uikit/global-variables';" >> $1.scss
printf "\n" >> $1.scss
echo ".$1 {}" >> $1.scss

cd ..
echo "export { $1 } from './$1';" >> ./index.ts