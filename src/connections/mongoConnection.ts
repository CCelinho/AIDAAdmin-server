import mongoose from 'mongoose';

export async function mongoConnect(
  uri: string,
  options?: mongoose.ConnectOptions
) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    const con = await mongoose.connect(uri, options);
    return con;
  } catch {
    console.dir();
  }
}

export async function mongoDisconnect() {
  try {
    await mongoose.connection.close();
  } catch {
    console.dir();
  }
}
