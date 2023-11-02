import { Module } from '@nestjs/common';
import { DiskService } from './disk.service';
import { PowerService } from "../power/power.service";
import { PowerModule } from "../power/power.module";

@Module({
  providers: [DiskService],
  imports: [PowerModule],
  exports: [DiskService]
})
export class DiskModule {}
