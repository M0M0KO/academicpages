// Language mapping between English and Chinese pages
const pageMappings = {
  // English to Chinese
  '/': '/cn/',
  '/publications/': '/cn/publications/',
  '/cv/': '/cn/cv/',
  '/year-archive/': '/cn/year-archive/',
  
  // Chinese to English
  '/cn/': '/',
  '/cn/publications/': '/publications/',
  '/cn/cv/': '/cv/',
  '/cn/year-archive/': '/year-archive/'
};

// Function to get the corresponding page in the other language
function getCorrespondingPage(currentPath) {
  // Remove base path if it exists
  let path = currentPath;
  const basePath = document.querySelector('meta[name="base_path"]')?.getAttribute('content') || '';
  if (basePath && path.startsWith(basePath)) {
    path = path.replace(basePath, '');
  }
  
  // Check if the current path has a mapping
  if (pageMappings[path]) {
    return basePath + pageMappings[path];
  }
  
  // If no direct mapping exists, try to determine based on path pattern
  if (path.startsWith('/cn/')) {
    // Chinese page without direct mapping, try to get English equivalent
    return basePath + path.replace('/cn/', '/');
  } else {
    // English page without direct mapping, try to get Chinese equivalent
    return basePath + '/cn' + path;
  }
}

// Add event listeners to language switcher buttons
document.addEventListener('DOMContentLoaded', function() {
  const languageSwitchButtons = document.querySelectorAll('.language-switch');
  
  languageSwitchButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const currentPath = window.location.pathname;
      const correspondingPage = getCorrespondingPage(currentPath);
      window.location.href = correspondingPage;
    });
  });
}); 