import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("settings");
  }

  async getHtml() {
    return `
    <h1 class="title">Welcome back, Don</h1>
    <p>Your settings can be set here</p>
    <p><a href="/posts" data-link>View recent posts</a></p>
      `;
  }
}
