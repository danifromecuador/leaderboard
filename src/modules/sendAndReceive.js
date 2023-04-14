// export const refresh = async () => {
//   try {
//     const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/SNypXgDAYR2s53JoVMhD/scores');
//     const data = await response.json();

//     const scoreContainer = document.querySelector('.score-container');
//     scoreContainer.innerHTML = '';
//     for (let i = 0; i < data.result.length; i += 1) {
//       const html = `<li>${data.result[i].user}: ${data.result[i].score}</li>`;
//       scoreContainer.innerHTML += html;
//     }
//   } catch (error) {
//     const errorMessage = document.createElement('div');
//     errorMessage.textContent = 'An error occurred. Please try again later.';
//     document.body.appendChild(errorMessage);
//   }
// };

// export const addYourData = () => {
//   const inputName = document.querySelector('.inputName');
//   const inputScore = document.querySelector('.inputScore');
//   if (inputName !== '' && inputScore !== '') {
//     const dataToSend = {
//       user: inputName.value,
//       score: parseInt(inputScore.value, 10),
//     };

//     fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/SNypXgDAYR2s53JoVMhD/scores', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(dataToSend),
//     })
//       .then((response) => response.json());
//     // .then((data) => console.log(data))
//     // .catch((error) => console.error(error));
//   }
//   inputName.value = '';
//   inputScore.value = '';
// };

export const getData = async () => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/SNypXgDAYR2s53JoVMhD/scores', {
      method: 'GET',
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    return error;
  }
};

export const refresh = async () => {
  const data = await getData();
  const scoreContainer = document.querySelector('.score-container');
  scoreContainer.innerHTML = '';
  for (let i = 0; i < data.result.length; i += 1) {
    const html = `<li>${data.result[i].user}: ${data.result[i].score}</li>`;
    scoreContainer.innerHTML += html;
  }
};