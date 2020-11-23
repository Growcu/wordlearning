const btn = document.querySelectorAll('.nav__link');

const pullChapter = function() {

  const data = {
    title: this.textContent,
  }

  fetch('/chapters', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
  .then(res => res.json())
  .then(data => {
    polishWords = data.polishWords;
    englishWords = data.englishWords;
  })
  .catch(err => console.log(err));
}

btn.forEach(item => {
  item.addEventListener("click", pullChapter);
})