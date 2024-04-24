window.addEventListener("load", function() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none";
});

var executedCommands = []; // Array om uitgevoerde commando's bij te houden

function executeCommand() {
    var commandInput = document.getElementById("commandInput");
    var command = commandInput.value.trim();

    if (command !== "") {
        // Voeg het commando toe aan de uitgevoerde commando's
        executedCommands.push(command);

        // Stuur het commando naar de JavaScript-console
        console.log("Command received: " + command);

        // Toon de uitgevoerde commando's in de console
        console.log("Executed command:", command);

        // Simuleer verwerking
        simulateProcessing(command);

        commandInput.value = "";
    }
}

function simulateProcessing(command) {
    var output = document.getElementById("output");
    output.innerHTML += "<p>> " + command + "</p>";
    // Voer het commando uit
    try {
        var result = eval(command);
        console.log("Result: " + result);
    } catch (error) {
        output.innerHTML += "<p>Error:" + error.message + "</p";
    }
    output.scrollTop = output.scrollHeight;
    setTimeout(function() {
        // Geen bericht nodig hier
    }, Math.random() * 2000 + 1000); // Willekeurige vertraging tussen 1 en 3 seconden
}

document.getElementById("commandInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        executeCommand();
    }
});
