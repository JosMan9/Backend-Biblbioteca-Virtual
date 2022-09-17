import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { get } from 'http';
import { LibroService } from './libro.service';
import { LibroLib } from './lib/libro.lib';

@Controller('libro')
export class LibroController {

    constructor (private readonly libroServicio: LibroService) {

    }

    @Get()
    async getAll() {
        return this.libroServicio.getAll();
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        return this.libroServicio.findById(id);
    }

    @Post()
    async create(@Body() lib: LibroLib) {
        return await this.libroServicio.create(lib);
    }
}
