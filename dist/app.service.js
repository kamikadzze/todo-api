"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const app_model_1 = require("./app.model");
let AppService = class AppService {
    constructor(taskModel) {
        this.taskModel = taskModel;
    }
    async createTask(title, description) {
        return this.taskModel.create({ title, description });
    }
    async getAllTasks() {
        return this.taskModel.findAll();
    }
    async getTaskById(id) {
        const task = await this.taskModel.findByPk(id);
        if (!task) {
            throw new Error('Task not found');
        }
        return task;
    }
    async updateTask(id, updates) {
        const task = await this.getTaskById(id);
        return task.update(updates);
    }
    async deleteTask(id) {
        const task = await this.getTaskById(id);
        await task.destroy();
        return { message: 'Task deleted successfully' };
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(app_model_1.Task)),
    __metadata("design:paramtypes", [Object])
], AppService);
//# sourceMappingURL=app.service.js.map