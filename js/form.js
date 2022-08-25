// let btn = document.getElementById("enviar")
// let email = document.getElementById("email")
// let pass = document.getElementById("password")

// console.log(btn);

// btn.addEventListener("click" , function(e){
//     e.preventDefault()
//     // console.log("click");
//     console.log(email.value);
//     console.log(pass.value);

// })

// require(["dojo/ready", "dojo/dom", "dojo/_base/connect", "dojo/_base/event" , "dojo/on"], function(ready, dom, connect, event){
//     ready(function(){
//         var node = dom.byId("enviar");
//         // let email = dom.byId("email")
//         connect.connect(node, "click", function(e){
//             event.stop(e); // prevents default link execution
//             console.log("llegue");
//             // console.log(email);
//         });
//     });
// });

function formulario() {
    require([
        "dojo/dom",
        "dojo/parser",
        "dijit/form/Form",
        "dijit/form/Button",
        "dijit/form/ValidationTextBox",
        "dijit/form/DateTextBox",
        "dojox/validate",
        "dojox/validate/web",
        "dojo/domReady!"
    ], function (dom, parser, Form, Button, ValidationTextBox, DateTextBox, validate, web) {

        var submit = new Button({
            label: "Submit",
            type: "submit",
            onClick: function (event) {
                // event.preventDefault();



                let clients = JSON.parse(localStorage.getItem("customers")) || [];

                console.log(clients);
                let client = { id: "", first: "", last: "", phone: "", email: "" };
                client.id = clients.length + 1;

                if (validate) {
                    client.first = dijit.byId("myForm").getValues().first;
                    client.last = dijit.byId("myForm").getValues().last;
                    client.phone = dijit.byId("myForm").getValues().phone;
                    client.email = dijit.byId("myForm").getValues().email;
                    clients = [...clients, client];
                   
                    localStorage.setItem("customers", JSON.stringify(clients))
                  
                   

                    // return confirm('Valid form, press OK to send');
                } else {
                    alert('The form contains invalid data or missing information!');
                    return false;
                }
                

                // return true;
            }
        }, "submit").startup();

        var reset = new Button({
            label: "Reset",
            type: "reset",
            onClick: function () {
                return confirm('Press OK to reset widget values');
            }
        }, "reset").startup();
    });
}


