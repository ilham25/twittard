const form = document.querySelector("form");

const name = document.querySelector(".name");
const username = document.querySelector(".username");
const thread = document.querySelector(".thread");

const time = document.querySelector(".time");
const date = document.querySelector(".date");
const twitFor = document.querySelector(".twitfor");

const generated = document.querySelector(".generated");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  name.innerText = form.elements[0].value;
  username.innerText = `@${form.elements[1].value}`;
  thread.innerText = form.elements[4].value;

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
  const timeStr =
    ("0" + current.getHours()).slice(-2) +
    ":" +
    ("0" + current.getMinutes()).slice(-2);
  time.innerText = timeStr;
  date.innerText = `${("0" + current.getDate()).slice(-2)} ${
    months[current.getMonth()]
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

const isIphone = () => {
  const checkBox = document.querySelector(".iphone");

  checkBox.checked
    ? (twitFor.innerText = "Twitter for iPhone")
    : (twitFor.innerText = "Twitter for Android");
};

document.querySelector(".save").addEventListener("click", () => {
  domtoimage.toBlob(generated).then(function (blob) {
    window.saveAs(blob, "thread-gen.png");
  });
});
