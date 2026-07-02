/**
 * Script de build simple
 * Copia los archivos necesarios a la carpeta dist/
 */
const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');

// Crear carpeta dist
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

// Archivos a copiar
const filesToCopy = [
    { src: 'app.js', dest: 'app.js' },
    { src: 'tasks/sync.js', dest: 'tasks/sync.js' },
    { src: 'tasks/math.js', dest: 'tasks/math.js' },
    { src: 'package.json', dest: 'package.json' },
];

// Crear subcarpetas necesarias
fs.mkdirSync(path.join(distDir, 'tasks'), { recursive: true });

// Copiar archivos
filesToCopy.forEach(({ src, dest }) => {
    const srcPath = path.join(__dirname, '..', src);
    const destPath = path.join(distDir, dest);
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copiado: ${src} → dist/${dest}`);
});

// Crear build-info.json con metadata del build
const buildInfo = {
    version: process.env.APP_VERSION || '1.0.0',
    buildTime: new Date().toISOString(),
    commit: process.env.GITHUB_SHA || 'local',
    branch: process.env.GITHUB_REF_NAME || 'local',
    builtBy: process.env.GITHUB_ACTOR || 'developer'
};

fs.writeFileSync(
    path.join(distDir, 'build-info.json'),
    JSON.stringify(buildInfo, null, 2)
);

console.log('\nBuild info:');
console.log(JSON.stringify(buildInfo, null, 2));
console.log('\n✅ Build completado exitosamente!');
