const nfseFormElement = document.querySelector("#nfse-form");

nfseFormElement.addEventListener("submit", formSubmissionHandler);

function formSubmissionHandler(event) {
  event.preventDefault();
}
