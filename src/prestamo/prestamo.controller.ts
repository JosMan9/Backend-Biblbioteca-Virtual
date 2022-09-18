import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { PrestamoPres } from './pres/prestamo.pres';
import { PrestamoService } from './prestamo.service';

@Controller('prestamo')
export class PrestamoController {
    constructor (private readonly prestamoService: PrestamoService){}

    @Get()
    async getAll() {
        return this.prestamoService.getAll();
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        return this.prestamoService.findById(id);
    }

    @Post()
    async create(@Body() pres: PrestamoPres) {
        return await this.prestamoService.create(pres);
    }
}
