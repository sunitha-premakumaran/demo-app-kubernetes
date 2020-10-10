import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Todo {

    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column('varchar')
    title: string;

    @Column('simple-array')
    list: string[];
}
