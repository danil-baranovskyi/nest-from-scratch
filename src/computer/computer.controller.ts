import { Controller, Get } from "@nestjs/common";
import { CpuService } from "../cpu/cpu.service";
import { DiskService } from "../disk/disk.service";

@Controller("computer")
export class ComputerController {
  constructor(
    private cpuService: CpuService,
    private discService: DiskService
  ) {
  }

  @Get()
  run() {
    console.log('here');

    return [
      this.cpuService.compute(1, 2),
      this.discService.getData()
    ];
  }
}
