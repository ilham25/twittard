const form = document.querySelector("form");

const name = document.querySelector(".name");
const username = document.querySelector(".username");
const thread = document.querySelector(".thread");

const time = document.querySelector(".time");
const date = document.querySelector(".date");

const generated = document.querySelector(".generated");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  name.innerText = form.elements[0].value;
  username.innerText = `@${form.elements[1].value}`;
  thread.innerText = form.elements[3].value;

  const current = new Date();
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  time.innerText = `${current.getHours()}:${current.getMinutes()}`;
  date.innerText = `${current.getDate()} ${months[current.getMonth()]
    } ${current.getFullYear()}`;
});

const readURL = (input) => {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      document.querySelector(".pp-img").src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  }
};

document.querySelector(".save").addEventListener("click", () => {
  html2canvas(generated, {
    backgroundColor: null,
    scrollX: 0,
    scrollY: -window.scrollY,
    scale: 2,
  }).then((canvas) => {
    var link = document.createElement("a");
    link.download = "thread-gen.png";
    link.href = canvas.toDataURL();
    link.click();
    link.delete;
  });
});
