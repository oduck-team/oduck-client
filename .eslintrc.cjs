module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended",
  ],
  ignorePatterns: ["dist", "node_modules/*"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin", // nodejs module
          "external", // node_modules
          "internal", // in package
          "parent", // parent dir
          "sibling", // same dir
          "index", // same dir and index file
          "object", // json
        ],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
  },
};
