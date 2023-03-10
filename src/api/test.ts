import { Request, Response } from 'express';
import { client } from '../db/db';
import errorCodes from '../utilities/errorCodes';

export async function user(req: Request, res: Response) {
  try {
    const result = await client.query('SELECT * FROM app_user');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    const errorCode = errorCodes[err.code];
    if (errorCode) {
      res.status(errorCode.statusCode).send(errorCode.message);
    } else {
      res.status(errorCodes.INTERNAL_SERVER_ERROR.statusCode).send(errorCodes.INTERNAL_SERVER_ERROR.message);
    }
  }
}