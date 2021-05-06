//Script works on Loading website(contains saved data)
window.onload = function () {
    let arr = [];
    let str = "";
    console.log("Loading");
    arrStr = localStorage.getItem('items');
    arr = JSON.parse(arrStr);
    let tb = document.getElementById("tb");
    if (localStorage.getItem('items') == null) {
        let str = "";
    } else {
        arr.forEach((element, index) => {
            str += ` <tr>
        <th>${index + 1}</th>
        <th>${element[0]}</th>
        <th>${element[1]}</th>
        <th><button id="clc" onclick="clc(${index})">Delete</button></th>
    </tr>`
        });
    }
    tb.innerHTML = str;
};

//Script for Date and Time
let d, date, state, arr = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let t = document.getElementById('t');
setInterval(function () {
    d = new Date();
    date = d.toLocaleDateString(undefined, arr);
    if (d.getHours() >= 12) {
        state = 'PM';
    }
    else {
        state = 'AM';
    }
    t.innerHTML = date + '<br>' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + state;
}, 100);


//Script For adding data
add = document.getElementById('add');
add.addEventListener("click", () => {
    console.log("Adding Item")
    let arr = [];
    let t = document.getElementById('title').value;
    let d = document.getElementById('desc').value;
    if (localStorage.getItem('items') == null) {
        arr.push([t, d]);
        localStorage.setItem('items', JSON.stringify(arr));
    }
    else {
        arrStr = localStorage.getItem('items');
        arr = JSON.parse(arrStr);
        arr.push([t, d]);
        localStorage.setItem('items', JSON.stringify(arr));
    }
    let tb = document.getElementById("tb");
    let str = "";
    arr.forEach((element, index) => {
        str += ` <tr>
        <th>${index + 1}</th>
        <th>${element[0]}</th>
        <th>${element[1]}</th>
        <th><button id="clc" onclick="clc(${index})">Delete</button></th>
    </tr>`
    });
    tb.innerHTML = str;
    location.reload();
});

//Script for Deleting the data
function clc(ind) {
    location.reload();
    console.log("Deleting");
    arrStr = localStorage.getItem('items');
    arr = JSON.parse(arrStr);
    arr.splice(ind, 1);
    localStorage.setItem('items', JSON.stringify(arr));
    let tb = document.getElementById("td");
    let str = "";
    arr.forEach((element, index) => {
        str += `<tr>
            <td>${index + 1}</td>
            <td>${element[0]}</td>
            <td id="d">${element[1]}</td>
            <td><button id="clc" onclick="clc(${index})">Delete</button></td>
        </tr>`
    });
    tb.innerHTML = str;
};

//Script for Deleting complete list
clearstorage = document.getElementById('clearstorage');
clearstorage.addEventListener('click', function () {
    localStorage.clear('items');
    console.log("All Items Deleted");
    arrStr = localStorage.getItem('items');
    arr = JSON.parse(arrStr);
    let tb = document.getElementById("tb");
    let str = "";
    tb.innerHTML = str;
    location.reload();
});
