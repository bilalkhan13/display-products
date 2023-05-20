import React from "react";

const FormattedDate = ({ date }) => {
  const formatDate = (inputDate) => {
    const dateObj = new Date(inputDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return dateObj.toLocaleDateString("en-US", options);
  };

  return <span>{formatDate(date)}</span>;
};

export default FormattedDate;
