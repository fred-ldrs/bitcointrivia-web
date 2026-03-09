// App Banner Logic
(function() {
  const container = document.querySelector('.container');
  container.classList.remove('hidden');
  
  // Initialize quiz controls
  if (typeof setupQuizControls === 'function') {
    setupQuizControls();
  }

  // App Banner Logic
  const banner = document.getElementById('app-banner');
  const closeBtn = document.getElementById('close-banner');
  
  // Check if banner was previously closed
  if (!localStorage.getItem('appBannerClosed')) {
    banner.classList.remove('hidden');
  }
  
  closeBtn.addEventListener('click', () => {
    banner.classList.add('hidden');
    localStorage.setItem('appBannerClosed', 'true');
  });
})();
