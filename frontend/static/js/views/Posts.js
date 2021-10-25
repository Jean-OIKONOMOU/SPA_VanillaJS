import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("posts");
  }

  async getHtml() {
    return `
    <h1 class="title">A page with all our blog posts</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat commodi suscipit voluptatibus ipsum tempore
        necessitatibus in blanditiis repellat consectetur. Molestiae impedit temporibus eius numquam odit, rem iure facilis
        placeat?</p>
    <p><a href="/" data-link>Back to the dashboard</a></p>
      `;
  }
}
