import { Test, TestingModule } from '@nestjs/testing';
import { CronPendingBokeragesService } from './cron-pending-bokerages.service';

describe('CronPendingBokeragesService', () => {
  let service: CronPendingBokeragesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CronPendingBokeragesService],
    }).compile();

    service = module.get<CronPendingBokeragesService>(CronPendingBokeragesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
