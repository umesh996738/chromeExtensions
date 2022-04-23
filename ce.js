let myLead = [];
const searchE1 = document.getElementById("search-el");
const clickE1 = document.getElementById('click-btn');
const ulE1 = document.getElementById("ul-el");
const clearE1 = document.getElementById("clear-btn");


clickE1.addEventListener("click", function() {
    myLead.push(searchE1.value);
    //console.log(myLead);
    //2. call the renderLead() function \
    searchE1.value = "";
    renderLead();


});
clearE1.addEventListener("clear", function() {
    myLead.push(searchE1.value);
    //console.log(myLead);
    //2. call the renderLead() function \
    searchE1.value = "";
    renderLead();


});
//1. wrap the code below in a renderLead() function                                                                                                                                                                        



function renderLead() {
    let listItems = "";
    for (let i = 0; i < myLead.length; i++) {

        listItems += `<li>
        <a target="_blank" href='${myLead[i]}'>
        ${myLead[i]}
        </a>
        
        </li>`;
        // const li = document.createElement("li");
        //li.innerHTML += myLead[i];
        //ulE1.append(li);


    }
    ulE1.innerHTML = listItems;

}