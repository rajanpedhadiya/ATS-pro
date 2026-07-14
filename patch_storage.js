const fs = require('fs');
const file = 'c:/Users/deepa/Downloads/RESUME/js/services/storage.js';

let content = fs.readFileSync(file, 'utf8');

// The keys object was named KEY_NAMES, we need to replace usages of KEYS.X with getKey(KEY_NAMES.X)
content = content.replace(/KEYS\.CURRENT_USER/g, "getKey(KEY_NAMES.CURRENT_USER)");
content = content.replace(/KEYS\.CURRENT_ANALYSIS/g, "getKey(KEY_NAMES.CURRENT_ANALYSIS)");
content = content.replace(/KEYS\.ANALYSIS_HISTORY/g, "getKey(KEY_NAMES.ANALYSIS_HISTORY)");
content = content.replace(/KEYS\.RECOMMENDED_JOBS/g, "getKey(KEY_NAMES.RECOMMENDED_JOBS)");
content = content.replace(/KEYS\.SAVED_JOBS/g, "getKey(KEY_NAMES.SAVED_JOBS)");
content = content.replace(/KEYS\.FAVORITE_JOBS/g, "getKey(KEY_NAMES.FAVORITE_JOBS)");
content = content.replace(/KEYS\.CANDIDATES/g, "getKey(KEY_NAMES.CANDIDATES)");

// Also fix clearAllData which iterates over Object.values(KEYS)
// It should be Object.values(KEY_NAMES).forEach(name => localStorage.removeItem(getKey(name)));
content = content.replace(/Object\.values\(KEYS\)\.forEach\(key => localStorage\.removeItem\(key\)\);/g, "Object.values(KEY_NAMES).forEach(name => localStorage.removeItem(getKey(name)));");

fs.writeFileSync(file, content);
console.log('Patched storage.js keys');
