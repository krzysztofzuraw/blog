module.exports = {
  hooks: {
    'pre-commit': 'npm run lint',
    'pre-push': "concurrently 'npm run lint' 'npm run type-check'",
  },
};
