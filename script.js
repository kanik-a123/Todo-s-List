
const addItems = (() => {
    var tit = document.getElementById("title").value;
    var desc = document.getElementById("des").value;

    console.log(tit, desc);

    if (tit.length == 0 || desc.length == 0) {
        alert("it is required")
    }
    else {
        if (localStorage.getItem("itemsJSON") === null) {
            itemsArray = []
            itemsArray.push([tit, desc]);
            var st = JSON.stringify(itemsArray);
            localStorage.setItem("itemsJSON", st);
        }
        else {
            var st = localStorage.getItem("itemsJSON");
            itemsArray = JSON.parse(st);
            itemsArray.push([tit, desc]);
            var st = JSON.stringify(itemsArray);
            localStorage.setItem("itemsJSON", st);
            document.getElementById("title").value="";
             document.getElementById("des").value="";

        }

        update();


    }



})

const update = (() => {
    if (localStorage.getItem("itemsJSON") == null) {
        itemsArray = [];
    }
    else {
        var st = localStorage.getItem("itemsJSON");
        itemsArray = JSON.parse(st);
    }


    var ss = "";

    // ss += `<h1>hello world</h1>`
    itemsArray.forEach((element, index) => {
        ss += `<tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td> <button class="btn btn-danger" onClick="Delete(${index})">Delete </button></td>
    </tr>`
    });
    document.getElementById("tableBody").innerHTML = ss;
})

const Delete = ((index) => {
    var str = localStorage.getItem("itemsJSON")
    itemsArray = JSON.parse(str)
    itemsArray.splice(index, 1)
    var str = JSON.stringify(itemsArray)
    localStorage.setItem("itemsJSON", str)

    update();


})

const clearitem = (() => {
    if (confirm("Are you sure")) {
        localStorage.clear();
    }
    update();
})




// function addItems()
// {

// }

// var add = document.getElementById("additem");

// add.addEventListener("click", addItems);

update();



