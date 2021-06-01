import templateFunction from '../template/render-image.hbs';

class Render {
  constructor(gallryRef) {
    this.gallryRef = gallryRef;
  }

  render(images) {
    const markup = templateFunction(images.hits);
    this.gallryRef.insertAdjacentHTML('beforeend', markup);
  }
}

export default Render;
