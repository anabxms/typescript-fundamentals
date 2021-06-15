var number = 5;
let count = 2;

/* 
* Variáveis > var estão sempre availables fora dos escopos das funções
* Se utilizarmos o let, ele só estará disponível DENTRO do escopo
*/

function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }

    console.log('Finally: ' + i);
}

doSomething()