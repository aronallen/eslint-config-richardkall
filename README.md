# eslint-config-richardkall

> ESLint config for my projects.

## ES6

Install packages as devDependencies:

```bash
npm install --save-dev babel-eslint eslint@1.6.0 eslint-config-richardkall
```

Add a `.eslintrc` config to your project:

```json
{
  "extends": "richardkall"
}
```

## ES6 & React

Install packages as devDependencies:

```bash
npm install --save-dev babel-eslint eslint@1.6.0 eslint-plugin-react@3.5.1 eslint-config-richardkall
```

Add a `.eslintrc` config to your project:

```json
{
  "extends": "richardkall/react"
}
```

## Legacy (ES5 and below)

Install packages as devDependencies:

```bash
npm install --save-dev eslint@1.6.0 eslint-config-richardkall
```

Add a `.eslintrc` config to your project:

```json
{
  "extends": "richardkall/legacy"
}
```

## License

MIT &copy; [Richard Käll](http://richardkall.se)
