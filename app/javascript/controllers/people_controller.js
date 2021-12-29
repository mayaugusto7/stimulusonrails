import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="people"
export default class extends Controller {

  static targets = ["name", "username", "document", "favcolor"]

  connect() {
    console.log('Stimulus is working...');
  }

  toUpper() {
    this.name.value = this.name.value.toUpperCase();
  }

  usernameSuggestion(event) {
    event.preventDefault();
    this.username.value = this.toUsername(this.name.value);
  }

  toUsername(name) {
    return name.toLowerCase().replace(/\s+/g, "") + "00" + this.rand();
  }

  rand() {
    return Math.floor(Math.random() * 10) + 1;
  }

  paste(event) {
    event.preventDefault();
    alert('You cannot paste here.');
  }

  color() {
    this.favcolor.style.backgroundColor = this.favcolor.value;
  }

  get name() {
    return this.nameTarget;
  }

  get username() {
    return this.usernameTarget;
  }

  get favcolor() {
    return this.favcolorTarget;
  }
}
