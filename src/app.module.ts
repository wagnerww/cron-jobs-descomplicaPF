import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';
import { CronPendingBokeragesService } from './cron-pending-bokerages/cron-pending-bokerages.service';
import { HttpModule } from '@nestjs/common';


@Module({
  imports: [ScheduleModule.forRoot(), HttpModule],
  controllers: [AppController],
  providers: [AppService, CronPendingBokeragesService],
})
export class AppModule {}
