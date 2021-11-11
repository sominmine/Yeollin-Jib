import { Request, Response } from "express";
import user from "../../models/user";
import post from "../../models/post";
import post_category from "../../models/post_category";
import category from "../../models/category";
import storage from "../../models/storage";
import Sequelize from "sequelize";
const { or, and, gt, lt } = Sequelize.Op;

const get_user_infinite = async (req: Request, res: Response) => {
  try {
    const id = req.cookies.id; //유저아이디
    const pageNum: any = req.params; // page Number

    let offset = 0;
    if (pageNum > 1) {
      offset = 8 * (pageNum - 1);
    }

    const postGet = await post.findAndCountAll({
      attributes: ["id", "userId", "title", "address", "dueDate", "imagePath"],
      order: [["id", "DESC"]],
      //   limit: 8,
      //   offset: offset,
      distinct: true, //Don't count include
      where: { userId: id },
      include: [
        {
          model: user,
          attributes: ["nickname", "imagePath"],
        },
        {
          model: storage,
          attributes: ["userId"],
        },
        {
          model: post_category,
          attributes: ["categoryId"],
        },
      ],
    });

    if (postGet.rows.length === 0) {
      return res
        .status(200)
        .send({ message: "더이상 조회할 게시물이 없습니다." });
    }

    res.status(200).send({ postGet });
  } catch (err) {
    console.log(err);
    return res.status(501).json({ message: "서버 에러 입니다." });
  }
};
export default get_user_infinite;