// License by trungquandev.com

import { StatusCodes } from 'http-status-codes';
import { WHITELIST_DOMAINS } from '~/utils/constants';
import ApiError from '~/utils/ApiError';

// // Cấu hình CORS Option trong dự án thực tế
export const corsOptions = {
  origin: function (origin, callback) {
    // Cho phép việc gọi API bằng POSTMAN trên môi trường dev,
    // Thông thường khi sử dụng postman thì cái origin sẽ có giá trị là undefined
    if (!origin && process.env.BUILD_MODE === 'dev') {
      return callback(null, true);
    }

    // Kiểm tra dem origin có phải là domain được chấp nhận hay không
    if (WHITELIST_DOMAINS.includes(origin)) {
      return callback(null, true);
    }

    // Cuối cùng nếu domain không được chấp nhận thì trả về lỗi
    return callback(
      new ApiError(StatusCodes.FORBIDDEN, `${origin} not allowed by our CORS Policy.`)
    );
  },

  // Các phương thức được cho phép
  methods: ['GET', 'POST', 'PUT', 'DELETE'],

  // Các header được cho phép
  // allowedHeaders: ['Content-Type', 'Authorization'],

  // Các header có thể được expose
  // exposedHeaders: ['Authorization'],

  // Thời gian cho phép cache
  // maxAge: 86400, // 1 ngày

  // Some legacy browsers (IE11, various SmartTVs) choke on 204
  optionsSuccessStatus: 200,

  // CORS sẽ cho phép nhận cookies từ request
  credentials: true,
};
