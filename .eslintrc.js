module.exports = {
    "extends": "standard",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    "settings": {
      "import/parser": "babel-eslint",
      "import/resolve": {
        "moduleDirectory": ["node_modules", "src"]
      }
    },
    "globals": {
      "describe": true,
      "it": true,
      "expect": true
    }
};