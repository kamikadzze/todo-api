import { Model } from 'sequelize-typescript';
export declare class Task extends Model<Task> {
    id: number;
    title: string;
    description: string;
    isCompleted: boolean;
}
