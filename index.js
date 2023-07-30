function bestIntervalInDay(strArr) {
  let timesIntervalArr = [];

  const hoursToMinutes = (time) => {
    let allMinutes = 0;
    let hoursInMinutes = parseInt(time.slice(0, 2)) * 60;
    const minutes = parseInt(time.slice(3, 5));

    const isMiddleDay = hoursInMinutes / 60 !== 12;

    if (time.includes("PM") && isMiddleDay) {
      hoursInMinutes += 12 * 60;
    }

    allMinutes += hoursInMinutes;

    allMinutes += minutes;
    return allMinutes;
  };

  strArr.forEach((timesInterval) => {
    const [firstTime, lastTime] = timesInterval.split("-");
    timesIntervalArr.push([
      hoursToMinutes(firstTime),
      hoursToMinutes(lastTime),
    ]);
  });
  timesIntervalArr = timesIntervalArr.sort((a, b) => a[0] - b[0]);

  let bestInterval = 0;

  timesIntervalArr.forEach((minutes, index, arr) => {
    const nextArr = arr[index + 1];
    if (nextArr) {
      const interval = nextArr[0] - minutes[1];
      if (bestInterval < interval) {
        bestInterval = interval;
      }
    }
  });

  const formatResponse = (minutes) => {
    const hours = parseInt(minutes / 60);
    const parsedMinutes = minutes % 60;
    return `${hours > 10 ? hours : `0${hours}`}:${
      parsedMinutes > 10 ? parsedMinutes : `0${parsedMinutes}`
    }`;
  };

  return formatResponse(bestInterval);
}

module.exports = bestIntervalInDay;
