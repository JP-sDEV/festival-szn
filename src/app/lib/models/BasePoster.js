// BasePoster.js
class BasePoster {
  constructor() {
    this.title = "Festival Name";
    this.location = "City, Venue";
    this.dates = [];
    this.background = "";
    this.fonts = {
      header: "serif",
      body: "sans-serif",
    };
  }

  getMetadata() {
    return {
      title: this.title,
      location: this.location,
      dates: this.dates,
      background: this.background,
      fonts: this.fonts,
    };
  }
}

export default BasePoster;
