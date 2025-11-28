window.onload = function (){

    const nomeSalvo = localStorage.getItem('usuario_nome');
    if (nomeSalvo) {
        document.getElementById('mensagem').innerText = `Olá novamente, ${nomeSalvo}!`;
        document.getElementById('nomeInput').value = nomeSalvo;
    }

    document.getElementById('salvarBtn').addEventListener('click', salvarNome);
    document.getElementById('limparBtn').addEventListener('click', limparNome);
}
function salvarNome() {
    const nome = document.getElementById('nomeInput').value;
    
    if (nome.trim() === "") {
        alert("Por favor, digite um nome!");
        return;
    }

    localStorage.setItem('usuario_nome', nome);
    
    document.getElementById('mensagem').innerText = `Nome salvo! Olá, ${nome}.`;
}

function limparNome() {
    localStorage.removeItem('usuario_nome');
    document.getElementById('nomeInput').value = "";
    document.getElementById('mensagem').innerText = "";
    alert("Nome esquecido com sucesso.");
}
