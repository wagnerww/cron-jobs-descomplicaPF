import { Injectable, HttpService } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class CronPendingBokeragesService {
  constructor(private httpService: HttpService) {}

  @Cron(CronExpression.EVERY_10_SECONDS)
  runEvery5Seconds()  {
   console.log('Every 5 seconds');
   this.httpService.get<any>('https://api.github.com/users/wagnerww')
   .subscribe((vai) => {console.log('vai mundice', vai)});
  }


}
