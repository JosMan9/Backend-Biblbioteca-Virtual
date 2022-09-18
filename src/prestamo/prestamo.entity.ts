import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { UsuarioEntity } from '../usuario/usuario.entity';
import { LibroEntity } from '../libro/libro.entity';

@Entity({name: "prestamos"})
export class PrestamoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany( () => UsuarioEntity)
    @Column({type: "integer", nullable:true})
    idUsuario: number;

   @Column({type: "integer", nullable:true})
    @ManyToMany( () => LibroEntity)
    idLibro: number;
}