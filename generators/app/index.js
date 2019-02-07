const Generator = require('yeoman-generator');
const chalk = require('chalk');

const files = require('./files');
const validate = require('./validate');

module.exports = class extends Generator {
  initializing() {
    this.log();
    this.log(chalk`React App Generator by {cyan Roberto Achar}`);
    this.log();
  }

  prompting() {
    const done = this.async();

    const prompts = [
      {
        type: 'input',
        name: 'app',
        message: 'What is the name of your app?',
        default: 'awesome-app'
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the description of your app?',
        default: 'An awesome app.'
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: validate.validateName,
        store: true
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: validate.validateEmail,
        store: true
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        validate: validate.validateUsername,
        store: true
      }
    ];

    this.prompt(prompts).then((props) => {
      this.props = props;
      done();
    });
  }

  writing() {
    this.log();
    this.log('🚀  Generating app...');
    this.log();

    const { app, description, name, email, username } = this.props;

    const templates = {
      app,
      description,
      name,
      email,
      username,
      year: new Date().getFullYear()
    };

    files.forEach((file) => {
      this.fs.copyTpl(
        this.templatePath(file.template),
        this.destinationPath(file.destination),
        templates
      );
    });
  }

  install() {
    this.log();
    this.log(
      chalk`📦  Installing dependencies {cyan react}, {cyan react-dom}, {cyan react-scripts}...`
    );
    this.log();
    this.log(
      chalk`📦  Installing devDependencies {cyan eslint-config-airbnb}, {cyan eslint-config-prettier}, {cyan eslint-plugin-import}, {cyan eslint-plugin-jsx-a11y}, {cyan eslint-plugin-prettier}, {cyan eslint-plugin-react}, {cyan prettier}...`
    );
    this.log();

    this.npmInstall(['react', 'react-dom', 'react-scripts']);

    this.npmInstall(
      [
        'eslint-config-airbnb',
        'eslint-config-prettier',
        'eslint-plugin-import',
        'eslint-plugin-jsx-a11y',
        'eslint-plugin-prettier',
        'eslint-plugin-react',
        'prettier'
      ],
      { 'save-dev': true }
    );
  }

  end() {
    this.log();
    this.log('🎉  Successfully generated!');
  }
};
