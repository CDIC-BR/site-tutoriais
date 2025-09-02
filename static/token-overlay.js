// Executa imediatamente quando o HTML carrega
(function() {
  try {
    var params = new URLSearchParams(window.location.search);
    var token = params.get('token');
    var ok = localStorage.getItem('cdic_token_ok') === '1';

    if (!ok && token === 'CDIC2025') {
      localStorage.setItem('cdic_token_ok', '1');
      ok = true;
      if (history.replaceState) {
        history.replaceState({}, document.title, location.pathname + location.hash);
      }
    }

    if (!ok) {
      // cria overlay cobrindo todo site
      var div = document.createElement('div');
      div.style.position = 'fixed';
      div.style.top = 0;
      div.style.left = 0;
      div.style.width = '100%';
      div.style.height = '100%';
      div.style.background = 'white';
      div.style.display = 'flex';
      div.style.justifyContent = 'center';
      div.style.alignItems = 'center';
      div.style.zIndex = 99999;
      div.style.fontFamily = 'sans-serif';
      div.style.textAlign = 'center';
      div.innerHTML = '<div><h1>Acesso não autorizado 🚫</h1><p>Você precisa acessar pelo sistema CDIC.</p></div>';
      document.documentElement.appendChild(div);
    }
  } catch(e) {}
})();
