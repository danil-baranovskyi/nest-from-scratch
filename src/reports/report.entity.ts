import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../users/users.entity';

@Entity()
export class Report {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  price: number;

  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  year: number;

  @Column()
  lng: number;

  @Column()
  lat: number;

  @Column()
  mileage: number;

  @ManyToOne(() => User, (user) => user.reports)
  user: User;
}
