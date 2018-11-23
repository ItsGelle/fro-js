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
    alert("HALLO");
}