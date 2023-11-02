import { Injectable } from "@nestjs/common";
import { PowerService } from "../power/power.service";

@Injectable()
export class DiskService {
  constructor(public powerService: PowerService) {
  }

  getData() {
    console.log('Drawing 20 watts of power from PowerService');

    return this.powerService.supplyPower(20);
  }
}
