const usd = document.querySelector("#usd");
const som = document.querySelector("#som");
const eur = document.querySelector("#eur");

const convert = (elem, target, isTrue) => {
  elem.addEventListener("input", () => {
    const request = new XMLHttpRequest();
    request.open("GET", "data.json");
    request.setRequestHeader("Content-Type", "application/json");
    request.send();
    request.addEventListener("load", () => {
      const data = JSON.parse(request.response);
      if (isTrue === "usd-som") {
        target.value = (elem.value * data.usd).toFixed(2);
      } else if (isTrue === "som-usd") {
        target.value = (elem.value / data.usd).toFixed(2);
      } else if (isTrue === "eur-som") {
        target.value = (elem.value * data.eur).toFixed(2);
      } else if (isTrue === "som-eur") {
        target.value = (elem.value / data.eur).toFixed(2);
      } else if (isTrue === "usd-eur") {
        target.value = (elem.value * data.usd / data.eur).toFixed(2);
      } else if (isTrue === "eur-usd") {
        target.value = (elem.value * data.eur / data.usd).toFixed(2);
      }

      elem.value === "" && (target.value = "");
    });
  });
};

const arr = [
    {
        elem: som,
        target: usd,
        isTrue: "som-usd",
      },
      {
        elem: usd,
        target: som,
        isTrue: "usd-som",
      },
      {
        elem: eur,
        target: som,
        isTrue: "eur-som",
      },
      {
        elem: som,
        target: eur,
        isTrue: "som-eur",
      },
      {
        elem: usd,
        target: eur,
        isTrue: "usd-eur",
      },
      {
        elem: eur,
        target: usd,
        isTrue: "eur-usd",
      }
];

arr.forEach((item) => {
  convert(item.elem, item.target, item.isTrue);
});
