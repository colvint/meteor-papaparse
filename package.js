Package.describe({
  name: 'tauruscolvin:papaparse',
  version: '4.2.1',
  // Brief, one-line summary of the package.
  summary: 'Browserified Papa Parse',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'papaparse': '4.1.2'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  api.use(['cosmos:browserify@0.5.0'], 'client');

  api.addFiles([
    'client.browserify.js'
  ], 'client');

  api.export('Papa', 'client');
});
