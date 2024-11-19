const counter = document.querySelector(".counter-number");
async function updateCounter() {
  let response = await fetch(
    "https://3ek5etyxufrwigxu7cw6nznwoe0nrqqr.lambda-url.eu-north-1.on.aws/"
  );
  let data = await response.json();
  counter.innerHTML = `Views: ${data}`;
}
updateCounter();
