# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
## React + Vite
This project is the same than guitarla, but with Typescript
  - Files as .tsx instead or .jsx

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

@vitejs/plugin-react uses Babel for Fast Refresh
@vitejs/plugin-react-swc uses SWC for Fast Refresh
React + Vite
npm create vite@latest to start the launcher for VITE

Choose name project, React and "Javascript + SWC"
swc is a compiler.

`npm install` in the project folder to install all the dependencies.

`npm run dev` To start the server and run the app

## How to deploy
- Take a look in the package.json, you will see in the 'scripts' section the parameter 'build' with 'vite build' (because the project was made with VITE)
- Go to terminal and execute npm run build
- It will create a folder called 'dist' with the .js and .css files along the index.html
- You need to upload the whole dist folder to some place like Netlify (its free)
  - Go to sites
  - upload the dist folder and go to the site

## Typescript

### Primitive Types
Types of data that Typescript supports by default.

- number
- string 
- boolean
- null 
- undefined

### Types and Interfaces
Both are accpted by the community and are pretty similar.
Its a way to create an structure or group propertiesof an object.

Type

```
type Guitar = {
  id : number
  image : string 
  description : string
  price : number
}
```

Interface

```
interface Guitar = {
  id : number
  image : string 
  description : string
  price : number
}
```