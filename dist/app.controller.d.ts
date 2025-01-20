import { AppService } from './app.service';
import { Task } from './app.model';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    createTask(body: {
        title: string;
        description: string;
    }): Promise<Task>;
    getAllTasks(): Promise<Task[]>;
    getTaskById(id: string): Promise<Task>;
    updateTask(id: string, body: {
        title?: string;
        description?: string;
        isCompleted?: boolean;
    }): Promise<Task>;
    deleteTask(id: string): Promise<{
        message: string;
    }>;
}
