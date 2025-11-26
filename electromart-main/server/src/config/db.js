import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let memoryServer;

export const connectDatabase = async () => {
  const mongoUri = process.env.MONGODB_URI;
  const shouldUseMemory = process.env.ENABLE_MEMORY_DB !== 'false';

  try {
    if (mongoUri) {
      await mongoose.connect(mongoUri);
      console.log('✅ Connected to MongoDB cluster');
      return;
    }

    if (!shouldUseMemory) {
      throw new Error('MONGODB_URI is required when in-memory db is disabled');
    }

    memoryServer = await MongoMemoryServer.create();
    const memoryUri = memoryServer.getUri();
    await mongoose.connect(memoryUri);
    console.log('✅ Connected to in-memory MongoDB instance');
  } catch (error) {
    console.error('❌ Failed to connect to database', error);
    throw error;
  }
};

export const disconnectDatabase = async () => {
  await mongoose.connection.close();

  if (memoryServer) {
    await memoryServer.stop();
  }
};

