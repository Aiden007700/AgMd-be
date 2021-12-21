import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Procedure {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    type: string;

    @Column()
    typeAlt: string;
}
