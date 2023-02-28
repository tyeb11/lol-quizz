// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { questions } from "@/db.json";

interface OptionObject {
  id: Number;
  title: String;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const questionID = req.query.questionID;
  console.log("qustion ID :----", questionID);
  if (req.method == "GET") {
    questions.find(({ id, img, title, options }) => {
      if (id.toString() == questionID) {
        return res.status(200).json({
          id,
          img,
          title,
          options,
        });
      }
    });
    return res.status(200).json({ data: "" });
  }
}
