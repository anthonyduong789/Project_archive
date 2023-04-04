const m1 = document.getElementById("add");
const myList = document.querySelector("#to_items")
const m2 = document.getElementById("input_text");



m2.onclick = add;
m1.onclick = add_list;
let list_num = 0;
let add_task;
function add(){
    m2.addEventListener('keydown', e =>{
    if(e.key === "Enter"){
        console.log("HERE");
        add_list2();
        //couldn't use a global variable add_list()
    }
    })
    function add_list2(){ 
        let x = "l" +String(list_num)
        const listItem = document.createElement("m1");
        listItem.id = x
        listItem.classList.add("new_list_item")
        add_list = document.getElementById("input_text").value;
        listItem.textContent = add_list;
        myList.append(listItem);
        // creates linebreak for html file
        let linebreak = document.createElement("br");
        myList.append(linebreak)
        // below will clear up the textbox upon hiting add
        document.getElementById("input_text").value = "";    
        list_num+=1
    }


}



function add_list(){ 
    const listItem = document.createElement("l1");
    add_list = document.getElementById("input_text").value;
    listItem.textContent = add_list;
    myList.append(listItem);
    // creates linebreak for html file
    let linebreak = document.createElement("br");
    myList.append(linebreak)
    // below will clear up the textbox upon hiting add
    document.getElementById("input_text").value = "";    

}