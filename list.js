let iname = document.querySelector("#iname");
let List = document.querySelector("#List");

let listArr = [];

function addToList() {
  let itemName = iname.value;

  let itemObj = {
    name: itemName,
  };
  listArr.push(itemObj);

  renderList();
}

function renderList() {
  List.innerHTML = "";
  listArr.forEach((item, index) => {
    let row = `
      <tr>
        <td>${index + 1}</td>
        <td>${item.name}</td>
         <td><button class="btn btn-danger" onclick="deleteRow(${index})">del</button></td>
      </tr>
    `;
    List.innerHTML += row;
  });
}

renderList();
function deleteRow(a) {
  listArr.splice(a, 1);
  renderList();
}

// console.log(listArr);
