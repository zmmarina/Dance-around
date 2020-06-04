function populateUFs(){

    const ufSelect = document.querySelector("select[name=uf]");

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json())
    .then( states => {

        for (const state of states){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`;
        }
    })
}

populateUFs();

function getCities(event){

    const citySelect = document.querySelector("select[name=city]");
    const stateInput = document.querySelector("input[name=state]");

    const ufValue = event.target.value;

    const indexOfSelectedState = event.target.selectedIndex;
    stateInput.value = event.target.options[indexOfSelectedState].text;

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;

    citySelect.innerHTML = "<option value>Select city</option>";
    citySelect.disabled = true;

    fetch(url)
    .then( res => res.json())
    .then( cities => {

        for (const city of cities){
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`;
        }

        citySelect.disabled = false;
    })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities);


//Classifying dance spot
const optionsToClassify = document.querySelectorAll(".items-grid li");

for (const option of optionsToClassify){
    option.addEventListener("click", handleSelectedOption);
}

const collectedOptions =  document.querySelector("input[name=options]");
let selectedOptions = [];

function handleSelectedOption(event){
    const optionLi = event.target;

    optionLi.classList.toggle("selected");

    const optionId = optionLi.dataset.id;

    const alreadySelected = selectedOptions.findIndex(option => {
        return option == optionId;
    });

    if (alreadySelected >= 0){
        const filteredOptions = selectedOptions.filter(option => {
            const optionIsDifferent = option != optionId;
            return optionIsDifferent;
        });

        selectedOptions = filteredOptions;

    }else{
        selectedOptions.push(optionId);
    }

   collectedOptions.value = selectedOptions;

}
