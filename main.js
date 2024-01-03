// geting all required elements 
const searchWrapper = document.querySelector(".search-input");
const inputBox = document.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");

// if user press any key and relaese

inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        emptyArray = suggestions.filter((data)=>{
            // filtring array value and user char to lowercase and retun aonly those word/sentc which are starts width user entered word
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            return data = '<li>'+ data +'</li>';
        });
        console.log(emptyArray);
        searchWrapper.classList.add("active"); // show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for(let i=0; i <allList.length; i++){
            // adding onclick attribut in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active")
    }
}

function select(element){
    let selectUserData = element.textContent;
    inputBox.value = selectUserData; //passing the user selected list item data in textfield
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        uservalue = inputBox.value;
        listData = '<li>'+ uservalue +'</li>';
    }
    else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData ;
}