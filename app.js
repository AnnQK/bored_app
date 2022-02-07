'use strict';

const activityBtn = document.querySelector('.activityBtn');
const textField = document.querySelector('.text');

async function showActivity() {
  const response = await fetch('https://www.boredapi.com/api/activity/');
  const data = await response.json();
  const activity = data.activity;
  textField.textContent = activity;
  return textField.classList.remove('hidden');
}
activityBtn.addEventListener('click', showActivity);

// const textBox = document.querySelector('.activity-text');
// const inputTypeVal = document.querySelector('input').value;

// function getValue() {
//   const val = document.querySelector('input').value;
//   console.log(val);
// }
// const typeList = [
//   'education',
//   'recreational',
//   'social',
//   'diy',
//   'charity',
//   'cooking',
//   'relaxation',
//   'music',
//   'busywork',
// ];

// async function showActivity() {
//   let inputTypeVal = document.querySelector('input').value;
//   if (typeList.includes(inputTypeVal)) {
//     const response = await fetch(
//       `http://www.boredapi.com/api/activity?type=${inputTypeVal}`
//     );
//     const data = await response.json();
//     const activity = data.activity;
//     textField.textContent = activity;
//     inputTypeVal = '';
//     return textBox.classList.remove('hidden');
//   } else {
//     const response = await fetch(
//       'http://www.boredapi.com/api/activity?type=education'
//     );
//     const data = await response.json();
//     const activity = data.activity;
//     textField.textContent = activity;
//     inputTypeVal = '';
//     return textBox.classList.remove('hidden');
//     console.log(inputTypeVal);
//   }
// }
