import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { HealthController } from './health/health.controller';
import { MetricsModule } from './metrics/metrics.module';
import { RequestIdMiddleware } from './common/middleware/request-id.middleware';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp:
        process.env.NODE_ENV === 'production'
          ? {
              // Production: JSON logs (no pino-pretty)
              customProps: (req) => ({
                requestId: req.headers['x-request-id'],
              }),
              serializers: {
                req: (req) => ({
                  method: req.method,
                  url: req.url,
                  requestId: req.headers['x-request-id'],
                }),
                res: (res) => ({
                  statusCode: res.statusCode,
                }),
              },
            }
          : {
              // Development: Pretty logs
              transport: {
                target: 'pino-pretty',
                options: {
                  colorize: true,
                  singleLine: true,
                  translateTime: 'SYS:standard',
                  ignore: 'pid,hostname',
                },
              },
              customProps: (req) => ({
                requestId: req.headers['x-request-id'],
              }),
              serializers: {
                req: (req) => ({
                  method: req.method,
                  url: req.url,
                  requestId: req.headers['x-request-id'],
                }),
                res: (res) => ({
                  statusCode: res.statusCode,
                }),
              },
            },
    }),
    TodoModule,
    MetricsModule,
  ],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestIdMiddleware).forRoutes('*');
  }
}
