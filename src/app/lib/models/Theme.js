// Theme.js
class Theme {
  constructor({
    bgGradient,
    borderColor,
    fontColor,
    dotColor,
    fontFamily,
    titleColor,
    subtitleColor,
    headlinerColor,
    artistColor,
    buttonColor,
    hoverButtonColor,
  } = {}) {
    this.bgGradient = bgGradient;
    this.borderColor = borderColor;
    this.fontColor = fontColor;
    this.dotColor = dotColor;
    this.fontFamily = fontFamily;

    this.titleColor = titleColor;
    this.subtitleColor = subtitleColor;
    this.headlinerColor = headlinerColor;
    this.artistColor = artistColor;
    this.buttonColor = buttonColor;
    this.hoverButtonColor = hoverButtonColor;
  }

  getStyles() {
    return {
      bgGradient: this.bgGradient,
      borderColor: this.borderColor,
      fontColor: this.fontColor,
      dotColor: this.dotColor,
      fontFamily: this.fontFamily,
      titleColor: this.titleColor,
      subtitleColor: this.subtitleColor,
      headlinerColor: this.headlinerColor,
      artistColor: this.artistColor,
      buttonColor: this.buttonColor,
      hoverButtonColor: this.hoverButtonColor,
    };
  }
}

export default Theme;
