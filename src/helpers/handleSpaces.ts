export const handleSpaces = (
  city: string,
  separator: string = " ",
  join: string = "_"
) => {
  return city.split(separator).join(join);
};
