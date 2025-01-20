import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Task } from './app.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql', 
      host: 'localhost',
      port: 3306, 
      username: 'root', 
      password: '', 
      database: 'todo', 
      models: [Task], //моделі
      autoLoadModels: true, // Автоматичне завантаження моделей
      synchronize: true, // Синхронізація схем
    }),
    SequelizeModule.forFeature([Task]), // Реєстрація моделі Task
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
