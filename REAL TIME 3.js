function updateTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const month = currentTime.getMonth();
    const day = currentTime.getDate();
    const year = currentTime.getFullYear();

    const monthList = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    const monthName = monthList[month];
    const timeString = ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')};
    const dateString = ${monthName} ${day}, ${year};
    document.getElementById('time').innerText = ${dateString} - ${timeString};
}

setInterval(updateTime, 1000);