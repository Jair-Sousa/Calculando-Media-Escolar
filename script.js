// função para calcular 
function calcular(){
    var n1, n2, n3, media;
    n1 = document.getElementById('nota_1').value;
    n2 = document.getElementById('nota_2').value;
    n3 = document.getElementById('nota_3').value;
     

    // transformando as variavéis em números flutuantes e efetuando os cálculos
    media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3;

    // estrutura condicional e o método (.toFixed) para fixar apenas duas casas decimais flutuantes
    document.getElementById('media').innerHTML = media.toFixed(2).replace('.',',');
    if(media < 6){
        document.getElementById('status').innerHTML = "Reprovado"
        document.getElementById('status').style.color = 'red';
    }else if(media <= 7 ){ 
        document.getElementById('status').innerHTML = "Recuperação"
    }else{
        document.getElementById('status').innerHTML = "Aprovado, Parabens!"
        document.getElementById('status').style.color = 'green';

    }
    
}