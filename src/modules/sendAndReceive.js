

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
