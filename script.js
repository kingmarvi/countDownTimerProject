const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  
  //  variable set up
  const giveaway = document.querySelector('.giveaway');
  const deadline = document.querySelector('.deadline');
  const property = document.querySelectorAll('.deadline-format h4');
  
  // **getting the year**
  let tempDate = new Date();
  let tempYear = tempDate.getFullYear();
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDate();
  
  // months are ZERO index based;
  const futureDate = new Date(tempYear, tempMonth, tempDay + 22, 11, 30, 0);
  
  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  const minutes = futureDate.getMinutes();
  
  
  // getting the current month and day
  let month = futureDate.getMonth();
  month = months[month];
  const weekday = weekdays[futureDate.getDay()];
  const date = futureDate.getDate();
  giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}pm`;
  
  const futureTime = futureDate.getTime();
  function getRemainingTime() {
    const today = new Date().getTime();
  
    const val = futureTime - today;
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24hr
    // values in miliseconds
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    // calculate all values
    let days = val / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((val % oneDay) / oneHour);
    let minutes = Math.floor((val % oneHour) / oneMinute);
    let seconds = Math.floor((val % oneMinute) / 1000);
  
    // set values array
    const values = [days, hours, minutes, seconds];
    function format(item) {
      if (item < 10) {
        return (item = `0${item}`);
      }
      return item;
    }
  
    property.forEach(function (item, index) {
      item.innerHTML = format(values[index]);
    });
  
    if (val < 0) {
      clearInterval(countdown);
      deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
    }
  }
  // countdown;
  let countdown = setInterval(getRemainingTime, 1000);
  //set initial values
  getRemainingTime();
  