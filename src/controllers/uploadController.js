import upload from '~/middlewares/multer';

const uploadController = (req, res) => {
  upload.single('image')(req, res, (err) => {
    if (err) {
      // Xử lý lỗi tải tệp
      console.error(err);
      return res.status(500).send('File upload failed.');
    }
    // Tệp đã được tải lên thành công
    // console.log(res);
    res.json(req.file);
    // res.send('File uploaded successfullysdfsdf.');
  });
};
export default uploadController;
