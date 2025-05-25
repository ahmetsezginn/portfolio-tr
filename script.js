
const langToggle = document.getElementById('langToggle');
const cvLink    = document.getElementById('cvLink');

langToggle.addEventListener('click', () => {
  const isActive = langToggle.classList.toggle('active');
  const newLang  = isActive ? 'en' : 'tr';

  // Tüm metinleri çevir
  document.querySelectorAll('[data-tr][data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${newLang}`);
  });

  // Başlık çevirisi
  document.title = (newLang === 'en')
    ? "Ahmet Sezgin | Personal Website"
    : "Ahmet Sezgin | Kişisel Web Sitesi";

  // CV linkini güncelle
  const newHref = cvLink.getAttribute(`data-${newLang}-href`);
  cvLink.href = newHref;
});
