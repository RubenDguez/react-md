import { execSync } from 'node:child_process';

(() => {
  const regex = new RegExp(/^(feature\/|hotfix\/|bugfix\/|enhancement\/)/);
  const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
  const pass = regex.test(branch);
  console.log(
    'Check branch name: ' + branch + ' :: ' + (pass ? 'PASS' : 'FAIL'),
  );

  if (!pass) {
    console.log(
      'Branch name must start with feature/, hotfix/, bugfix/ or enhancement/',
    );
    console.log('Use "git branch -M <new-branch-name>" to rename the branch');
    process.exit(1);
  }
})();
