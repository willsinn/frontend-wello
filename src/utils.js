export const getCurrentDate = () => {
  let newDate = new Date();
  newDate = newDate.toDateString();
  let newTime = new Date();
  newTime = newTime.toTimeString();

  let currDate = `${newDate} ${newTime}`;
  currDate = currDate.split(" GMT-");
  return currDate[0];
};

export const getUrl = () => {
  return "http://ec2-52-86-173-242.compute-1.amazonaws.com:3000";
};
//ask rob if theres a better way of exporting the fetch url.
