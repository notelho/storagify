
// "scripts": {
//     "start": "npm run watch",
//     "test": "jest --verbose",
//     "watch": "nodemon -e ts -w ./src -x npm run build",
//     "build": "npx tsc"
//   },

// // gulpfile

// const uglifyes = require('uglify-es');
// const composer = require('uglify-es/composer');
// const uglify = composer(uglifyes, console);
// const gulp = require('gulp');

// gulp.task('minify', function () {


//     return gulp.src('dist/**/*.js')

//         .pipe(uglify())

//         .pipe(gulp.dest('dist'))

// })

// "files": [
    // "./typings/index.d.ts",
    // "./typescript/main.ts"
//   ]

// build.ts

// import { execSync } from 'child_process'

// switch (process.platform) {
//         case "win32":
//                 execSync(`npm run build-windows`);
//                 break;
//         case "linux":
//                 execSync(`npm run build-linux`);
//                 break;
//         case "darwin":
//                 execSync(`npm run build-linux`);
//                 break;
//         default:
//                 break;
// }

// "scripts": {
//     "start": "npm run build && npm run api",
//     "api": "pm2 start dist/index.js --watch --name mining-backend",
//     "build": "ts-node src/scripts/build.ts",
//     "build-linux": "rm -rf dist/ && tsc && gulp minify",
//     "build-windows": "rd /s /q dist && tsc && gulp minify",
//     "watch": "nodemon -e ts -w ./src -x npm run watch:serve",
//     "watch:serve": "npx ts-node src/index.ts"
//   },

// {
//     "compilerOptions": {
//         "target": "es6",
//         "module": "commonjs",
//         "moduleResolution": "node",
//         "experimentalDecorators": true,
//         "emitDecoratorMetadata": true,
//         "declaration": false,
//         "outDir": "./dist"
//     },
//     "include": [
//         "src/"
//     ],

// }

// import gulp from "gulp";
// import browserify from "browserify";
// import fs from "fs";

// gulp.task('default', () => {
//   browserify({
//     entries: 'src/utils.js',
//     debug: true
//   })
//   .bundle()
//   .pipe(fs.createWriteStream('./dist/utils.js'));
// });
 
// https://stackoverflow.com/questions/40029113/syntaxerror-import-and-export-may-appear-only-with-sourcetype-module-g 

// var gulp = require('gulp');
// var source = require('vinyl-source-stream');
// var browserify = require('browserify');
// var babelify = require("babelify");
// var watch = require('gulp-watch');

// gulp.task('build', function () {
//     return browserify({
//         entries: ['./src/index.d.ts']
//     })
//         .transform(babelify.configure({
//             presets: ["es2015"]
//         }))
//         .transform('babelify')
//         .bundle()
//         // .pipe(source('./lib/index.js'))
//         .pipe(gulp.dest('app/'));
// });


