const player = new Player();
const album = new Album();

document.body.addEventListener('keyup', (event) => {
  if (event.keyCode === 27) {
    album.hide();
  }
})

const animalsContainer = document.createElement('section');
animalsContainer.className = 'animals';
document.body.append(animalsContainer);


// create figure tag for individual animal & return
const createAnimalFigure = (animal) => {
  const figure = document.createElement('figure');
  figure.className = 'animal';

  const background = document.createElement('div');
  background.className = 'background';
  background.style.backgroundImage = `url('${animal.image}')`;
  figure.append(background);

  const caption = document.createElement('figcaption');
  caption.style.backgroundColor = animal.bgColor;
  caption.innerHTML = `
    <h2>${animal.name}</h2>
    <img src="${animal.icon}" alt="${animal.name}" class="animal-icon" />
  `;
  figure.append(caption);

  figure.addEventListener('click', (event) => {
    player.play(animal.sound);
    album.show(animal);
  });

  return figure;
}


animals.forEach(animal => {
  const figure = createAnimalFigure(animal);
  animalsContainer.appendChild(figure);
});
