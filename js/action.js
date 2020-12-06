//var arr = { 0: "Хлубничка/300", 1: "Радуга/270", 2: "Бананка/270", 3: "Бетон/150", 4: "Солнышко/170" };
var total = 0;
var newBasket = new Map();
newBasket.set("Хлубничка — 300", 0).set("Радуга — 270", 0).set("Бананка — 270", 0).set("Бетон — 150", 0).set("Солнышко — 170", 0);

function add(item) {
    let tmp = item.split('/');
    total += Number(tmp[1]);

    for (let [key, value] of newBasket) {
        if (`${tmp[0]} — ${tmp[1]}` === key) {
            newBasket.set(key, ++value);
        }
    }

    let a = "";
    for (let [key, value] of newBasket) {
        if (value != 0) {
            a += `<p>${key}&#8381;   [x${value}]</p>`;
        }
    }

    let start = document.getElementById("start");
    if (start.innerHTML === "Корзина пуста") {
        start.className = "no";
    }
    start.innerHTML = a;

    let right = document.getElementById("right");
    right.innerHTML = `${total}`;
}




// var arr = { 0: "Клубничный рожок/300", 1: "Рожок «Радуга»/270", 2: "Бананка/270", 3: "Бетон/150", 4: "Солнышко/170" };
// var total = 0;
// var newBasket = new Map();
// newBasket.set("Клубничный рожок — 300", 0).set("Рожок «Радуга» — 270", 0).set("Бананка — 270", 0).set("Бетон — 150", 0).set("Солнышко — 170", 0);

// function add(item) {
//     let tmp = arr[item].split('/');
//     total += Number(tmp[1]);

//     for (let [key, value] of newBasket) {
//         if (`${tmp[0]} — ${tmp[1]}` === key) {
//             newBasket.set(key, ++value);
//         }
//     }

//     let a = "";
//     for (let [key, value] of newBasket) {
//         if (value != 0) {
//             a += `<p>${key}&#8381;   [x${value}]</p>`;
//         }
//     }

//     let start = document.getElementById("start");
//     if (start.innerHTML === "Корзина пуста") {
//         start.className = "no";
//     }
//     start.innerHTML = a;

//     let right = document.getElementById("right");
//     right.innerHTML = `${total}`;
// }



function toWEB() {
    var viewport = document.querySelector("meta[name=viewport]");

    if (window.matchMedia("(min-width: 1024px)").matches) {
        viewport.setAttribute('content', 'width=device-width');
        //alert("И так web");
    } else {
        viewport.setAttribute('content', 'width=1280px');
        //alert("Теперь 1280px");
    }
}

function toAPP() {
    var viewport = document.querySelector("meta[name=viewport]");

    if (window.matchMedia("(max-width: 639px)").matches) {
        viewport.setAttribute('content', 'width=device-width');
        //alert("И так mobile");
    } else {
        viewport.setAttribute('content', 'width=425px');
        //alert("Теперь 425px");
    }
}