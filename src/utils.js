export const getCurrentDate = () => {
  let newDate = new Date();
  newDate = newDate.toDateString();
  let newTime = new Date();
  newTime = newTime.toTimeString();

  let currDate = `${newDate} ${newTime}`;
  currDate = currDate.split(" GMT-");
  return currDate[0];
};

export const fetchUrl = (() => {
  const url = document.location;
  if (url.host.includes("localhost")) return "http://localhost:3000";
  if (url.host.includes("mywellotask"))
    return "https://backend.mywellotask.com";
  else console.log("No saved fetch url current developer build!!");
})();
