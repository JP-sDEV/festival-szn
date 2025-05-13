// artist.js
export class Artist {
  constructor(name, popularity = 0) {
    this.name = name;
    this.popularity = popularity;
  }

  toString() {
    return `${this.name}`;
  }
}
