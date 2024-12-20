function updateTime() {
  let bangkokElement = document.querySelector("#bangkok");
  let bangkokDateElement = bangkokElement.querySelector(".date");
  let bangkokTimeElement = bangkokElement.querySelector(".time");
  let bangkokTime = moment().tz(`Asia/Bangkok`);

  bangkokDateElement.innerHTML = moment().format(`MMMM Do YYYY`);
  bangkokTimeElement.innerHTML = bangkokTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let osloElement = document.querySelector("#oslo");
  let osloDateElement = osloElement.querySelector(".date");
  let osloTimeElement = osloElement.querySelector(".time");
  let osloTime = moment().tz(`Europe/Oslo`);

  osloDateElement.innerHTML = moment().format(`MMMM Do YYYY`);
  osloTimeElement.innerHTML = osloTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
