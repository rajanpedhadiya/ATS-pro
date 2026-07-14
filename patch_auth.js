const fs = require('fs');
const protectedFiles = ['analyzer.html', 'results.html', 'chat.html', 'jobs.html', 'recruiter.html', 'dashboard.html'];
const allFiles = ['index.html', ...protectedFiles];

const authProtectScript = `  <script>
    if (!localStorage.getItem('ats_session')) {
      window.location.href = 'auth/login.html';
    }
  </script>`;

const sessionScriptTag = `  <script src="auth/session.js" defer></script>`;

allFiles.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Inject global session.js
    if (!content.includes('auth/session.js')) {
      content = content.replace(/(<\/head>)/i, `${sessionScriptTag}\n$1`);
    }

    // Inject inline protection for protected pages
    if (protectedFiles.includes(file) && !content.includes('auth/login.html')) {
      content = content.replace(/<head>/i, `<head>\n${authProtectScript}`);
    }

    fs.writeFileSync(file, content);
    console.log('Patched auth into ' + file);
  }
});
