const statusPara = document.getElementById('status');
const enterBtn = document.getElementById('enterBtn');

enterBtn.addEventListener('click', () => {
  const h1 = document.createElement('h1');
  h1.textContent = "Entered Metaverse";
  statusPara.replaceWith(h1);
});
