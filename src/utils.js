export const getCurrentDate = () => {
  let newDate = new Date();
  newDate = newDate.toDateString();
  let newTime = new Date();
  newTime = newTime.toTimeString();

  let currDate = `${newDate} ${newTime}`;
  currDate = currDate.split(" GMT-");
  return currDate[0];
};

export const fetchUrl = "http://ec2-35-168-2-112.compute-1.amazonaws.com";

//ask rob if theres a better way of exporting the fetch url.
