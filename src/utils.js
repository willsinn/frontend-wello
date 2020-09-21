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
  return "http://ec2-54-92-207-170.compute-1.amazonaws.com:3000";

  // const url = document.location;
  // if (url.host.includes("localhost")) return "http://localhost:3000";

  // if (url.host.includes("compute-1.amazonaws.com"))
  //   return "http://ec2-54-92-207-170.compute-1.amazonaws.com:3000";

  // if (url.host.includes("wello.ga"))
  //   return "http://ec2-54-92-207-170.compute-1.amazonaws.com:3000";

  // if (url.host.includes("mywellotask"))
  //   return "https://backend.mywellotask.com";
  // else console.log("No saved fetch url current developer build!!");
})();

export const getInitialData = () => {
  let uniqueId = 0;
  function getItems(count) {
    return Array.from({ length: count }, (v, k) => {
      const id = uniqueId++;
      return {
        id: `id:${id}`,
        text: `item ${id}`,
      };
    });
  }

  const initial = {
    columns: {
      "column-0": {
        id: "column-0",
        title: "First column",
        items: getItems(1000),
      },
      "column-1": {
        id: "column-1",
        title: "Second column",
        items: getItems(1000),
      },
    },
    columnOrder: ["column-0", "column-1"],
  };

  return initial;
};
export const reorderList = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
