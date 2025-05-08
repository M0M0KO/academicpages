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
  // Get base path from meta tag or extract from window.location
  let basePath = document.querySelector('meta[name="base_path"]')?.getAttribute('content');
  
  // If meta tag not found (fallback), get base path from pathname
  if (!basePath) {
    // Extract baseurl from the pathname (e.g., "/academicpages")
    const pathParts = window.location.pathname.split('/');
    if (pathParts.length > 1) {
      // Check if we have a subdirectory in the URL
      const possibleBaseUrl = '/' + pathParts[1];
      // If it's likely a baseurl (not a language code or page path)
      if (possibleBaseUrl !== '/cn' && !possibleBaseUrl.includes('.')) {
        basePath = possibleBaseUrl;
      } else {
        basePath = '';
      }
    } else {
      basePath = '';
    }
  }
  
  // If trailing slash in basePath, remove it
  if (basePath && basePath.endsWith('/')) {
    basePath = basePath.slice(0, -1);
  }
  
  // Remove basePath from current path to get the route path
  let path = currentPath;
  if (basePath && path.startsWith(basePath)) {
    path = path.replace(basePath, '');
  }
  
  // Ensure path starts with /
  if (!path.startsWith('/')) {
    path = '/' + path;
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