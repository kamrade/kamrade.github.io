// useless

export function deleteFromArrayByValue<T>(arr: T[], value: T) {
  let index = arr.indexOf(value);
  if (index !== -1) {
    return arr.splice(index, 1);
  } else {
    return arr;
  }
}