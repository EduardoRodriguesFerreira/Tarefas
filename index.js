var btnIncluir = document.querySelector('#bt-1')
var btnExcluir = document.querySelector('#bt-2')
var tarefas = document.querySelector('#tarefas')
var tarefas2 = document.querySelector('.concluido-container')
var sino2 = document.querySelector('#sino')
var sino3 = document.querySelector('#sino1')
var mainDta =document.querySelector('.data')
var sino = document.createElement('i')
var h3 = document.createElement('h3')
var Tadd =[]
var Tadd2 =[]



sino2.appendChild(sino)



btnIncluir.addEventListener('click', function(){
//Atribuindo e criando elementos
var Input = document.querySelector('#input-1')
var value =Input.value
var Inputcreate = document.createElement('input')
var button =document.createElement('button')
var buttonEditar =document.createElement('button')
var buttonSalvar =document.createElement('button')
var buttonConcluido = document.createElement('button')
var divdata= document.createElement('div')
var div = document.createElement('div')
var data = new Date()
var dia = String(data.getDate()).padStart(2,"0")
var mes = String(data.getMonth()+1).padStart(2,"0")
var ano = data.getFullYear()

var dataAtual = `${dia}/${mes}/${ano}`

divdata.innerHTML= `<h1>${dia}/${mes}/${ano}</h1>`

console.log(dataAtual)

if(value == ""){
    alert("Adicione uma tarefa")
    return false
 }
 
//Atribuindo atributos 
divdata.setAttribute('class', 'data')
Inputcreate.setAttribute('class', 'input-tarefas')
Inputcreate.setAttribute('disabled', 'false')
button.setAttribute('class', 'btn-lixeira')
buttonEditar.setAttribute('class', 'btn-lixeira')
buttonSalvar.setAttribute('class', 'btn-lixeira')
buttonConcluido.setAttribute('class' , 'btn-lixeira')
button.setAttribute('id', 'bt-2')
div.setAttribute('class', 'div-tarefas')

button.innerHTML ='<i class="fa-solid fa-trash  fa-xl" style="color:#cc2862 ;"></i>'
buttonEditar.innerHTML ='<i class="fa-solid fa-pen  fa-xl" style="color: #40a1dd;"></i>'
buttonSalvar.innerHTML ='<i class="fa-regular fa-floppy-disk fa-xl" style="color: #4ed2d4;"></i>'
buttonConcluido.innerHTML ='<i class="fa-solid fa-check  fa-xl" style="color: #20f386;"></i>'

Inputcreate.value = value
Input.value = ""

div.appendChild(Inputcreate)
div.appendChild(buttonConcluido)
div.appendChild(buttonEditar)
div.appendChild(buttonSalvar)
div.appendChild(button)
tarefas.appendChild(divdata)
tarefas.appendChild(div)



  

  Tadd.push(Inputcreate)
  sino2.innerHTML =`<h3>Tarefas Criadas: ${Tadd.length}</h3>`

 
button.addEventListener('click', function(){

    if(confirm('Tem certeza que deseja excluir ?')){

      Tadd.pop(Inputcreate)
      Tadd2.pop(Inputcreate)
      sino2.innerHTML =`<h3>Tarefas Criadas: ${Tadd.length}</h3>`
      sino3.innerHTML =`<h3>Concluidas: ${Tadd2.length}</h3>`
      div.remove()
      divdata.remove()

    }
})

  buttonEditar.addEventListener('click', function(){

    Inputcreate.disabled = false
    Inputcreate.focus()
      
  })

  buttonSalvar.addEventListener('click', function(){

    Inputcreate.disabled = true
      
  })


  buttonConcluido.addEventListener('click', function(){
    
    var div1= document.createElement('div')
    var div2 = document.createElement('div')
    var h1 =document.createElement('h1')
    var i = document.createElement('i')
    var i2 = document.createElement('i')
   

    if(tarefas2.style.visbility='hidden'){
      tarefas2.style.visibility='visible'
      Inputcreate.style.background ='rgb(137, 228, 182)'

      div1.setAttribute('class' , 'concluido-container')
      div2.setAttribute('class' , 'concluido')
      div2.style.animation ='tarefa 1s linear reverse'
      h1.textContent =  'Tarefa concluida'
      i.innerHTML ='<i class="fa-solid fa-circle-xmark  fa-xl" style="color: #41044;"></i>'
      i2.innerHTML ='<i class="fa-solid fa-delete-left  fa-xl" style="color: #41044;"></i>'

      tarefas2.appendChild(div2)
      div2.appendChild(h1)
      div2.appendChild(i)
      div2.appendChild(i2)
     
     
  i.addEventListener('click' , function(){

    if(tarefas2.style.visbility='visible'){

      tarefas2.removeChild(div2)
      Tadd2.push(Inputcreate)
   
      sino3.innerHTML =`<h3>Concluidas: ${Tadd2.length}</h3>`
      
    }
    
    
  })
    }


  i2.addEventListener('click'  , function(){

    Inputcreate.style.background =' rgb(216, 205, 254)'
    div1.setAttribute('class' , 'concluido-container')
    div2.setAttribute('class' , 'concluido')
    div2.style.animation ='tarefa 1s linear reverse'
    h1.textContent =  'Tarefa concluida desfeita!'
    i.innerHTML ='<i class="fa-solid fa-circle-xmark fa-xl" style="color: #41044;"></i>'
    i2.innerHTML ='<i class="fa-solid fa-delete-left fa-xl" style="color: #41044;"></i>'

    if(tarefas2.style.visbility='visible'){
      Tadd2.pop(tarefas2)
      tarefas2.removeChild(div2)
      sino3.innerHTML =`<h3>Concluidas: ${Tadd2.length}</h3>`
    }
    tarefas2.removeChild(div2)
    

    tarefas2.appendChild(div2)
    div2.appendChild(h1)
    div2.appendChild(i)
    div2.appendChild(i2)
  })
 
  
 })



 
})



