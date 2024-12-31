(function() {
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'cn', name: '中文' }
  ];

  function createLanguageSwitcher() {
    const currentPath = window.location.pathname;
    const currentLang = getCurrentLang(currentPath);

    const switcher = document.createElement('div');
    switcher.style.textAlign = 'right';
    switcher.style.padding = '10px';

    languages.forEach(lang => {
      const link = document.createElement('a');
      link.href = getTranslatedPath(currentPath, currentLang, lang.code);
      link.textContent = lang.name;
      link.style.marginLeft = '10px';
      if (lang.code === currentLang) {
        link.style.fontWeight = 'bold';
      }
      switcher.appendChild(link);
    });

    document.body.insertBefore(switcher, document.body.firstChild);
  }

  function getCurrentLang(path) {
    const langMatch = path.match(/\/docs\/(\w+)\//);
    return langMatch ? langMatch[1] : 'en'; // Default to 'en' if no match
  }

  function getTranslatedPath(currentPath, fromLang, toLang) {
    if (fromLang === toLang) return currentPath;
    const basfePath = currentPath.replace(/^\/docs\/\w+/, '');
    return `/docs/${toLang}${basePath}`;
  }

  document.addEventListener('DOMContentLoaded', createLanguageSwitcher);
})();