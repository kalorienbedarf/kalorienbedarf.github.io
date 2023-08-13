function calculate(weight, height, age, isMan) {
  let result = 0;

  if (isMan)
  {
    result = 66.47 + (13.7 * weight) + (5 * height) - (6.8 * age);
  } else
  {
    result = 655.1 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
  }

  document.querySelector("#bedarf").textContent = result.toFixed(2).toString();
}

document.querySelector("#calculate").addEventListener("click", () => {
  calculate(document.querySelector("#weight").value, document.querySelector("#height").value, document.querySelector("#age").value, document.querySelector("#gender").value);
});