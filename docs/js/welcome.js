var i = 0;
var txt = 'We are K0133';
var speed = 100;

function title() {
  if (i < txt.length) {
    document.getElementById("k0133-title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(title, speed);
  }
  setTimeout(subTitle, 1300);
  setTimeout(setPermTitle, 1300);
  setTimeout(switchToDate, 3500);
}

function setPermTitle() {
  document.getElementById("k0133-title").style.display = "none";
  document.getElementById("perm-title").style.display = "block";
}

var iSub = 0;
var txtSub = 'You are who we are looking for!';
var speedSub = 100;

function subTitle() {

  if (iSub < txtSub.length) {
    document.getElementById("description").innerHTML += txtSub.charAt(iSub);
    iSub++;
    setTimeout(subTitle, speedSub);
  }
}

function highlightOn(character) {
  character.style.color = "green";
}

function highlightOff(character) {
  character.style.color = "white";
}

function switchToDate() {

  document.getElementById("k0133-container").style.display = "none";

  const countDownDate = new Date("Jun 19, 2020 21:00:00").getTime();

  let x = setInterval(function () {

    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = "<h1 class='w3-xxlarge'>Let's Begin</h1>" + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = `<a id="button" href="https://www.youtube.com/watch?v=H5RjAgYNu9k">Let's Begin</a>`;
    }
  }, 1000);

}