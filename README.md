![Drag Racing](https://i.imgur.com/Hjz6EvH.png)

# Mumble Design System

This is a template repository for the CAS FEE ADV design system part. 
It is configured to automatically provide GitHub Actions to build and deploy your design system as a static page and your component library to the GitHub package registry.

## Getting Started

Instructions on how to set up and install the project on a local machine.

### Installing

Step-by-step instructions on how to set up the project.

To use this library you need to add an .npmrc file with an auth-token

```
//npm.pkg.github.com/:_authToken={auth-token}
```

```
npm install -S @smartive-education/design-system-component-library-lobsome
```

Add tailwind preset and the content string to your tailwind-config.
```
module.exports = {
  presets: [
    require('@smartive-education/design-system-component-library-lobsome')
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@smartive-education/design-system-component-library-lobsome/dist/esm/components/**/*.js"
  ],
  ...
}
```

The mumble Design-System uses the font "Poppins". To use this font in your project you need to import it into your CSS.
```
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&display=swap');
```


## Documentation

You can find the ready to use storybook [here](https://smartive-education.github.io/design-system-component-library-lobsome/).

## Conventional Commits

We use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for consistent commit messages.
- The commit message should be structured as follows:

```
<type>[(scope)]: <description>
```

For Example: 
```
feat(button): added hover and action styling for button
```

## Authors

* **Alexander Widmer** - [Github](https://github.com/ejthan)
* **Milos Djuric** - [Github](https://github.com/djurango)


## Acknowledgments

* Less dependencies make less problems
* Keep it simple, stupid. Do not pollute your design system with unnecessary, fancy stuff (you will regret it) 
