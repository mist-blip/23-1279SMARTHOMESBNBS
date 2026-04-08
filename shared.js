// Shared nav and footer injected into every page
function renderNav(activePage) {
  const pages = [
    { href: 'index.html', label: 'Home' },
    { href: 'explore.html', label: 'Explore' },
    { href: 'bookings.html', label: 'Bookings' },
    { href: 'about.html', label: 'About' },
    { href: 'contact.html', label: 'Contact' },
  ];
  const links = pages.map(p =>
    `<li><a href="${p.href}" class="${p.href === activePage ? 'active' : ''}">${p.label}</a></li>`
  ).join('');
  document.getElementById('navbar').innerHTML = `
    <a class="nav-logo" href="index.html">🔥 <span>SmartHomes</span> BnBs</a>
    <ul class="nav-links">${links}</ul>
    <button class="nav-btn" onclick="showToast('Welcome back! 👋')">Login</button>
  `;
}

function renderFooter() {
  document.getElementById('footer').innerHTML = `
    <div class="footer-grid">
      <div>
        <div class="footer-logo">🔥 SmartHomes BnBs</div>
        <p class="footer-desc">Your cozy home away from home. Discover handpicked properties across Kenya — from beachside villas to mountain cabins. Book with confidence.</p>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="explore.html">Explore</a></li>
          <li><a href="bookings.html">Bookings</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Property Types</h4>
        <ul>
          <li><a href="#">Luxury Villas</a></li>
          <li><a href="#">Beach Houses</a></li>
          <li><a href="#">Cozy Cabins</a></li>
          <li><a href="#">City Apartments</a></li>
          <li><a href="#">Farmhouses</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Support</h4>
        <ul>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Cancellation Policy</a></li>
          <li><a href="#">Safety Info</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 SmartHomes BnBs · Designed for DICT113 School Project · All rights reserved.</p>
      <div class="social-links">
        <a href="#" title="Facebook">f</a>
        <a href="#" title="Twitter">𝕏</a>
        <a href="#" title="Instagram">📷</a>
        <a href="#" title="YouTube">▶</a>
      </div>
    </div>
  `;
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

window.addEventListener('scroll', () => {
  const btn = document.getElementById('scrollTop');
  if (btn) btn.classList.toggle('visible', window.scrollY > 300);
});
