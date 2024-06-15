

const value1 = document.getElementById('value1');
const value2 = document.getElementById('value2');
const showResult = document.getElementById("result");
const addBtn = document.getElementById("addButton");

addBtn.addEventListener('click', add);

function add() {
    console.log(value1.value, value2.value)
    const result = Number(value1.value) + Number(value2.value);
    alert(result);
    showResult.innerHTML = result;
}



