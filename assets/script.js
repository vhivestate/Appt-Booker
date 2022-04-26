var userdata = [];

var formEl = document.querySelector("#client-form");

// Artist generator API
var apiUrl1 = "https://randomuser.me/api/?results=3";

// make a get request to url
fetch(apiUrl1).then(function (response) {
  // request was successful
  if (response.ok) {
    response.json().then(function (data) {
      console.log(data);
      document.getElementById("artist-name").innerHTML =
        data.results[0].name.first + " " + data.results[0].name.last;
      document.getElementById("artist-email").innerHTML = data.results[0].email;
      document.getElementById("artist-picture").innerHTML =
        '<img src="' + data.results[0].picture.large + '">';

      document.getElementById("artist2-name").innerHTML =
        data.results[1].name.first + " " + data.results[1].name.last;
      document.getElementById("artist2-email").innerHTML =
        data.results[1].email;
      document.getElementById("artist2-picture").innerHTML =
        '<img src="' + data.results[1].picture.large + '">';

      document.getElementById("artist3-name").innerHTML =
        data.results[2].name.first + " " + data.results[2].name.last;
      document.getElementById("artist3-email").innerHTML =
        data.results[2].email;
      document.getElementById("artist3-picture").innerHTML =
        '<img src="' + data.results[2].picture.large + '">';
    });
  } else {
    // if not successful, redirect to homepage
    document.location.replace("./index.html");
  }
});

//Artist artwork API

var arpiUrl2 =
  "https://api.unsplash.com/search/photos?query=tattoos&client_id=Chnlt6LfE5Dpl4Ue1FZQfW_mzKt1G-BhBPbIAvx1A1E";

const getImageButton = document.querySelector(".getImageButton");
const imageToDisplay = document.querySelector(".imageToDisplay");

getImageButton.addEventListener("click", async () => {
  let randomImage = await getNewImage();
  imageToDisplay.src = randomImage;
});

async function getNewImage() {
  let randomNumber = Math.floor(Math.random() * 10);
  return fetch(arpiUrl2)
    .then((response) => response.json())
    .then((data) => {
      let allImages = data.results[randomNumber];
      return allImages.urls.small;
    });
}

var formHandler = function () {
  event.preventDefault();
  var formNameInput = document.querySelector("input[name='name']").value;
  var formEmailInput = document.querySelector("input[name='email']").value;
  var formPhoneInput = document.querySelector("input[name='phone']").value;
  var formConfirmAgeInput = document.querySelector("input[name='age-confirm']");
  var formDescInput = document.querySelector(
    "textarea[name='tat-description']"
  ).value;
  var formArtistSelect = document.querySelector("input[name='answer']");
  // check if inputs are empty
  if (
    formNameInput === "" ||
    formEmailInput === "" ||
    formPhoneInput === "" ||
    formConfirmAgeInput.checked === false ||
    formDescInput === "" ||
    formArtistSelect.checked === false
  ) {
    alert("You need to fill out the Client Form!");
    return false;
  } else {
    saveForm();
  }
};

formEl.addEventListener("submit", formHandler);

var saveForm = function () {
  userdata.push(document.querySelector("input[name='name']").value);
  userdata.push(document.querySelector("input[name='email']").value);
  userdata.push(document.querySelector("input[name='phone']").value);
  userdata.push(
    document.querySelector("textarea[name='tat-description']").value
  );
  //   var formArtistSelect = document.querySelector("input[name='answer']");
  console.log(userdata);
  localStorage.setItem("userdata", JSON.stringify(userdata));
  window.location.href = "./confirmation.html";
};

calBtn = document.getElementById("calBtn");
calendarEl = document.querySelector("#calender-section");

calBtn.addEventListener("click", function () {
  event.preventDefault();
  calendarEl.classList.add("is-active");
});

//Modal prefernces using Bulma

document.addEventListener("DOMContentLoaded", () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add("is-active");
  }

  function closeModal($el) {
    $el.classList.remove("is-active");
  }

  function closeAllModals() {
    (document.querySelectorAll(".modal") || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll(".js-modal-trigger") || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);
    console.log($target);

    $trigger.addEventListener("click", () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (
    document.querySelectorAll(
      ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
    ) || []
  ).forEach(($close) => {
    const $target = $close.closest(".modal");

    $close.addEventListener("click", () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener("keydown", (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) {
      // Escape key
      closeAllModals();
    }
  });
});
