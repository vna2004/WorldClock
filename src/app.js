function updateTime() {
  //Toronto
  let torontoElement = document.querySelector("#toronto");
  if (torontoElement) {
    let torontoDateElement = torontoElement.querySelector(".date");
    let torontoTimeElement = torontoElement.querySelector(".time");

    let torontoMomentTZ = moment().tz("America/Toronto");

    torontoDateElement.innerHTML = torontoMomentTZ.format("MMMM Do YYYY");
    torontoTimeElement.innerHTML = torontoMomentTZ.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
  }

  //Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");

    let parisMomentTZ = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisMomentTZ.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisMomentTZ.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
  }

  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");

    let tokyoMomentTZ = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoMomentTZ.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoMomentTZ.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
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
        <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}</div>
    </div>
  `;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

updateTime();
setInterval(updateTime, 1000);
