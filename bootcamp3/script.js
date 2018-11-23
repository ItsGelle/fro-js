"use strict";

// Declare variables
var student = "Jelle Buurman";
var year = 2018;
var group = "MD2A";
var title = "JavaScript Bootcamp " + year;
var currentYear = (new Date()).getFullYear();
var period = getPeriod(2018, currentYear);

// Init
instruction4();
instruction5();


//Instructions

function instruction3() {
    var description = "Nadat op de link 'Click Event' is geklikt worden de header,"
        + " beschrijving en oplossing van de opdracht aangepast";
    var result = "De header en beschrijving zijn aangepast: zie hierboven";

    updateContent("Opdracht 3 - Click Event", description, result);
}

function instruction4() {
    // function instruction2 has been replaced by function instruction4
    document.title = title;
    document.getElementById("pageHeader").innerText = title;

    document.getElementById("group").innerText = group;

    setValueByClassName("year", year);
    setValueByClassName("student", student);
}

function instruction5() {
    setValueByClassName("period", period);
}

function instruction6() {
    var currentYear = (new Date()).getFullYear();
    var description = "Bepaal de periode op basis van de het startjaar en het huidige jaar en voer een klein testje uit voor verschillende startjaren: vorige jaar, huidige jaar en volgende jaar";

    var result = "Huidige jaar: " + currentYear + "<br/>";
    result += "Startjaren: " + "<br/>";
    for (var i = -1; i <= 1; i++) {
        var startYear = currentYear + i;
        var period = getPeriod(startYear, currentYear);
        result += " - " + startYear + ": " + period + "<br/>";
    }

    updateContent("Opdracht 6 - Periode testen", description, result);
}

function instruction7() {
    var description = "Bepaal de dag van vandaag op drie verschillende manieren: 1)if/else, 2)switch en 3)array";
    var result = instruction7a() + "<br/>";
    result += instruction7b() + "<br/>";
    result += instruction7c() + "<br/>";
    result += "<hr/>";
    //result += "De beste manier is gebruik maken van een array!!!";
    result += "De beste manier is gebruik maken van ..... omdat ......";
    updateContent("Opdracht 7 - Dag in de week", description, result);
}

function instruction7a() {
    var dayNumber = (new Date()).getDay();
    var day = "";
    if (dayNumber === 0) {
        day = "Zondag";
    }
    else if (dayNumber === 1) {
        day = "Maandag";
    }
    else if (dayNumber === 2) {
        day = "Dinsdag";
    }
    else if (dayNumber === 3) {
        day = "Woensdag";
    }
    else if (dayNumber === 4) {
        day = "Donderdag";
    }
    else if (dayNumber === 5) {
        day = "Vrijdag";
    }
    else if (dayNumber === 6) {
        day = "Zaterdag";
    }

    return "Door gebruik te maken van if/else weet ik dat het vandaag " + day + " is.";
}

function instruction7b() {
    var dayNumber = (new Date()).getDay();
    var day = "";
    switch (dayNumber) {
        case 0:
            day = "Zondag";
            break;
        case 1:
            day = "Maandag";
            break;
        case 2:
            day = "Dinsdag";
            break;
        case 3:
            day = "Woensdag";
            break;
        case 4:
            day = "Donderdag";
            break;
        case 5:
            day = "Vrijdag";
            break;
        case 6:
            day = "Zaterdag";
            break;
        default:
            day = "Geen dag";
    }

    return "Ook wanneer ik switch gebruik weet ik dat het vandaag " + day + " is.";
}

function instruction7c() {
    var dayNumber = (new Date()).getDay();
    var days = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
    var day = days[dayNumber];
    return "En tenslotte door gebruik te maken van een array weet ik ook dat het vandaag " + day + " is.";
}

function instruction8() {
    var description = "Toon een ongesorteerde array met namen van kleuren. Toon vervolgens de oplopend (A-Z) gesorteerde array en de aflopend (Z-A) gesorteerde array";
    var colors = ["Rood", "Geel", "Blauw", "Groen", "Zwart"];
    var result = "Kleuren: " + colors + "<br />";
    var sorted = colors.sort();
    result += "Gesorteerd (A-Z): " + sorted + "<br />";
    var sortedReverse = colors.reverse();
    result += "Gesorteerd (Z-A): " + sortedReverse + "<br />";
    updateContent("Opdracht 8 - Array sorteren", description, result);
}

function instruction9() {
    document.getElementById('instructionResult').innerText = "";

    //Images
    var img = document.createElement("IMG");
    var br = document.createElement("br");
    img.src = "photo.jpg";
    img.setAttribute("height", "300px");

    document.getElementById('instructionResult').appendChild(img);
    document.getElementById('instructionResult').appendChild(br);

    //Buttons
    var btnName = ["Links", "Rechts"];
    var btnId = ["btn1", "btn2"];
    for (var i = 0; i < btnName.length; i++) {
        var btn = document.createElement("BUTTON");
        btn.innerText = btnName[i];
        btn.setAttribute("id", btnId[i]);

        document.getElementById('instructionResult').appendChild(btn);
    }

    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');

    btn1.addEventListener("click", function(){
        alert("Naar links");
    });

    btn2.addEventListener("click", function(){
        alert("Naar Rechts");
    });

}

function instruction10() {
    var school = "MediaCollege Amsterdam";
    var length = school.length;

    var description = "String Bewerkingen";
    var result = "De String waar de bewerkingen op gedaan worden is: " + school + "<br>" +
        "De eerste lengte van de String: " + length + "<br>" +
        "De eerste letter is vervangen voor een spatie: " + school.substr(1) + "<br>" +
        "De lengte van de string is nog steeds: " + length + "<br>" +
        "Alle spaties aan het begin en het einde zijn nu verwijderd: " + school.substr(1,22) +  "<br>" +
        "De lengte van de string is nu: " + school.substr(1).length + "<br>" +
        "Het aantal woorden: " + school.split(" ").length + "<br>" +
        "Het eerste woord is: " + school.substr(1, 12).split(",") + "<br>" +
        "Het tweede woord is: " + school.substr(12).split(",");

    updateContent("Opdracht 10 - Het object String", description, result);
}

function instruction11() {
    var description = "Fout netjes afhandelen";
    var result;

    try {
        alert(sum(10, 20));
    } catch (err){
        result = "Reference Error: " + err.message;
    } finally {
        result += "<br>" + "finally block executed";
    }


    updateContent("Opdracht 11 - Foutafhandeling", description, result);
}

// Sub functions
function setValueByClassName(className, value) {
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerText = value;
    }
}

// Instruction 4
function updateContent(header, description, result) {
    document.getElementById("instructionHeader").innerText = header;
    document.getElementById("instructionDescription").innerHTML = description;
    document.getElementById("instructionResult").innerHTML = result;
}

// Instruction 5
function getPeriod(startYear, currentYear) {
    var result = startYear;
    if (currentYear > startYear) {
        result += "-" + currentYear;
    }
    return result;
}