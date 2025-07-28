const display = document.getElementById("display");
const buttons = Array.from(document.querySelectorAll("button"));

buttons.map(button => {
    button.addEventListener("click", (e) => {
        document.getElementById("clear").disabled = false;
        if (e.target.innerText === "=") {
            try {
                if (display.value.includes("%")) {
                    display.value = display.value.replace(/%/g, "/100");
                }
                if (display.value.includes("--")) {
                    display.value = display.value.replace("--", "+");
                }
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        }
        if (display.value === "0") {
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
        if (e.target.innerText === "+" || e.target.innerText === "-" || e.target.innerText === "*" || e.target.innerText === "/") {
            document.getElementById("decimal").disabled = false; // Enable decimal button after an operator
        }
    });
});

document.getElementById("clear").addEventListener("click", () => {
    display.value = "";
    display.value += "0";
    document.getElementById("clear").disabled = true;
});

