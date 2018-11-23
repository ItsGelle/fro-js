"use strict";

// Declare variables
const studentName = "Jelle Buurman";
const studentGroup = "MD2A";
const year = main.year;

// Init
init();

// Functions

function init() {
    // Set content based on variables
    document.getElementById("studentName").innerText = studentName;
    // Add navigation link to the navigation panel on the left of the page
    main.addContenItem("Inleiding", intro);
    main.addContenItem("Variabelen", variabelen);
    main.addContenItem("Object", object);
    // Activate the first navigation link
    intro();
}


function intro() {
    let description = "Je bent in dienst van energiemaatschappij Energy Solutions en"
        + " krijgt de opdracht om een webpagina te maken die de energiestanden toont van een aantal adressen."
        + " De data wordt via een webAPI beschikbaar gesteld. "
        + " Dit gebeurt in kleine stapjes en uiteindelijk is het de bedoeling om de data op een nette manier te presenteren."
        + "<p>Succes!!!</p>";
    main.updateContent("Inleiding", description);


    // Set link to the element in the DOM
    var element = document.getElementById("contentPlaceholder");

    // Create the image and set some properties
    var img = document.createElement("img");
    img.classList.add("rotate");
    img.src = "photo.jpg";

    // Create the label
    var label = document.createElement("label");
    label.innerHTML = "Jelle Buurman";

    // Create the paragraph and add the image and label to it
    var p = document.createElement("p");
    p.appendChild(img);
    p.appendChild(document.createElement("br"));
    p.appendChild(label);

    // Add the paragraph to the DOM
    element.appendChild(p);
}

function variabelen() {
   let postcode = "1234AB";
   let huisnummer = 99;
   let datum = "2018-01-01";
   let gas = 300;
   let water = 30;
   let electriciteit = [1001, 1002];
   let slimmeMeter = true;

   let titel1 = "<h4>Verslag van de meting</h4>";
   let kop1 = "Voor postcode " + postcode + " en huisnummer " + huisnummer + " zijn op "
       + datum + " metingen gedaan en dit zijn de resultaten: gas=" + gas + ", water=" + water + ", electriciteitHoog=" + electriciteit[0] + " en electriciteitLaag=" + electriciteit[1] + ". Dit is gedaan met een slimme meter.";

   let deel1 = titel1 + kop1;
   let lengte = deel1.length;

   let titel2 = "<h4>Nog wat eigenschappen</h4>";
   let kop2 = "Het verslag heeft " + lengte + " tekens,";
   let deel2 = titel2 + kop2;
   let result = deel1 + deel2;

    main.updateContent("Variabelen", result);
}

function object() {
    alert("OBJECT");
}