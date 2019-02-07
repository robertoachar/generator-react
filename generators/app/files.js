module.exports = [
  {
    template: 'public/favicon.ico.template',
    destination: 'public/favicon.ico'
  },
  {
    template: 'public/index.html.template',
    destination: 'public/index.html'
  },
  {
    template: 'public/manifest.json.template',
    destination: 'public/manifest.json'
  },
  {
    template: 'src/components/App.jsx.template',
    destination: 'src/components/App.jsx'
  },
  { template: 'src/index.jsx.template', destination: 'src/index.jsx' },
  { template: 'CHANGELOG.md.template', destination: 'CHANGELOG.md' },
  { template: 'editorconfig.template', destination: '.editorconfig' },
  { template: 'eslintignore.template', destination: '.eslintignore' },
  { template: 'eslintrc.json.template', destination: '.eslintrc.json' },
  { template: 'gitattributes.template', destination: '.gitattributes' },
  { template: 'gitignore.template', destination: '.gitignore' },
  { template: 'LICENSE.template', destination: 'LICENSE' },
  { template: 'npmrc.template', destination: '.npmrc' },
  { template: 'package.json.template', destination: 'package.json' },
  { template: 'prettierrc.template', destination: '.prettierrc' },
  { template: 'README.md.template', destination: 'README.md' }
];
