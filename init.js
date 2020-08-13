const { execSync } = require('child_process')
const fs = require('fs')

function execmd(cmd) {
  let out = execSync(cmd)
  console.log(`${out}`)
}



execmd('yarn add --dev eslint')

const babelrc = `{
    "presets": [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "node": "current"
                }
            }
        ]
    ],
    "plugins": [
        "@babel/plugin-transform-runtime"
    ]
}
`

fs.writeFileSync('.babelrc', babelrc)

const editorconfig = `# editorconfig.org
root = true

[*]
indent_style = space
indent_size = 4
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.js]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true


[package.json]
indent_size = 2
`

fs.writeFileSync('.editorconfig', editorconfig)

const prettierrc = `{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "useTabs": false
}
`

fs.writeFileSync('.prettierrc', prettierrc)



const eslintrc = `module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  globals: {
    __static: true
  },
  plugins: [
    'html'
  ],
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
`


fs.writeFileSync('.eslintrc', eslintrc)



const eslintignore = `bin
public
node_modules
build
config
*-compiled.js
*/*-compiled.js
*/*/*-compiled.js
*/*/*/*-compiled.js
`


fs.writeFileSync('.eslintignore', eslintignore)
