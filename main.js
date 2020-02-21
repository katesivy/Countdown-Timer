
let now = new Date().getTime();
let end = new Date("May 15, 2020 17:00:00").getTime();
let timerAmount = end - now;

/*function timerElements() {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  return `${h} : ${m} : ${s}`;
}
Math.floor(timerAmount / (1000 * 60 * 60 * 24));
*/

function displayTimer() {
    const y = '50';
    const x = document.getElementById('timer');
    x.textContent = y;
}