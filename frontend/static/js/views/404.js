import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("dasboard");
  }

  async getHtml() {
    return `
    <h1 class="title">You seem lost ! There's nothing to see here.</h1>
    <p><a href="/posts" data-link>View recent posts</a></p>
      `;
  }
}
