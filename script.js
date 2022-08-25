
const onClickAdd = () => {
    //Get value from textbox and make it blank after
    const inputText = document.getElementById("add-txt").value;
    document.getElementById("add-txt").value = "";

    //Create div
    const div = document.createElement("div");
    div.className = "list-row"
    
    //Create p
    const p = document.createElement("p");
    p.innerText = inputText;

    //Create li
    const li = document.createElement("li");

    //Create button(complete)
    const completeButton = document.createElement("button");
    completeButton.innerText ="Complete";
    
    completeButton.addEventListener("click", () => {
        //Delete parent element of clicked delete button from the incomplete list
        deleteFromIncompleteList(completeButton.parentNode.parentNode);

        //li tag
        const list = completeButton.parentNode.parentNode;
        
        //Create div tag
        const completeDiv = completeButton.parentNode

        //Text from todo input
        const text = completeDiv.firstElementChild.innerText;
        list.textContent = null;

        //Create  tag
        const completeP = document.createElement("p");
        completeP.innerText = text;
        
        //Create button tag
        const backButton = document.createElement("button");
        backButton.innerText = "Revert";

        //Set child nodes
        completeDiv.appendChild(completeP);
        completeDiv.appendChild(backButton);
        list.appendChild(completeDiv);
 
        document.getElementById("complete-list").appendChild(addTarget);

    })

      //Create button(Delete)
      const deleteButton = document.createElement("button");
      deleteButton.innerText ="Delete";
      deleteButton.addEventListener("click", ()=>{
        //Delete parent element of clicked delete button from the incomplete list
        deleteFromIncompleteList(deleteButton.parentNode.parentNode);
      })

    //Set child element of div
    li.appendChild(div);
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    //Add to incomplete list
    document.getElementById("incomplete-list").appendChild(li);
}

const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
}

document.getElementById("add-btn").addEventListener("click", ()=> onClickAdd());