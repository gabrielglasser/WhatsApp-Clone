class WhatsAppController {

  constructor() {
    
    this.loadElements();

  }
  
  //tranformar os ids em camelCase
  loadElements() {
    this.el = {};

    document.querySelectorAll('[id]').forEach(element => {

      this.el[Format.getCamelCase(element.id)] = element;

    });
  }

}