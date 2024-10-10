# Computational-X-Interest-Group

Welcome to the Computational-X-Interest-Group project. Please choose your preferred language:

- [English](docs/en/README.md)
- [中文](docs/cn/README.md)

---

<script src="resources/scripts/i18n-switcher.js"></script>

<script>
  // This script will only run when viewed in a browser, not on GitHub
  (function() {
    function redirect() {
      var userLang = navigator.language || navigator.userLanguage;
      var path = userLang.startsWith('zh') ? 'docs/cn/README.md' : 'docs/en/README.md';
      if (window.location.pathname === '/' || window.location.pathname === '/README.md') {
        window.location.href = path;
      }
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', redirect);
    } else {
      redirect();
    }
  })();
</script>
