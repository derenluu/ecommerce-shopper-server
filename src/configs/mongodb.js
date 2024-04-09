import { env } from '~/configs/environment';
import { MongoClient, ServerApiVersion } from 'mongodb';

// Initially null to check database connection
let dbInstance = null;

export const mongoClientInstance = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Connect database
export const CONNECT_DB = async () => {
  await mongoClientInstance.connect();
  dbInstance = mongoClientInstance.db(env.DB_NAME);
};

// Function to get the database instance
// Lưu ý: phải đảm bảo chỉ luôn gọi GET_DB sau khi đã connect thành công tới MongoDB (là biến dbInstance)
// Vì biến dbInstance đã đc tạo từ trước để nhận kết quả kết nối với MongoDB (là hàm CONNECT_DB)
export const GET_DB = () => {
  if (!dbInstance) throw new Error('>>> Must connect to MongoDB first.');
  return dbInstance;
};

// Disconnect database khi cần thiết
export const CLOSE_DB = async () => {
  await mongoClientInstance.close();
};
