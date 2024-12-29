function updateTime() {
  let bangkokElement = document.querySelector("#bangkok");
  if (bangkokElement) {
    let bangkokDateElement = bangkokElement.querySelector(".date");
    let bangkokTimeElement = bangkokElement.querySelector(".time");
    let bangkokTime = moment().tz(`Asia/Bangkok`);

    bangkokDateElement.innerHTML = moment().format(`MMMM Do YYYY`);
    bangkokTimeElement.innerHTML = bangkokTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let osloElement = document.querySelector("#oslo");
  if (osloElement) {
    let osloDateElement = osloElement.querySelector(".date");
    let osloTimeElement = osloElement.querySelector(".time");
    let osloTime = moment().tz(`Europe/Oslo`);

    osloDateElement.innerHTML = moment().format(`MMMM Do YYYY`);
    osloTimeElement.innerHTML = osloTime.format("h:mm:ss [<small>]A[</small>]");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
              <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
              <div class="time">${cityTime.format(
                "h:mm:ss"
              )} <small>${cityTime.format("A")}</small></div>
  </div>`;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
