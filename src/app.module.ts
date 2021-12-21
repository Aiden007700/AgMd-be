import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProcedureModule } from './models/procedure/procedure.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: './db.sqlite',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }), ProcedureModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
