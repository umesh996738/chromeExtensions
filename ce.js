let myLead = [];
const searchE1 = document.getElementById("search-el");
const clickE1 = document.getElementById('click-btn1');
const ulE1 = document.getElementById("ul-el");
const clearE1 = document.getElementById("clear-btn");


//localStorage.clear();
const leadFromStorage = JSON.parse(localStorage.getItem("myLead"));




if (leadFromStorage) {

    myLead = leadFromStorage;
    renderLead();

}
clearE1.addEventListener("dbClick", function() {
    localStorage.clear();
    myLead = [];
    renderLead();

})



clickE1.addEventListener("click", function() {
    myLead.push(searchE1.value);
    //console.log(myLead);
    //2. call the renderLead() function \
    searchE1.value = "";
    localStorage.setItem("myLead", JSON.stringify(myLead));
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
//storing array in local storage
