import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
{
files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
ignores: ["node_modules/", "dist/"],
},
  {
    languageOptions: { 
      globals: {
        ...globals.browser,
        React: 'readonly',
      }
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{jsx,tsx}"],
    rules: {
      // Desactivamos reglas relacionadas con React que no necesitamos con TypeScript
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/require-default-props": "off",
      "react/jsx-props-no-spreading": "off",
      "@typescript-eslint/no-unused-vars": ["error", { 
        "varsIgnorePattern": "React" 
      }]
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  }
];