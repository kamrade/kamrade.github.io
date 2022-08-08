// useless. why?

export function deleteFromArrayByValue<T>(arr: T[], value: T) {

  let index = arr.indexOf(value);

  while (index !== -1) {
    arr.splice(index, 1);
    index = arr.indexOf(value);
  }

  return arr;
}
