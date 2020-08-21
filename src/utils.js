export const getCurrentDate = () => {
  let newDate = new Date();
  newDate = newDate.toDateString();
  let newTime = new Date();
  newTime = newTime.toTimeString();

  let currDate = `${newDate} ${newTime}`;
  currDate = currDate.split(" GMT-");
  return currDate[0];
};

function returnUrlContext() {
  const context = window.location.hostname;
  if (context === "localhost") return "http://localhost:3000";
  if (context === "mywellotask") return "https://backend.mywellotask.com";
}
export const fetchUrl = returnUrlContext();
