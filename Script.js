document.getElementById("image2").disabled = true;
document.getElementById("image3").disabled = true;
document.getElementById("image4").disabled = true;

let formArray = [];

let totalScore = 0;
let attempts = 2;
let remainingChances = 3;
let text = document.getElementById("textDisplay");

// Opening form on click of 1st image:

function openForm() {
  document.getElementById("form").classList.remove("hidden");
}

// when user submit the form, the details get tored in local storage of machine

function submitForm() {
  let name = document.getElementById("name").value;
  let userName = document.getElementById("userName").value;
  let email = document.getElementById("email").value;
  const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

  if (name && userName && email) {
    let obj = {
      Name: name,
      Username: userName,
      Email: email,
    };

    formArray.push(obj);
    document.getElementById("image2").disabled = false;
    document.getElementById("image1").disabled = true;
    text.innerText =
      "Your details are submitted, Click on the next image to review them.";
    document.getElementById("form").classList.add("hidden");
  } else {
    alert("Please fill all the fields.");
  }
}

// Form details: After clicking on image 2
function displayForm() {
  text.classList.add("hidden");
  document.getElementById(
    "data"
  ).innerText = `Name: ${formArray[0].Name}, User Name: ${formArray[0].UserName}, Email: ${formArray[0].Email}`;

  document.getElementById("displayData").classList.remove("hidden");
  document.getElementById("image3").disabled = false;
  document.getElementById("image2").disabled = true;
}

// Image 3 Functionalities:

function displayDice() {
  remainingChances = 3;
  totalScore = 0;
  document.getElementById("diceClicks").innerText = remainingChances;
  document.getElementById("score").innerText = totalScore;

  document.getElementById("displayData").classList.add("hidden");
  attempts--;
  console.log(`Attempts remaining: ${attempts}`);
  document.getElementById("attemptsLeft").innerText = attempts;
  document.getElementById("dice-score").classList.remove("hidden");
  document.getElementById("image3").disabled = true;
}

function diceClicked() {
  remainingChances--;
  document.getElementById("diceClicks").innerText = remainingChances;

  let RandomNumber = Math.floor(Math.random() * 6) + 1;
  totalScore += RandomNumber;
  document.getElementById("score").innerText = totalScore;

  if (remainingChances === 0) {
    document.getElementById("dice-img").disabled = true;
    document.getElementById("score").innerText = totalScore;
    if (totalScore > 10) {
      text.classList.remove("hidden");
      text.innerHTML = "Congratulations, Click on next image for coupon.";
      document.getElementById("dice-score").classList.add("hidden");
      document.getElementById("image4").disabled = false;
    } else {
      if (attempts != 0) {
        // totalScore;
        alert("Your total Score is less then please try again");
        document.getElementById("image3").disabled = false;
        remainingChances = 3;
        totalScore = 0;
        document.getElementById("dice-img").disabled = false;
        document.getElementById("dice-Score").classList.add("hidden");
        console.log(`remainingChances = ${remainingChances}`);
        console.log(`totalScore = ${totalScore}`);
      } else {
        document.getElementById("score").innerText = totalScore;
        text.classList.remove("hidden");
        text.innerHTML = "Sorry, Your total score is less then 10, Restart";
        document.getElementById("dice-score").classList.add("hidden");
        document.getElementById("tryAgain".classList).remove("hidden");
      }
    }
  }
}

function generateCoupon() {
  document.getElementById("image4").disabled = true;
  let coupon = "";
  for (let i = 0; i < 12; i++) {
    coupon += Math.floor(Math.random() * 10);
  }
  document.getElementById("congratulations").classList.remove("hidden");
  text.classList.remove("hidden");
  text.innerHTML = `Congratulations, Your coupon code is ${coupon}`;
}
