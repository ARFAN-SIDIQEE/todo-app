let todoList=[
    // {item:'', 
    //     date:''},

    // {item:'',
    //      date:''}];
]
displayItems()

function addTodo() {
    let inputElement=document.querySelector('.todo-input')

    let dateElement=document.querySelector('.todo-date')

    let todoItem=inputElement.value;
    let todoDate=dateElement.value;
    
    todoList.push({item: todoItem, date: todoDate})
    inputElement.value='';
    dateElement.value='';

    displayItems()

}
function displayItems() {
    let containerElement=document.querySelector('.todo-container');
    let newHtml= '';
    for (let i = 0; i< todoList.length; i++) {

        // let item = todoList[i].item;
        // let date = todoList[i].date;

        let{item, date}=todoList[i]

        newHtml += `
        
        <span>${item}</span>
        <span>${date}</span>
        <button class="btn-delete" onclick="todoList.splice(${i}, 1); displayItems();">Delete</button>
       
        `;
    }

    containerElement.innerHTML= newHtml;
//     todoList.forEach(function(item) {
//         let p=document.createElement('p');
//         p.textContent=item;
//         displayElement.appendChild(p);
//     });
// }
}