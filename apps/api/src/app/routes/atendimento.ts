import { NextFunction, Response , Router, Request } from "express";

import { Atendimento as IAtendimento } from '../../../../../libs/common/src/lib/interfaces/atendimento';
import { getCollection } from "../util/mongodb";

export const router: Router = Router();

router.post('/', async (req: Request , res: Response, next: NextFunction) => {
  const body: IAtendimento = req.body;
  const results = await getCollection<IAtendimento>(
    req.app,
    'atendimentos',
  ).insertOne(body)
  res.json(results)
});
