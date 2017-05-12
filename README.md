## Angular 4 & Bootstrap 4 & FontAwesome & JQuery

### DEPENDENCIES : need node version 6.x+ AND @angular/cli

#### @angular/cli install

```sh
$ npm install -g @angular/cli
OR
$ sudo npm install -g @angular/cli
```

#### DEMO : [https://fullstack-c6c9e.firebaseapp.com/html/rockit](https://fullstack-c6c9e.firebaseapp.com/html/rockit)

### START
```sh
$ npm install
$ ng serve
http://localhost:4200
```

```
$ ng -version
../.npm-global/lib/node_modules/angular-cli/node_modules/@ngtools/json-schema/src/schema-class-factory.js:34
            result.push(...indices);
                        ^^^
SyntaxError: Unexpected token ...

need node version 6.x
```

```sh
Node 7 install
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### To use JQuery with angular-cli project :

```
First: Install jQuery, the actual library

npm install jquery --save

Then: Install jQuery TypeScript autocomplete

npm install @types/jquery --save-dev
Finally: Go to the ./angular-cli.json file at the root of your Angular CLI project folder, 
and find the scripts: [] property, add this inside it:

"../node_modules/jquery/dist/jquery.min.js"

like :
"scripts": ["../node_modules/jquery/dist/jquery.min.js"],
    "environmentSource": "environments/environment.ts",
    "environments": {
    "dev": "environments/environment.ts",
    "prod": "environments/environment.prod.ts"
    }
In component:
import $ from 'jquery';
```

### Bootstrap4

```
npm install bootstrap@next --save

and I add thi line in my angular-cli.json:

"scripts": [
  "../node_modules/jquery/dist/jquery.js",
  "../node_modules/tether/dist/js/tether.js",
  "../node_modules/bootstrap/dist/js/bootstrap.js"
],
"styles": [
  "styles.css",
  "../node_modules/bootstrap/dist/css/bootstrap.css"
],

```
### ng-bootstrap : bootstrap4 angular Components

```
npm install --save @ng-bootstrap/ng-bootstrap
REF:
https://ng-bootstrap.github.io/#/components/
```

### angular/animations

```
$ npm install --save @angular/animations

In app.modules.ts :
import { BrowserModule } from '@angular/platform-browser';

imports: [
    BrowserModule, ...
```
### Upgrade angular 2 -> 4

```
npm i -g npm-check-updates
npm-check-updates -u
npm install
```
