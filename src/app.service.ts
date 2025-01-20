import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from './app.model';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Task)
    private taskModel: typeof Task,
  ) {}

  async createTask(title: string, description: string): Promise<Task> {
    return this.taskModel.create({ title, description });
  }

  async getAllTasks(): Promise<Task[]> {
    return this.taskModel.findAll();
  }

  async getTaskById(id: number): Promise<Task> {
    const task = await this.taskModel.findByPk(id);
    if (!task) {
      throw new Error('Task not found');
    }
    return task;
  }

  async updateTask(id: number, updates: Partial<Task>): Promise<Task> {
    const task = await this.getTaskById(id);
    return task.update(updates);
  }

  async deleteTask(id: number): Promise<{ message: string }> {
    const task = await this.getTaskById(id);
    await task.destroy();
    return { message: 'Task deleted successfully' };
  }
}
