// js/script.js
window.addEventListener('load', () => {
  const text = "Mi amor, gracias por estos 20 meses juntos. Te amo más cada día. ❤️";
  const target = document.getElementById('message');
  let idx = 0;

  function type() {
    if (idx < text.length) {
      target.textContent += text[idx++];
      setTimeout(type, 100);
    }
  }
  type();
});
