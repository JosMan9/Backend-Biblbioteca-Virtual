import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "usuarios"})
export class UsuarioEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column ({type: 'varchar',  length: 100, nullable: true, unique: true})
    nombre: string;

    @Column ({type: "varchar", length: 100, nullable: true})
    apellidos: string;

    @Column ({type: "varchar", length: 10, nullable: true})
    telefono: string;

    @Column ({type: "varchar", length: 50, nullable: true})
    correo: string;

    @Column ({type: "varchar", length: 50, nullable: true})
    contra: string;
}