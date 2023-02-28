// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { questions } from "@/db.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "GET") {
    const { questionID, answerID } = req.body;
    questions.find(({ id, answer }) => {
      if (id.toString() == questionID) {
        if (answerID == answer) {
          return res.status(200).json({ data: true });
        }
        return res.status(200).json({ data: false });
      }
    });
  }
}
