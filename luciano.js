function construirLorem() {
    require([
      "dojo/html",
      "dojo/dom",
      "dojo/on",
      "dijit/form/NumberTextBox",
      "dojo/domReady!",
    ], function (html, dom, on) {
      on(dom.byId("setContent"), "click", function () {
        html.set(
          dom.byId("includedContent"),
          "<div>" +
            "<object data='./views/usuarios.html' type='text/html'>" +
            "</div>"
        );
      });
    });
  }