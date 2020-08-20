export const getCurrentDate = () => {
  let newDate = new Date();
  newDate = newDate.toDateString();
  let newTime = new Date();
  newTime = newTime.toTimeString();

  let currDate = `${newDate} ${newTime}`;
  currDate = currDate.split(" GMT-");
  return currDate[0];
};

export const fetchUrl = "https://d3vw9845ifmtai.cloudfront.net";

//ask rob if theres a better way of exporting the fetch url.
