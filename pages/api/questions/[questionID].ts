// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { questions } from "@/db.json";

interface OptionObject {
  id: Number;
  title: String;
}

interface QuestionObject {
  id: Number;
  img: String;
  title: String;
  answer: Number;
  options: Array<OptionObject>;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const questionID = req.query.questionID;
  if (req.method == "GET") {
    const comment = questions.find(({ id }) => id.toString() == questionID);
    res.status(200).json(comment);
  }
}
