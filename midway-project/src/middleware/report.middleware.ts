import { IMiddleware, Middleware } from '@midwayjs/core';
import { Context, NextFunction } from '@midwayjs/koa';
@Middleware()
export class ReportMiddleware implements IMiddleware<Context, NextFunction> {
  resolve() {
    console.log('----');
    // const startTime = Date.now();
    return async (ctx: Context, next: NextFunction) => {
      const startTime = Date.now();
      const result = await next();

      console.log('----ctx', Date.now() - startTime);
      return result;
    };
  }
}
