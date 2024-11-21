class WhatsAppController {

  constructor() {
    this.elementsPrototype();
    this.loadElements();

  }

  //tranformar os ids em camelCase
  loadElements() {
    this.el = {};

    document.querySelectorAll('[id]').forEach(element => {

      this.el[Format.getCamelCase(element.id)] = element;

    });
  }

  elementsPrototype() {

    Element.prototype.hide = function () {
      this.style.dysplay = 'none';
      return this;
    }

    Element.prototype.show = function () {
      this.style.dysplay = 'block';
      return this;
    }

    Element.prototype.toggle = function () {
      this.style.dysplay = (this.style.dysplay === 'none') ? 'block' : 'none';
      return this;
    }

    Element.prototype.on = function (events, fn) {
      events.split(' ').forEach(event => {
        this.addEventListener(event, fn)
      });
      return this;
    }

    Element.prototype.css = function (styles) {
      for (let name in styles) {
        this.style[name] = styles[name];
      }
      return this;
    }

    Element.prototype.addClass = function (name) {
      this.classList.add(name);
      return this;
    }

    Element.prototype.removeClass = function (name) {
      this.classList.remove(name);
      return this;
    }

    Element.prototype.toggleClass = function (name) {
      this.classList.toggle(name);
      return this;
    }

    Element.prototype.hasClass = function (name) {
      return this.classList.contains(name);
    }
  }

}