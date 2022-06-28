function dados() {
    var result = document.getElementById("result");

    // JSON
    var dados = {
        'nome': document.getElementById('nome').value,
        'idade': document.getElementById('idade').value,
        'email': document.getElementById('email').value,
        'profissao': document.getElementById('profissao').value
    };

    // output
    result.innerHTML = 'Nome: ' + dados.nome + '<br/>Idade: ' + dados.idade + '<br/>Email: ' + dados.email + '<br/>Profissão: ' + dados.profissao;
}
