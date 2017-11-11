class Album {
  constructor() {
    this.section = document.createElement('section');
    this.section.className = 'album';
    document.body.appendChild(this.section);
  }

  show(animal) {
    this.section.classList.add('active');
    const clientID = '5c8875b8bf08ca810bb9771c57a12ddaccad724418d0fbad2003ab234733108f';
    fetch(`https://api.unsplash.com/search/photos?client_id=${clientID}&query=${animal.name}`).
      then(response => {
        return response.json();
      }).
      then(data => {
        this.displayImages(data.results);
      });
  }

  hide() {
    this.section.classList.remove('active');
  }

  displayImages(images) {
    const imageTags = images.map((image) => {
      return `<img src="${image.urls.regular}" alt="${image.description}" />`;
    })
    // returns an array of url strings

    // innerHTML can only be assigned 1 string
    // need to join all strings in array into 1 strings
    this.section.innerHTML = imageTags.join('');
  }
}
