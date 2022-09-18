import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UsuarioUsr } from './usr/usuario.usr';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
    constructor (private readonly usuarioService: UsuarioService) {
    }

    @Get()
    async getAll() {
        return this.usuarioService.getAll();
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        return this.usuarioService.findById(id);
    }

    @Post()
    async create(@Body() usr: UsuarioUsr) {
        return await this.usuarioService.create(usr);
    }
}
