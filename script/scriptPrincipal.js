var randomizar = Math.floor(Math.random() * (100 - 1) + 1)

var divResultado = document.getElementById('resultado')
var telaJogo = document.getElementById('telaDoJogo')
var telaInicial = document.getElementById('telaInicial')
var dinheiroInicial = document.getElementById('dinheiroInicial')
var dinheiro = document.getElementById('dinheiroFinal')

var valorDinheiro = 20;


divResultado.style.display = 'none'
telaInicial.style.display = 'FLEX'
telaJogo.style.display = 'none'

var lista = [];
var caixaText = document.getElementById('AreaDeTexto')

function addElements(){

    let botaoChutar = document.getElementById('buttonChutar')
    let botaoComecar = document.getElementById('botaoComecar')
    let botaoDica = document.getElementById('buttonDica')
    botaoDica.addEventListener('click', dica)
    botaoComecar.addEventListener("click", comecar)
    botaoChutar.addEventListener('click', principal)

}

function principal(){
    let resultado = document.getElementById('result')
    let ficouDevendo = document.getElementById('devendo')

    
    if(!InList(caixaText.value, lista) && ZeroToHundred(caixaText.value)){

        lista.push(Number(caixaText.value))

        if(caixaText.value != randomizar){ // SE ERRAR

            Swal.fire({
                position: 'bottom-center',
                icon: 'error',
                title: 'ERROOUUU!!!!!',
                width: '700px',
                showConfirmButton: false,
                timer: 1200
            })
            
            valorDinheiro -= 1;
            
            
            if(valorDinheiro < 0){
                valorDinheiro = 0;
            }

            dinheiroInicial.innerHTML = `R$${valorDinheiro}`
            
        }else{ // SE ACERTAR
            
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'ACERTOUUU!!!!!',
                width: '500px',
                showConfirmButton: false,
                timer: 1500
            })
            
            let verificarNumero = lista.length - 1

            if(verificarNumero == 1){
                resultado.innerHTML = `Voc?? chutou ${verificarNumero} n??mero at?? acertar, sendo ele:`
            }else{

                if(verificarNumero != 0){

                    resultado.innerHTML = `Voc?? chutou ${verificarNumero} n??meros at?? acertar, sendo eles:`
                }else{
                    resultado.innerHTML = `PARAB??NS, VOC?? ACERTOU DE PRIMEIRA!`
                }

            }

            for(let cont = 0; cont < verificarNumero; cont++){     

                resultado.innerHTML += ` ${lista[cont]} |`
            }
            
            
            

            if(valorDinheiro > 0){
                dinheiro.classList.add("green")
                dinheiroInicial.classList.add("green")
            }else{
                dinheiro.classList.add("red")
                dinheiroInicial.classList.add("red")
                
            }
            
            dinheiro.innerHTML = `Voc?? ficou com o total de R$${valorDinheiro}`
            divResultado.style.display = 'flex'
        }
        
    }else{
        
        if(InList(caixaText.value, lista)){
            Swal.fire({
                position: 'top-center',
                icon: 'error',
                width: '700px',
                title: 'N??mero repetido!',
                text: 'Adicione um n??mero que n??o tenha adicionado antes',
                showConfirmButton: false,
                timer: 5500
            })
        }else{
            Swal.fire({
                position: 'top-center',
                icon: 'error',
                width: '700px',
                title: 'Adicione um n??mero v??lido',
                text: 'Adicione um n??mero entre 0 e 100!',
                showConfirmButton: false,
                timer: 5500
            })
        }
        
    }
}


function dica(){
    
    valorDinheiro -= 15;
    
    if(valorDinheiro < 0){
        valorDinheiro = 0;
    }

    dinheiroInicial.innerHTML = `R$${valorDinheiro}`
    
    let dica = document.getElementById('dica')
    let maior = randomizar + Math.floor(Math.random() * ( 5 - 1 ) + 1)
    let menor = randomizar - Math.floor(Math.random() * ( 5 - 1 ) + 1)

    if(menor < 0){
        menor = 0;
    }
    if(maior > 100){
        maior = 100;
    }
    // confirm(`A dica ?? que o n??mero sorteado est?? entre ${menor} e ${maior}`
    
    swal({
        title: "Dica",
        text: `A dica ?? que o n??mero sorteado est?? entre ${menor} e ${maior}`,
        buttons: {
            confirm: true,
        },
      });

      
}



function InList(numero, array){

    if(array.indexOf(Number(numero)) != -1){
        return true
    }
    return false

}

function ZeroToHundred(numero){

    if(numero > 0 && numero <= 100){
        return true
    }
    return false

}   

function comecar(){

    telaInicial.style.display = 'none'
    telaJogo.style.display = 'flex'

}