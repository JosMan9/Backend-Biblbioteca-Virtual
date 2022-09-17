import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "libros"})
export class LibroEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column ({type: 'varchar',  length: 50, nullable: true, unique: true})
    titulo: string;

    @Column ({type: "varchar", length: 4, nullable: true})
    anio: string;

    @Column ({type: "varchar", length: 500, nullable: true})
    descripcion: string;

    @Column ({type: "varchar", length: 50, nullable: true})
    autor: string;

    @Column ({type: "varchar", length: 1000, nullable: true})
    img: string;


}