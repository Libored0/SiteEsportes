const blackAndWhiteBtn = document.getElementById('blackAndWhite');
const highContrastBtn = document.getElementById('highContrast');
const blueContrastBtn = document.getElementById('blueContrast');
const greenContrastBtn = document.getElementById('greenContrast');
const yellowContrastBtn = document.getElementById('yellowContrast');

blackAndWhiteBtn.addEventListener('click', function() {
  document.body.classList.remove('high-contrast', 'blue-contrast', 'green-contrast', 'yellow-contrast');
  document.body.classList.add('black-and-white');
});

blackAndWhiteBtn.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' || event.key === ' ') {
    blackAndWhiteBtn.click();
  }
});

highContrastBtn.addEventListener('click', function() {
  document.body.classList.remove('black-and-white', 'blue-contrast', 'green-contrast', 'yellow-contrast');
  document.body.classList.add('high-contrast');
});

highContrastBtn.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' || event.key === ' ') {
    highContrastBtn.click();
  }
});

blueContrastBtn.addEventListener('click', function() {
  document.body.classList.remove('high-contrast', 'black-and-white', 'green-contrast', 'yellow-contrast');
  document.body.classList.add('blue-contrast');
});

blueContrastBtn.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' || event.key === ' ') {
    blueContrastBtn.click();
  }
});

greenContrastBtn.addEventListener('click', function() {
  document.body.classList.remove('high-contrast', 'black-and-white', 'blue-contrast', 'yellow-contrast');
  document.body.classList.add('green-contrast');
});

greenContrastBtn.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' || event.key === ' ') {
    greenContrastBtn.click();
  }
});

yellowContrastBtn.addEventListener('click', function() {
  document.body.classList.remove('high-contrast', 'black-and-white', 'blue-contrast', 'green-contrast');
  document.body.classList.add('yellow-contrast');
});

yellowContrastBtn.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' || event.key === ' ') {
    yellowContrastBtn.click();
  }
});
