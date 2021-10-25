import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Home");
  }

  async getHtml() {
    return `
    <h1 class="title">Welcome back, Don</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat commodi suscipit voluptatibus ipsum tempore
        necessitatibus in blanditiis repellat consectetur. Molestiae impedit temporibus eius numquam odit, rem iure facilis
        placeat? Quas cumque qui numquam ad libero. Modi harum in aperiam error voluptatem debitis possimus itaque, illum
        asperiores optio beatae, obcaecati atque? Voluptates rerum porro optio, doloribus quia necessitatibus aspernatur
        amet id ab similique ullam eaque impedit dignissimos numquam reiciendis quaerat assumenda vitae delectus, animi
        voluptatibus, alias provident? Quod, qui. Ipsum, accusantium quibusdam! Odio, iure asperiores tempore quasi
        necessitatibus quam aliquid exercitationem cumque corrupti labore perspiciatis praesentium obcaecati magni?
        Inventore, vitae reiciendis!</p>
    <p><a href="/posts" data-link>View recent posts</a></p>
      `;
  }
}
