import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const date = new Date(Date.now());
    console.log('Request', req.url);
    console.log('==========================');
    console.log(date.getHours(), date.getMinutes(), date.getSeconds());
    console.log('==========================');
    next();
  }
}
