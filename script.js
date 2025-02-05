

const input = document.getElementById("input");
const list = document.querySelector("ul");
const add = document.getElementById("add");

function adding() {
    if (input.value === "") {
        alert("You must write something.");
    } else {
        let li = document.createElement("li");
        li.innerText = input.value;

        if (list) { // important to check!
            list.appendChild(li);

            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        } else {
            console.error("No <ul> element found on the page.");
        }
    }
    input.value = "";
    saveWork();
}


// Adding the list items. 
add.addEventListener("click", () => {
    adding();
});

//adding by the enter Keyress
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        adding();
    }
})


//Check, Unchecked and Remove.

list.addEventListener("click", function (evt) {
    if (evt.target.tagName === "LI") {
        evt.target.classList.toggle("done");
        saveWork();
    }
    else if (evt.target.tagName === "SPAN") {
        evt.target.parentElement.remove();
        saveWork();
    }
});

//Save  the work in local storage
function saveWork() {
    localStorage.setItem("work", list.innerHTML)
}

//backup the data from the local storage
function backup() {
    list.innerHTML = localStorage.getItem("work");
}

backup();