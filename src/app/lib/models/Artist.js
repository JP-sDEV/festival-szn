// artist.js
export class Artist {
  constructor(name, genres = [], popularity = 0) {
    this.name = name;
    this.genres = genres;
    this.popularity = popularity;
  }

  toString() {
    return `${this.name}`;
  }
}
