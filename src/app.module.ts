import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DecisionTreeModule } from './decision-tree/decision-tree.module';

@Module({
  imports: [DecisionTreeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
