import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { HealthController } from './health/health.controller';

@Module({
  imports: [TodoModule],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
