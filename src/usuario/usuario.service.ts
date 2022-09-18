import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioRepository } from './usuario.repository';
import { UsuarioUsr } from './usr/usuario.usr';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(UsuarioEntity) private usuarioRepository: UsuarioRepository
    ) {
    }

    async getAll(): Promise<UsuarioEntity[]> {
        const list = await this.usuarioRepository.find();
        if (!list.length) {
            throw new NotFoundException({message: "la lista se encuentra vacía"})
        }
        return list;
    }

    async findById(id: number):Promise<UsuarioEntity> {
        const libro = await this.usuarioRepository.findOne({where: { id }});
        if (!libro) {
            throw new NotFoundException({message: "No se encuentra el usuario"})
        }

        return libro;

    }

    async findByNombre(telefono: string): Promise<UsuarioEntity> {
        const usr = await this.usuarioRepository.findOne({where: { telefono }});
        return usr;
    }

    async create(usr: UsuarioUsr): Promise<any> {
        const exists = await this.findByNombre(usr.telefono);
        if (exists) throw new BadRequestException({message: "Ya existe el usuario"});
        const user = this.usuarioRepository.create(usr);
        await this.usuarioRepository.save(user);
        return {message: `usuario ${usr.nombre} creado`};
    }

    async delete(id: number): Promise<any> {
        const user = await this.findById(id);
        await this.usuarioRepository.delete(user);
        return {message: "Usuario eliminado"};
    }
}
