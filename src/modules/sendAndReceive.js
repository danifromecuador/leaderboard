export const refresh = async () => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/SNypXgDAYR2s53JoVMhD/scores');
    const data = await response.json();
    console.log(data.result[0].user);
    // console.log(dataArray[0].user);

    let justDoIt = `result: [{score: 1, user: "a"}, {score: 1, user: "a"}, {score: 123, user: "ba"}, {score: 213, user: "a"}]`;

    const scoreContainer = document.querySelector('.score-container');

    // let html = `
    //   <li>${data[0].user}</li>
    // `;
    // scoreContainer.innerHTML = html;





  } catch (error) {
    console.error(error);
  }
};

export const addYourData = () => {
  const inputName = document.querySelector('.inputName');
  const inputScore = document.querySelector('.inputScore');
  if (inputName !== '' && inputScore !== '') {
    let dataToSend = {      
      "user": inputName.value,
      "score": parseInt(inputScore.value)
    };

    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/SNypXgDAYR2s53JoVMhD/scores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToSend)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }
  inputName.value = "";
  inputScore.value = "";
};

export const createNewGame = async () => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: "my new gamez"
      })
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
