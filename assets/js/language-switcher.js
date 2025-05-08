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
  // Extract baseurl from window.location
  const fullPath = window.location.pathname;
  let basePath = '';
  let cleanPath = '';
  
  // Check if we're on GitHub Pages with a repo name as baseurl (e.g., /academicpages/)
  const pathSegments = fullPath.split('/').filter(segment => segment.length > 0);
  
  // Special case for GitHub Pages with repository name
  if (pathSegments.length > 0 && pathSegments[0] === 'academicpages') {
    basePath = '/academicpages';
    
    // Remove basePath from the current path to get a clean path
    cleanPath = fullPath.replace(basePath, '');
    
    // Handle the case where there might be a duplicate basePath
    if (cleanPath.includes('/academicpages')) {
      cleanPath = cleanPath.replace('/academicpages', '');
    }
  } else {
    // For cases when not using a subdirectory or using a different one
    cleanPath = fullPath;
  }
  
  // Ensure cleanPath starts with /
  if (!cleanPath || cleanPath === '') {
    cleanPath = '/';
  } else if (!cleanPath.startsWith('/')) {
    cleanPath = '/' + cleanPath;
  }
  
  // Remove trailing slash if not the root path
  if (cleanPath.length > 1 && cleanPath.endsWith('/')) {
    cleanPath = cleanPath.slice(0, -1);
  }
  
  // Check if the clean path has a mapping
  if (pageMappings[cleanPath]) {
    return basePath + pageMappings[cleanPath];
  }
  
  // If no direct mapping exists, try to determine based on path pattern
  if (cleanPath.startsWith('/cn/')) {
    // Chinese page without direct mapping, try to get English equivalent
    return basePath + cleanPath.replace('/cn/', '/');
  } else {
    // English page without direct mapping, try to get Chinese equivalent
    return basePath + '/cn' + cleanPath;
  }
}

// Add event listeners to language switcher buttons
document.addEventListener('DOMContentLoaded', function() {
  const languageSwitchButtons = document.querySelectorAll('.language-switch');
  
  languageSwitchButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const correspondingPage = getCorrespondingPage(window.location.pathname);
      
      // Log the generated URL for debugging (can be removed in production)
      console.log('Switching to:', correspondingPage);
      
      window.location.href = correspondingPage;
    });
  });
}); 