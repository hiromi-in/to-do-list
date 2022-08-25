
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

            completeButton.addEventListener("click", () => {
                //Delete parent element of clicked delete button from the incomplete list
                deleteFromIncompleteList(completeButton.parentNode.parentNode);
        
                //Create div
                const divComp = document.createElement("div");
                divComp.className = "list-row"
            
                //Create p
                const pComp = document.createElement("p");
                pComp.innerText = completeButton.parentNode.firstElementChild.innerText;
        
                //Create li
                const liComp = document.createElement("li");
              
                //Create button tag
                const backButton = document.createElement("button");
                backButton.innerText = "Revert";
                     
                     backButton.addEventListener("click", () =>{
                        //Delete the parent tag(li) of revert button used from complete list
                        const deleteTarget = backButton.parentNode.parentElement;
                        document.getElementById("complete-list").removeChild(deleteTarget);

                        //Obtain text value
                        const text = backButton.parentNode.firstElementChild.innerText;
                        createIncompleteList(text);
                         
                     })
        
                //Set child nodes
                divComp.appendChild(pComp);
                divComp.appendChild(backButton);
                liComp.appendChild(divComp);
        
                document.getElementById("complete-list").appendChild(liComp);
        
            })


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











//Create function of adding item to incomplete list
const createIncompleteList = (text) => {


    //Create div
    const div = document.createElement("div");
    div.className = "list-row"
    
    //Create p
    const p = document.createElement("p");
    p.innerText = text;

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


