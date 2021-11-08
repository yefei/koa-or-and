import * as Koa from 'koa';

export declare function or(...middleware: Koa.Middleware[]): Koa.Middleware;
export declare function and(...middleware: Koa.Middleware[]): Koa.Middleware;
