import { execSync } from 'node:child_process';

(() => {
  const regex = new RegExp(/^(main|feature\/|hotfix\/|bugfix\/|enhancement\/)/);
  const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
  console.log(regex.test(branch));
})();
