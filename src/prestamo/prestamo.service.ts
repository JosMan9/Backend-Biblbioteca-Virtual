import { Injectable, NotFoundException } from '@nestjs/common';
import { PrestamoEntity } from './prestamo.entity';
import { PrestamoPres } from './pres/prestamo.pres';
import { InjectRepository } from '@nestjs/typeorm';
import { PrestamoRepository } from './prestamo.repository';

@Injectable()
export class PrestamoService {
    constructor(
        @InjectRepository(PrestamoEntity) private prestamoRepository: PrestamoRepository
    ) {
    }

    async getAll(): Promise<PrestamoEntity[]> {
        const list = await this.prestamoRepository.find();
        if (!list.length) {
            throw new NotFoundException({message: "la lista se encuentra vacía"})
        }
        return list;
    }

    async findById(id: number):Promise<PrestamoEntity> {
        const libro = await this.prestamoRepository.findOne({where: { id }});
        if (!libro) {
            throw new NotFoundException({message: "No se encuentra el usuario"})
        }

        return libro;

    }
/*
    async findByNombre(telefono: string): Promise<PrestamoEntity> {
        const usr = await this.prestamoRepository.findOne({where: { telefono }});
        return usr;
    }*/

    async create(pres: PrestamoPres): Promise<any> {
        const user = this.prestamoRepository.create(pres);
        await this.prestamoRepository.save(user);
        return {message: `prestamo creado`};
    }

    async delete(id: number): Promise<any> {
        const pres = await this.findById(id);
        await this.prestamoRepository.delete(pres);
        return {message: "Prestamo eliminado"};
    }
}
