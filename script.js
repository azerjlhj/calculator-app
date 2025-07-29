const display = document.getElementById("display");
const buttons = Array.from(document.querySelectorAll("button"));

buttons.map(button => {
    button.addEventListener("click", (e) => {
        document.getElementById("clear").disabled = false;
        if (e.target.innerText === "=") {
            document.getElementById("percent").disabled = false;
            try {
                if (display.value.includes("%")) {
                    display.value = display.value.replace(/%/g, "/100");
                }
                if (display.value.includes("--")) {
                    display.value = display.value.replace("--", "+");
                }
                let result = eval(display.value);
        
                // Check if result is undefined, null, or not a valid number
                if (result === undefined || result === null || isNaN(result) || !isFinite(result)) {
                    display.value = "Error";
                } else {
                    display.value = result;
                }
            } catch (error) {
                display.value = "Error";
            } 
        }
        if (display.value === "0" || display.value === "Error" || display.value.includes("undefined")) {
            display.value = "";
        }
        if (e.target.innerText === "—") { 
            display.value += "-";
        }
        if (e.target.innerText !== "=" && e.target.innerText !== "—") {
            display.value += e.target.innerText;
        }
        if (e.target.innerText === ".") {
            document.getElementById("decimal").disabled = true;
        }
        if (e.target.innerText === "%") {
            document.getElementById("percent").disabled = true;
            document.getElementById("decimal").disabled = true;
        }
        if (e.target.innerText === "+" || e.target.innerText === "-" || e.target.innerText === "*" || e.target.innerText === "/") {
            document.getElementById("decimal").disabled = false; // Enable decimal button after an operator
            document.getElementById("percent").disabled = false; // Enable percent button after an operator
        }
    });
});

document.getElementById("clear").addEventListener("click", () => {
    display.value = "";
    display.value += "0";
    document.getElementById("clear").disabled = true;
    if (document.getElementById("decimal").disabled) {
        document.getElementById("decimal").disabled = false;
    }
    if (document.getElementById("percent").disabled) {
        document.getElementById("percent").disabled = false;
    }
});

