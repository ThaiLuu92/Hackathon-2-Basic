function lab_01() {
  const str = prompt("Nhập 1 chuỗi bất kì");
  const checkstr = str.toLowerCase().replace(/[\W_]/g, "");
  for (var i = 0, len = checkstr.length - 1; i < len / 2; i++) {
    if (checkstr[i] !== checkstr[len - i]) {
      return alert("Không phải chuỗi đối xứng ");
    }
  }
  return alert("Là chuỗi đối xứng ");
}

function lab_02() {
  const text = prompt("Nhập vào");

  const arrText = text.split("");
  for (let i = 0; i < arrText.length; i++) {
    if (arrText[i] == arrText[i].toLowerCase())
      arrText[i] = arrText[i].toUpperCase();
    else if (arrText[i] == arrText[i].toUpperCase())
      arrText[i] = arrText[i].toLowerCase();
  }

  let printText = arrText.join("");

  console.log(printText);
  alert("Chuỗi được viết lại là: " + printText);
}

function lab_03() {
  year = Number(prompt("Nhập năm"));
  month = Number(prompt("Nhập tháng"));
  return alert("Số ngày là: " + new Date(year, month, 0).getDate());
}

function lab_04() {
  const string = prompt("Nhập vào 5 số cách nhau bởi dấu ,");

  const numbers = string.split(",");

  const sortedNumbers = numbers.toSorted((a, b) => b - a);

  console.log(sortedNumbers);
  const resultElement = (document.getElementById("lab_04").innerHTML =
    sortedNumbers);
}

function lab_04_1() {
  const string = prompt("Nhập vào 5 số cách nhau bởi dấu ,");

  const numbers = string.split(",");

  let max = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (max < numbers[i]) {
      max === numbers[i];
    }
  }

  console.log(max);
  const resultElement = (document.getElementById("lab_04_1").innerHTML =
    sortedNumbers);
}

// Truy vấn tới các trường dữ liệu
let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");
// Check lỗi ko nhập văn bản
form.addEventListener("submit", (e) => {
  // Chặn acttion của form
  e.preventDefault();

  formValidation();
  formValidationNumber();
});
// Hàm check lỗi ko nhập form
let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Không được để trống";
  } else {
    msg.innerHTML = "";
    rendertData();
  }
};

let data = [];
data.push(input.value);
input.value = "";

// renderData()
// Hàm check lỗi ko nhập đủ 5 số
let formValidationNumber = () => {
  if (data.length < 5) {
    msg.innerHTML = "Hãy nhập tối thiểu 5 số";
  }
  msg.innerHTML = "";
  renderData();
};
