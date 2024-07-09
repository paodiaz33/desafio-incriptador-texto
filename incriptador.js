// Función para encriptar el texto
function encriptar() {
    const textarea = document.getElementById('texto');
    const copiar = document.getElementById('copiar');
    const lupa = document.getElementById('lupa');
    const msj = document.getElementById('titulo-mensaje');
    const caja = document.getElementById('mensaje-encriptado');
    const texto = textarea.value;
    if (!texto) {
      alert('Por favor, diligencia el texto.');
      return;
    }
    const textoEncriptado = texto.replace(/[aeiou]/g, match => ({'a': '1', 'e': '2', 'i': '3', 'o': '4', 'u': '5'})[match]);
    document.getElementById('parrafo').innerText = textoEncriptado;
    document.getElementById('parrafo').style.textAlign = 'left';
    copiar.style.display = 'block';
    caja.setAttribute('style', 'top: 5%;');
    lupa.style.display = 'none';
    msj.style.display = 'none';
    textarea.value = '';
  }
  
  // Función para copiar el texto encriptado al portapapeles
  function copiar() {
    const textoParaCopiar = document.getElementById('parrafo').innerText;
    navigator.clipboard.writeText(textoParaCopiar).then(() => {
      alert('Texto copiado al portapapeles.');
    }, () => {
      alert('Error al copiar el texto.');
    });
  }
  
  // Función para desencriptar el texto
  function desencriptar() {
    const textarea = document.getElementById('texto');
    const texto = textarea.value;
    if (!texto) {
      alert('Por favor, diligencia el texto.');
      return;
    }
    const textoDesencriptado = texto.replace(/[12345]/g, match => ({'1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u'})[match]);
    document.getElementById('parrafo').innerText = textoDesencriptado;
    textarea.value = '';
  }
  
