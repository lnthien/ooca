import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StressModule } from './stress/stress.module';

@Module({
  imports: [StressModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
