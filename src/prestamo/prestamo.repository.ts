import { EntityRepository, Repository } from 'typeorm';
import { PrestamoEntity } from './prestamo.entity';

@EntityRepository(PrestamoEntity)
export class PrestamoRepository extends Repository<PrestamoEntity>{}