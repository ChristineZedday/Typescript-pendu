# Typescript-pendu
Jeu du pendu

réalisé avec le langage typescript, utilisant Node.js, webpack

Installer typescript:

Créer un dossier, ouvrir avec Visual Studio Code
npm install
npm install -g typescript 
Dans une fenêtre de commandes admin: Powershell Set-ExecutionPolicy RemoteSigned


pour construire le package.json: npm init

{
    "compilerOptions": {
        "target":"ES6", //version javascript (compabilité tous navigateurs: ES5)
        "module":"CommonJS",
        "sourceMap": true,
        "outDir": "src" //js compilé dossier différent du ts
    },
"include": ["ts"],
"exclude": ["node_modules", "**/__tests__/*"],
"allowJs": true //pour utiliser des fichiers js
}


Compiler un fichier ts isolé:
tsc chemin/nom.ts

tout compiler:
build:Terminal>Run build task>tsc: build tsconfig.json

transpiler en bundle minifié (les navigateurs n'aiment pas les modules!), installer webpack:
npm i -D webpack webpack -cli

npx webpack --mode=development

main.js dans le dossier dist code source js compilé ds dossier src, index js doit importer les autres

 <script  src="./dist/main.js">   </script>   à la fin du body de la page html car il a besoin du body pour s'éxécuter!

afficher la page HTML dans un navigateur
