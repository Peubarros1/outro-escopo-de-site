let listadequantidade = [];
let listadenomeProduto = [];
let listadevalorUnitario = [];
let totalgeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('lista-produtos').textContent = '0 reais ';

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = parseFloat(produto.split('R$')[1]); 
    let quantidade = parseInt(document.getElementById('quantidade').value); 
    
   
    if (isNaN (quantidade) || quantidade <= 0) {
        alert("Digite um número válido na quantidade");
        return; 
    }

    
    let produtos = 1;
    for(let i = 0; i < listadenomeProduto.length; i++) {
        if(listadenomeProduto[i] == nomeProduto){
            listadequantidade[i] += quantidade;
            listadevalorUnitario[i] += quantidade * valorUnitario; 
            produtos = 0;
        }
    }

    if(produtos){
        listadequantidade.push(quantidade);
        listadenomeProduto.push(nomeProduto);
        listadevalorUnitario.push(quantidade * valorUnitario);
    }
    
    
    

    let carrinho = document.getElementById("lista-produtos");

    
    carrinho.innerHTML = ""; 
    for(let i = 0; i < listadenomeProduto.length; i++) {
        totalgeral += listadevalorUnitario[i];

        let mesagem = 'para de mentir, que tu não tem esse dinheiro'; 
        if(totalgeral>15000){
            carrinho.innerHTML = `<section class="carrinho__produtos__produto">
            <span class="texto-azul"> </span> ${mesagem} <span class="texto-azul"></span>
        </section>`;

        }else{
        carrinho.innerHTML += `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${listadequantidade[i]}x</span> ${listadenomeProduto[i]} <span class="texto-azul">R$${listadevalorUnitario[i]}</span>
        </section>`;}
    }
    

    let valorg = document.getElementById("valor-total");
    valorg.textContent = `R$ ${totalgeral}`;
    document.getElementById('quantidade').value = 0;
}
function limpar(){
    document.getElementById('quantidade').value = 0;
    document.getElementById('produto').value = '';
    document.getElementById('lista-produtos').textContent = '0 reais liso';
    totalgeral = 0;
    document.getElementById("valor-total").textContent = '0';
    //quantidade = 0;
     listadequantidade = [];
     listadenomeProduto = [];
     listadevalorUnitario = [];
    //valorUnitario = 0;
    //nomeProduto = '';
}
