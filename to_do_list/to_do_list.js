



const m1 = document.getElementById("add");

const myList = document.querySelector("#to_items")


m1.onclick =add_list;
let add_task;


function add_list(){ 
    const listItem = document.createElement("l1");
    add_list = document.getElementById("input_text").value;
    add_list = add_list +"\n"
    listItem.textContent = add_list;
    myList.append(listItem);
    let linebreak = document.createElement("br");
    myList.append(linebreak)
    // document.write("<br>");
}