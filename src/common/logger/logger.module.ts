import { Module } from '@nestjs/common';
import { ApplicationLogger } from './logger.service';

@Module({
  providers: [ApplicationLogger],
  exports: [ApplicationLogger],
})
export class LoggerModule {}
