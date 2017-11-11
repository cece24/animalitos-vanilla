class Player {
  constructor() {
    this.audio = new Audio();
  }

  play(songUrl) {
    this.audio.setAttribute('src', songUrl);
    this.audio.play();
  }
}

// Audio() is a built in object
// play() is a built in method
