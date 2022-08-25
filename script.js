
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

      //Create button(Delete)
      const deleteButton = document.createElement("button");
      deleteButton.innerText ="Delete";

    //Set child element of div
    li.appendChild(div);
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    //Add to incomplete list
    document.getElementById("incomplete-list").appendChild(li);
}

document.getElementById("add-btn").addEventListener("click", ()=> onClickAdd());