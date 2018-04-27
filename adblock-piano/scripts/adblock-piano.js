
var detectaAdblock = document.createElement('div');
detectaAdblock.id = 'detecta-adblock';
document.body.appendChild(detectaAdblock);


conteudoAdblock = "" +
"<div class='modal-adblock'>" +
"    <div class='conteudo-adblock'>" +
"        <div id='mensagem-adblock'>" +
"            <figure class='img-adblock'></figure>" +
"            <h2>Bloqueador de anúncios detectado</h2>" +
"            <p>O Bloqueador de anúncios impede a visualização de informações," +
"                 ofertas e outros conteúdos oferecidos que podem ser interessantes para você.</p>" +
"                <button id='ir-requisitos-adblock'>" +
"                    Saiba como continuar lendo" +
"                </button>" +
"        </div>" +
"        <div id='requisitos-adblock'>" +
"            <h2>Adicione O Globo <br>nas suas permissões</h2>" +
"            <h3>Adblock Plus</h3>" +
"            <ol>" +
"                <li>Clique no ícone do Adblock Plus, localizado à direita da barra de endereço do seu navegador</li>" +
"                <li>Um menu drop-down aparecerá na tela</li>" +
"                <li>Clique em “Enabled on this site” para desativar o bloqueio da publicidade</li>" +
"                <li>Após o clique, o texto será substituído por “Disabled on this site”</li>" +
"                <li>Recarregue a página que você estava tentando acessar</li>" +
"            </ol>" +
"            <h3>AdBlock Pro</h3>" +
"            <ol>" +
"                <li>Clique no ícone do AdBlock Pro, localizado à direita da barra de endereços do seu navegador</li>" +
"                <li>Um menu drop-down aparecerá na tela</li>" +
"                <li>Clique no primeiro ícone (ligar) para para desativar o bloqueio da publicidade</li>" +
"                <li>Recarregue a página que você estava tentando acessar</li>" +
"            </ol>" +
"            <h3>AdBlock</h3>" +
"            <ol>" +
"                <li>Clique no ícone do AdBlock Pro, localizado à direita da barra de endereços do seu navegador</li>" +
"                <li>Um menu drop-down aparecerá na tela</li>" +
"                <li>Clique em “Don’t run on pages on this domain” para desativar o bloqueio da publicidade</li>" +
"                <li>Uma nova janela abrirá e você precisará clicar no botão “Exclude”</li>" +
"                <li>Após o clique, a página será recarregada</li>" +
"            </ol>" +
"        </div>" +
"    </div>" +
"</div>"+
"<div class='backdrop-adblock'> </div>"


document.getElementById("detecta-adblock").insertAdjacentHTML('beforeend', conteudoAdblock);


if (document.getElementById('ir-requisitos-adblock')) 
    document.querySelector('body').setAttribute('style','overflow: hidden;');
    document.getElementById('ir-requisitos-adblock').addEventListener('click', function() {
        document.getElementById('mensagem-adblock').style.display = 'none';
        document.getElementById('requisitos-adblock').style.display = 'block';
    });