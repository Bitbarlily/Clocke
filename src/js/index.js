function updateTime() {
  let cities = document.querySelector("#cities").querySelectorAll(".city");
  if (cities && cities.length > 0) {
    cities.forEach((cityElement) => {
      updateCityElement(cityElement);
    });
  }
}

function updateCityElement(element) {
  let dateElement = element.querySelector(".date");
  let timeElement = element.querySelector(".time");

  let tzElement = element.querySelector(".tz-info-hidden");

  let time = moment().tz(tzElement.innerHTML);

  dateElement.innerHTML = moment().format(`MMMM Do YYYY`);
  timeElement.innerHTML = time.format("h:mm:ss [<small>]A[</small>]");
}

function updateCity(event) {
  let cityTimeZone = event.target.value;

  if (cityTimeZone === "") {
    onBack();
  } else if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
  <div class="tz-info-hidden">${cityTimeZone}</div>
    <div>
      <h2>${cityName}</h2>
              <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
              <div class="time">${cityTime.format(
                "h:mm:ss"
              )} <small>${cityTime.format("A")}</small></div>
  </div>`;

  let back = document.querySelector("#back");

  if (back.classList.contains("hidden")) {
    back.classList.remove("hidden");
  }
}

function onBack() {
  let citiesSelectElement = document.querySelector("#city");
  citiesSelectElement.value = "";
  window.location.reload();
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
citiesSelectElement.value = "";
let back = document.querySelector("#back");
back.addEventListener("click", onBack);

updateTime();
setInterval(updateTime, 1000);
