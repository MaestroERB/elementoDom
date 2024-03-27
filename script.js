let elementoJavaScript = document.createElement("h1");
elementoJavaScript.innerText = "Título";
elementoJavaScript.id = "titulo";
let mostraTitulo = document.querySelector("h1");
mostraTitulo.appendChild(elementoJavaScript);


//Mostrar o produto
listaLinguagens.appendChild(elementoJavaScript);
const postagemJavaScript = document.createElement("h2");
postagemJavaScript.innerHTML =

`<h2 class="post-titulo">Carro</h2>

<p>

  carro marrom, marca volvo, no valor de R$250.000,00

</p>`;

const postagens = document.querySelector("h2");
postagens.appendChild(postagemJavaScript); 



console.log(elementoJavaScript);