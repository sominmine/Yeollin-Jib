import multer from "multer";
import * as path from "path";

export const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "uploads/");
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname);
      const name = path.basename(file.originalname, ext) + Date.now() + ext;
      cb(null, name);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});