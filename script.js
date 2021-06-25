var hamburguer = document.querySelector(".hamburguer");
// document.querySelector(CSS) serve para buscar um elemento do mundo HTML e trazê-lo para o mundo JavaScript para que possamos manipulá-lo. A função recebe um parâmetro  CSS, neste caso a classe .hamburguer.

hamburguer.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu");
});

//AddEventListener é utilizado para adicionar eventos em elementos HTML. Em tempo de execução, você pode utilizar esta função para dizer o que vai acontecer quando o usuário clicar em um botão


const qtde = document.querySelector("#qtde").addEventListener("change", atualizarPreco) //Sempre que acontecer um click em #qtde, vai atualizar a caixa de texto

document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function() {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    atualizarPreco()
} )




function atualizarPreco() {

    const qtde = document.querySelector("#qtde").value
    const temJS = document.querySelector("#js").checked
    const incluiLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value

    let preco = qtde * 100;
    if(temJS) preco *= 1.1;
    if (incluiLayout) preco += 500;
    let taxaDeUrgencia = 1 - prazo*0.1;
    preco *= 1 +  taxaDeUrgencia
    
    
    document.querySelector("#preco").innerHTML ="R$ " + preco.toFixed(2)
}
//document.querySelector("#qtde"): Retorna o elemento HTML, ou no nosso caso nossa caixa de texto.

//value:Diferente do comando de cima, esse comando, pega o valor digitado na caixa de texto