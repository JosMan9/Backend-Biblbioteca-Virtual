import { Module } from '@nestjs/common';
import { PrestamoController } from './prestamo.controller';
import { PrestamoService } from './prestamo.service';
import { PrestamoEntity } from './prestamo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PrestamoEntity])],
  controllers: [PrestamoController],
  providers: [PrestamoService]
})
export class PrestamoModule {}
