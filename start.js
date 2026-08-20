import { spawn } from 'child_process';

console.log('🚀 Starting Full-Stack Dev Server...');

// Start Express API Server
const server = spawn('node', ['server/index.js'], { stdio: 'inherit', shell: true });

// Start Vite Dev Server
const vite = spawn('npx', ['vite'], { stdio: 'inherit', shell: true });

process.on('SIGINT', () => {
  server.kill();
  vite.kill();
  process.exit();
});
