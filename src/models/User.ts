import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  age: number
}


export { User };
