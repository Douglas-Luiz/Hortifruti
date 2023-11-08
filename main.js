const menuCarrinho = document.getElementById("menu-carrinho");
const dados = '/assets/base/base.json'
const home = document.getElementById('home')
const listaItens = document.querySelector('.lista-itens')
const valorTotal = document.querySelector('.valor-total')


let arrPdt = [];



function menuToggle() {
  if (menuCarrinho.classList.contains("hide")) {
    menuCarrinho.classList.add('show')
    menuCarrinho.classList.remove('hide')
  } else {
    menuCarrinho.classList.remove('show')
    menuCarrinho.classList.add('hide')
  }
}

criarCards()



if (localStorage.arrItens) {
  criarCarrinho()
}




function salvarCarrinho(i) {
  if (localStorage.arrItens) {
    arrPdt = JSON.parse(localStorage.getItem('arrItens'))

  }
  arrPdt.push(i)
  localStorage.arrItens = JSON.stringify(arrPdt)
}
// function deletarItem() {
//   setTimeout(() => {
//     const button = document.querySelectorAll('.bt-item-excluir')
//     console.log(button)
//     button.map((x) => {
//       x.addEventListener('click', () => {
//         arrPdt.filter((i) => { i[ 'nomePdt' ] !== i.nomePdt })
//       })
//     })
//   }, 1000)
// }

function criarCarrinho() {

  if (localStorage.arrItens) {
    arrPdt = JSON.parse(localStorage.getItem('arrItens'))

  }
  listaItens.innerHTML = ''

  let valorFinal = 0


  arrPdt.map((i) => {


    const item = document.createElement('div')
    const itemInfo = document.createElement('div')
    const btItemExcluir = document.createElement('div')
    const btExcluir = document.createElement('div')
    const nomeItem = document.createElement('p')
    const qtdItem = document.createElement('p')
    const totalItem = document.createElement('p')


    const btSub = document.createElement('div')
    const btPlus = document.createElement('div')
    const spanSub = document.createElement('span')
    const spanPlus = document.createElement('span')
    const inp = document.createElement('input')
    const contador1 = document.createElement('div')




    contador1.classList.add('contador')
    btSub.classList.add('bt')
    btPlus.classList.add('bt')
    spanSub.innerHTML = '-'
    spanPlus.innerHTML = '+'
    inp.type = 'number'
    inp.value = 0;
    inp.id = `qtd${i.nomePdt}`


    // const contador = document.getElementById(`qtd${i.nomePdt}`)


    // btSub.addEventListener('click', () => {

    //   const contadorls = localStorage.getItem("contador")

    //   if (contador.value > 0) {
    //     --contador.value
    //     localStorage.setItem("qtd", contador)
    //     return


    //   }
    // })
    // btPlus.addEventListener('click', () => {
    //   const contadorls = localStorage.getItem("contador")

    //   ++contador.value
    //   localStorage.setItem("qtd", contador)
    //   return
    // })

    // console.log(localStorage.getItem("contador"))

    const total = 100
    //Number(i.valorPdt) * Number(localStorage.getItem("contador"))
    localStorage.setItem("qtd", 2)


    nomeItem.innerHTML = `<strong>Produto: </strong>${i.nomePdt}`
    qtdItem.innerHTML = `<strong>Quantidade: </strong>${localStorage.getItem("qtd")}`
    totalItem.innerHTML = `<strong>Valor: </strong>${total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`

    btExcluir.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
           <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
           <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
         </svg>`

    item.classList.add('item')
    itemInfo.classList.add('item-infor')
    nomeItem.classList.add('nome-item')
    qtdItem.classList.add('qtd-item')
    totalItem.classList.add('total-item')
    btExcluir.classList.add('bt-excluir')
    btItemExcluir.classList.add('bt-item-excluir')




    valorFinal = valorFinal + total



    btPlus.appendChild(spanPlus)

    btSub.appendChild(spanSub)

    contador1.appendChild(btSub)
    contador1.appendChild(inp)
    contador1.appendChild(btPlus)

    itemInfo.appendChild(nomeItem)
    itemInfo.appendChild(qtdItem)
    itemInfo.appendChild(totalItem)
    btItemExcluir.appendChild(btExcluir)
    item.appendChild(itemInfo)
    item.appendChild(contador1)
    item.appendChild(btItemExcluir)
    listaItens.appendChild(item)

    valorTotal.innerHTML = `Valor: ${valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`



  })
  //console.log(arrPdt)
}