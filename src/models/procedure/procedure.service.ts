import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProcedureDto } from './dto/create-procedure.dto';
import { UpdateProcedureDto } from './dto/update-procedure.dto';
import { Procedure } from './entities/procedure.entity';

@Injectable()
export class ProcedureService {
  constructor(@InjectRepository(Procedure) private readonly procedureReposetory: Repository<Procedure>) {}

  async create(createProcedureDto: CreateProcedureDto) {
    const procedure = await this.procedureReposetory.create(createProcedureDto);
    return await this.procedureReposetory.save(procedure);
  }

  async findAllByType(typeAlt: "Complex" | "Simple") {
    return await this.procedureReposetory.find({ where: { typeAlt } });
  }

  findOne(id: number) {
    return `This action returns a #${id} procedure`;
  }

  update(id: number, updateProcedureDto: UpdateProcedureDto) {
    return `This action updates a #${id} procedure`;
  }

  remove(id: number) {
    return `This action removes a #${id} procedure`;
  }
}
