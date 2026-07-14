const fs = require('fs');
const files = ['index.html', 'analyzer.html', 'results.html', 'chat.html', 'jobs.html', 'recruiter.html', 'dashboard.html'];
const scriptToAdd = `  <script>
    (function() {
      const t = localStorage.getItem('ats_theme') || 'aurora-pink';
      const f = localStorage.getItem('ats_font') || 'modern-saas';
      document.documentElement.setAttribute('data-theme', t);
      document.documentElement.setAttribute('data-font', f);
    })();
  </script>`;

const scriptTagToAdd = `  <script src="js/theme-switcher.js" defer></script>`;

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    if (!content.includes('ats_theme')) {
      content = content.replace(/<head>/i, `<head>\n${scriptToAdd}`);
    }
    if (!content.includes('theme-switcher.js')) {
      content = content.replace(/(<\/head>)/i, `${scriptTagToAdd}\n$1`);
    }
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  } else {
    console.log('File not found: ' + file);
  }
});
