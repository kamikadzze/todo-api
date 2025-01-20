import { Task } from './app.model';
export declare class AppService {
    private taskModel;
    constructor(taskModel: typeof Task);
    createTask(title: string, description: string): Promise<Task>;
    getAllTasks(): Promise<Task[]>;
    getTaskById(id: number): Promise<Task>;
    updateTask(id: number, updates: Partial<Task>): Promise<Task>;
    deleteTask(id: number): Promise<{
        message: string;
    }>;
}
