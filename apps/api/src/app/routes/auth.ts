import { NextFunction, Response , Router, Request } from "express";

import * as jsonWebToken from 'jsonwebtoken';

import {
  Usuario as IUsuario,
}from '../../../../../libs/common/src/lib/interfaces/usuario';
import { getCollection } from "../util/mongodb";

export const JWT_SECRET_KEY = 'Ch4v3_sEcR3t4';

export const router: Router = Router();

router.post('/', async (req: Request , res: Response, next: NextFunction) => {
  const body: { username: string; password: string} = req.body;
  const results = await getCollection<IUsuario>(
    req.app,
    'usuarios',
  ).findOne({
    username: body.username,
    password: body.password,
  });
  if(results){
    delete results.password;
    res.json({
      ...results,
      token: jsonWebToken.sign(
        results,
        JWT_SECRET_KEY,
        {
          expiresIn: '30m'
        },
      ),
    });
  }else{
    res.status(401).send();
  }
});
