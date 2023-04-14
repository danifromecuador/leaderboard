const print = () => {
  // console.log('hello world');

  const refreshBtn = document.querySelector('.refreshBtn');
  refreshBtn.addEventListener('click', () => {
    // alert('refresh button');
  });

  const inputName = document.querySelector('.inputName');
  inputName.addEventListener('click', () => {
    // alert('name');
  });

  const inputScore = document.querySelector('.inputScore');
  inputScore.addEventListener('click', () => {
    // alert('score');
  });

  const submitBtn = document.querySelector('.submitBtn');
  submitBtn.addEventListener('click', () => {
    // alert('submit');
  });
};

export default print;