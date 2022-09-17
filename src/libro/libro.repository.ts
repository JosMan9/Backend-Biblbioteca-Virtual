import { EntityRepository, Repository } from 'typeorm';
import { LibroEntity } from './libro.entity';

@EntityRepository(LibroEntity)
export class LibroRepository extends Repository<LibroEntity>{}