var mainlist =document.getElementById('mainlist')
var input =document.getElementById('input')
function add(){
    var text = input.value
    var finalText = document.createTextNode(text)



var list =document.createElement('p')
list.setAttribute('class', 'list')
list.appendChild(finalText)
mainlist.appendChild(list)

// =============create delete button

var btnDiv = document.createElement('div')
var btn = document.createElement('button')
btn.setAttribute('class','btn')
btn.setAttribute('onClick' , 'deleteTodeo(this)')
var btnText = 'Delete'
var finalbtnText = document.createTextNode(btnText)
btn.appendChild(finalbtnText)


// ============================create Edit Button


    var editbtn = document.createElement('button')
    editbtn.setAttribute('class', 'btn')
    edittn.setAttribute('onClick', 'edit (this)')
    var editbtnText = 'Edit'
    var finaleditbtnText = document.createTextNode(editbtnText)
    editBtn.appendChild(finaleditbtnText)




    inputValue.value = ''




    btnDiv.appendChild(btn)
    btnDiv.appendChild(editBtn)
    list.appendChild(btnDiv)


}

function deleteTodo(e){
    var li = e.parentNode.parentNode
    li.remove()
    console.log(e.parentNode.parentNode)

}

function edit(e){
    var li = e.parentNode.parentNode
    var editText = prompt('Enter Edit Text')
    li.firstchild.nodeValue = editeText
console.log(li)
}
function deleteAll(){
    mainlist.innerHTML = ''
}