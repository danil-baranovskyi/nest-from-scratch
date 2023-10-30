import {Column, PrimaryGeneratedColumn} from "typeorm";

export class Report {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  @Column()
  @Column()
  @Column()
}
