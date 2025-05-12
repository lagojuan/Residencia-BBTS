document.addEventListener('DOMContentLoaded', function(){

    const tipoUsuarioSelect = document.getElementById('tipo-usuario');
    const botaoEntrar = document.getElementById('botao-entrar');
    const telaLogin = document.getElementById('login');
    const telaUsuario = document.getElementById('usuario')

    if (tipoUsuarioSelect && botaoEntrar) {
        botaoEntrar.addEventListener('click', function(event) {
            event.preventDefault();

            const valorSelecionado = tipoUsuarioSelect.value;
            if (valorSelecionado === 'usuario') {
                if (telaLogin && telaUsuario) {
                    telaLogin.style.display = 'none';
                    telaUsuario.style.display = 'block';
                }
            } else if (valorSelecionado === 'administracao') {
                window.location.href = 'admin.html'
            }else {
                console.warn('Tipo de usuário não selecionado ou innválido.');
                alert('Por favor, selecione o tipo de usuário.');
            }
        });
    } else {
        console.error('Elementos HTML com IDs "tipo-usuario" ou "botao-entrar" não encontrados.');
    }
});
 
  const passwordInput = document.getElementById('password-input');
  const togglePassword = document.querySelector('.toggle-password');

  togglePassword.addEventListener('click', function() {

    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';

    passwordInput.setAttribute('type', type);

    this.classList.toggle('visible'); 
  });

  
