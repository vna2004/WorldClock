function updateTime() {
  //Toronto
  let torontoElement = document.querySelector("#toronto");
  let torontoDateElement = torontoElement.querySelector(".date");
  let torontoTimeElement = torontoElement.querySelector(".time");

  let torontoMomentTZ = moment().tz("America/Toronto");

  torontoDateElement.innerHTML = torontoMomentTZ.format("MMMM Do YYYY");
  torontoTimeElement.innerHTML = torontoMomentTZ.format(
    "HH:mm:ss [<small>]A[</small>]"
  );

  //Paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");

  let parisMomentTZ = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisMomentTZ.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisMomentTZ.format(
    "HH:mm:ss [<small>]A[</small>]"
  );

  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");

  let tokyoMomentTZ = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoMomentTZ.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoMomentTZ.format(
    "HH:mm:ss [<small>]A[</small>]"
  );
}

setInterval(updateTime, 1000);
