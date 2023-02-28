// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import questions from "@/db.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "GET") return res.status(200).json(questions);
}
