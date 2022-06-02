const user = document.querySelector(".login__input--user");
const date = document.querySelector(".login__input--date");
const submit = document.querySelector(".btn");

const dayElement = document.getElementById("day");
const hourElement = document.getElementById("hour");
const minElement = document.getElementById("minute");
const secElement = document.getElementById("second");

const hide = document.querySelector(".hide");
const show = document.querySelector(".show");
const userName = document.querySelector("#name");


submit.addEventListener("click",function (e) {
  e.preventDefault();
  hide.classList.remove("hide");
  show.classList.add("hide");
  console.log(user.value,date.value);

  const birthday = new Date(date.value);
  console.log(birthday);
  userName.innerHTML=`Happy Birthday, <b>${user.value}</b>`
  ////// Time /////
  function countdown() {
    const birthdayDate = new Date(birthday);
    const currentDate = new Date();
    const totalSecond = (birthdayDate - currentDate) / 1000;
    if (totalSecond < 0) {
      clearInterval(countdown);
      hide.innerText= "Enter Valid date and reload page 😁";


    } else {
      const days = Math.floor(totalSecond / 3600 / 24);
      const hours = Math.floor(totalSecond / 3600) % 24;
      const mins = Math.floor(totalSecond / 60) % 60;
      const secs = Math.floor(totalSecond) % 60;
  
      dayElement.innerHTML = days;
      hourElement.innerHTML = formatTime(hours);
      minElement.innerHTML = formatTime(mins);
      secElement.innerHTML = formatTime(secs);
    }
  }
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
  countdown();
  setInterval(countdown, 1000);
})


