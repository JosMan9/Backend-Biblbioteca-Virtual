import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LibroLib } from './lib/libro.lib';
import { LibroEntity } from './libro.entity';
import { LibroRepository } from './libro.repository';

@Injectable()
export class LibroService {
    constructor(
        @InjectRepository(LibroEntity) private libroRepository: LibroRepository
    ) {
    }

    async getAll(): Promise<LibroEntity[]> {
        const list = await this.libroRepository.find();
        if (!list.length) {
            throw new NotFoundException({message: "la lista se encuentra vacía"})
        }
        return list;
    }

    async findById(id: number):Promise<LibroEntity> {
        const libro = await this.libroRepository.findOne({where: { id }});
        if (!libro) {
            throw new NotFoundException({message: "No se encuentra el libro"})
        }

        return libro;

    }

    async findByNombre(titulo: string): Promise<LibroEntity> {
        const libro = await this.libroRepository.findOne({where: { titulo }});
        return libro;
    }

    async create(lib: LibroLib): Promise<any> {
        const exists = await this.findByNombre(lib.titulo);
        if (exists) throw new BadRequestException({message: "Ya existe el libro"});
        const libro = this.libroRepository.create(lib);
        await this.libroRepository.save(libro);
        return {message: `libro ${libro.titulo} creado`};
    }

    async delete(id: number): Promise<any> {
        const libro = await this.findById(id);
        await this.libroRepository.delete(libro);
        return {message: "Libro eliminado"};
    }
}
