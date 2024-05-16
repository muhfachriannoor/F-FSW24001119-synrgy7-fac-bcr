import multer, { Multer } from "multer";

const upload: Multer = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 3000000,
  },
});

export { upload };
