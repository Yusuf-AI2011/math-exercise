const button = document.querySelector(".button");
const clear = document.querySelector(".clear")
const input = document.querySelector(".input");
const result1 = document.querySelector(".result1");
const result2 = document.querySelector(".result2");
const result3 = document.querySelector(".result3");
const result4 = document.querySelector(".result4");

button.addEventListener("click", (buttonEvent) => {
  const inputValue = input.value.trim();
  if (!inputValue) {
    alert("Masofani kirit!");
  } else {
    const result1Value = (inputValue / 3.6).toFixed(2);
    const result2Value = (inputValue / 20.1).toFixed(2);
    const result3Value = (inputValue / 70).toFixed(2);
    const result4Value = (inputValue / 800).toFixed(2);

    result1.textContent = result1Value + " soat";
    result2.textContent = result2Value + " soat";
    result3.textContent = result3Value + " soat";
    result4.textContent = result4Value + " soat";
  }
});

clear.addEventListener("click", (clearEvent)=> {
    result1.textContent = "N soat";
    result2.textContent = "N soat";
    result3.textContent = "N soat";
    result4.textContent = "N soat";
    input.value = "";
});
