var tbody = document.querySelector(".tbody");
var divVencedor = document.querySelector(".divVencedor");
var numeroVencedor = document.querySelector(".numeroVencedor");
var nomeVencedor = document.querySelector(".nomeVencedor");
var adicionarBTN = document.querySelector(".adicionarBTN");
var inputNumero = document.querySelector(".inputNumero");
var numeroPessoa = document.querySelector(".numeroPessoa");
var contagem = document.querySelector(".contagem");
var nomePessoa = document.getElementById("nome");
var id = 0;
var lista = [];
var listaNumero = [];
var contagemSegundos = 4;

function adicionar() {
  id++;

  var nome = document.getElementById("nome");
  var numeroPessoa = document.getElementById("numero");

  lista.push(nome.value);
  listaNumero.push(numeroPessoa.value);

  var elementoTr = document.createElement("tr");
  var elementoTd = document.createElement("td");
  var elementoTdnome = document.createElement("td");
  var idPessoa = document.createTextNode(numeroPessoa.value);
  var nomePessoa = document.createTextNode(nome.value);

  elementoTd.id = id;
  elementoTdnome.id = id;
  elementoTd.value = idPessoa;
  elementoTdnome.value = nomePessoa;

  tbody.appendChild(elementoTr);
  elementoTr.appendChild(elementoTd);
  elementoTr.appendChild(elementoTdnome);
  elementoTd.appendChild(idPessoa);
  elementoTdnome.appendChild(nomePessoa);

  nome.value = "";
  numeroPessoa.value = "";
}

function sortear() {
  setInterval(contar, 1000);
}

function contar() {
  contagemSegundos--;

  if (contagemSegundos < 0) {
    ganhador();
  }
  contagem.innerHTML = contagemSegundos;
}

function ganhador() {
  var aleatorio = Math.floor(Math.random() * lista.length + 1);

  divVencedor.style.display = "block";
  numeroVencedor.innerHTML = listaNumero[aleatorio - 1];
  nomeVencedor.innerHTML = lista[aleatorio - 1];

  adicionarBTN.style.display = "none";
  inputNumero.style.display = "none";
  contagem.style.display = "none";
  nomePessoa.style.display = "none";
}
