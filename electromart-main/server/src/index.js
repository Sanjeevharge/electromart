import 'dotenv/config';
import http from 'http';

import app from './app.js';
import { connectDatabase } from './config/db.js';
import { seedDatabaseIfNeeded } from './data/seedRunner.js';

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  try {
    await connectDatabase();
    await seedDatabaseIfNeeded();
    const server = http.createServer(app);

    server.listen(PORT, () => {
      console.log(`🚀 Electromart API running at http://localhost:${PORT}`);
    });

    const gracefulShutdown = async () => {
      console.log('\nShutting down gracefully...');
      server.close(async () => {
        process.exit(0);
      });
    };

    process.on('SIGINT', gracefulShutdown);
    process.on('SIGTERM', gracefulShutdown);
  } catch (error) {
    console.error('Failed to start server', error);
    process.exit(1);
  }
};

startServer();

