import { Body, Controller, Get, Inject, Post, Query } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { User } from './user.interfaces';
@Controller('/user')
export class UserController {
  @Inject()
  ctx: Context;

  @Get('/')
  async getUsers(@Query('id') id: number): Promise<User> {
    this.ctx.logger.info('id: ', id);
    // 访问session
    // this.ctx.logger.info('session', this.ctx.session);
    return {
      id: 111,
      name: 'dcyao',
    };
  }

  @Post('/create')
  async createUser(@Body() userData): Promise<boolean> {
    this.ctx.logger.info('userData: ', userData);
    const cacheSetting = this.ctx.get('cache-control');
    this.ctx.logger.info('cacheSetting: ', cacheSetting);

    return true;
  }
}
