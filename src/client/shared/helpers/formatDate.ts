export const formatDate = (dateValue: string) => {
  const date = new Date(dateValue);

  const formattedDate = date.toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  return formattedDate;
};
