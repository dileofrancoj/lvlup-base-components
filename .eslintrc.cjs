module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:storybook/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.app.json"
    },
    "plugins": [
        "react",
        "simple-import-sort",
        "react-hooks"
    ],
    "ignorePatterns": [".eslintrc.cjs","dist","node_modules"],
    "rules": {
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "no-console":"warn",
        "@typescript-eslint/no-explicit-any": "error",
        "react/react-in-jsx-scope": "off"
    }
}
