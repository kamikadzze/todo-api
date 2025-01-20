import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Task } from './app.model';

@Controller('tasks')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  createTask(@Body() body: { title: string; description: string }): Promise<Task> {
    return this.appService.createTask(body.title, body.description);
  }

  @Get()
  getAllTasks(): Promise<Task[]> {
    return this.appService.getAllTasks();
  }

  @Get(':id')
  getTaskById(@Param('id') id: string): Promise<Task> {
    return this.appService.getTaskById(Number(id));
  }

  @Patch(':id')
  updateTask(
    @Param('id') id: string,
    @Body() body: { title?: string; description?: string; isCompleted?: boolean },
  ): Promise<Task> {
    return this.appService.updateTask(Number(id), body);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string): Promise<{ message: string }> {
    return this.appService.deleteTask(Number(id));
  }
}