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
//     "exclude": [
//         "node_modules"
//     ]
// }