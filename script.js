var quarters = 0;
var dimes = 0;
var nickels = 0;
var pennies = 0;
var total = 0;

// dimensions for coins
var coinDimensions = {
    "quarter": { width: 100, height: 100 },
    "dime": { width: 75, height: 75 },
    "nickel": { width: 90, height: 90 },
    "penny": { width: 75, height: 75 }
};

function updateTotal(buttonContent) {
    if (buttonContent === "Add Quarter") {
        quarters++;
        total += 0.25;
        addCoinImage("quarter", coinDimensions.quarter);
    }
    if (buttonContent === "Add Dime") {
        dimes++;
        total += 0.10;
        addCoinImage("dime", coinDimensions.dime);
    }
    if (buttonContent === "Add Nickel") {
        nickels++;
        total += 0.05;
        addCoinImage("nickel", coinDimensions.nickel);
    }
    if (buttonContent === "Add Penny") {
        pennies++;
        total += 0.01;
        addCoinImage("penny", coinDimensions.penny);
    }

    if (buttonContent === "Remove Quarter") {
        if (quarters !== 0) {
            quarters--;
            total -= 0.25;
            removeCoinImage("quarter");
        }
    }
    if (buttonContent === "Remove Dime") {
        if (dimes !== 0) {
            dimes--;
            total -= 0.10;
            removeCoinImage("dime");
        }
    }
    if (buttonContent === "Remove Nickel") {
        if (nickels !== 0) {
            nickels--;
            total -= 0.05;
            removeCoinImage("nickel");
        }
    }
    if (buttonContent === "Remove Penny") {
        if (pennies !== 0) {
            pennies--;
            total -= 0.01;
            removeCoinImage("penny");
        }
    }

    document.querySelector("#quarters-count").textContent = "Number of Quarters: " + quarters;
    document.querySelector("#dimes-count").textContent = "Number of Dimes: " + dimes;
    document.querySelector("#nickels-count").textContent = "Number of Nickels: " + nickels;
    document.querySelector("#pennies-count").textContent = "Number of Pennies: " + pennies;
    document.querySelector("#total").textContent = "Total: $" + total.toFixed(2);
}

function addCoinImage(coinType, dimensions) {
    var image = document.createElement("img");
    image.src = "coins/" + coinType + ".jpg";
    image.alt = coinType;
    image.classList.add("coin-image");
    image.width = dimensions.width;
    image.height = dimensions.height;
    document.body.appendChild(image);
}

function removeCoinImage(coinType) {
    var images = document.querySelectorAll(".coin-image");
    for (var i = 0; i < images.length; i++) {
        if (images[i].alt === coinType) {
            images[i].remove();
            break;
        }
    }
}

const buttons = document.querySelectorAll("button");
for (const button of buttons) {
    button.addEventListener("click", function () {
        updateTotal(button.textContent);
    });
}
