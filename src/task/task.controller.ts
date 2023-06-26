import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './Entities/task.entity';

@Controller('/tasks')
export class TaskController {
  constructor(private readonly service: TaskService) {}

  @Get()
  async getTaskList(): Promise<Task[]> {
    const taskList = await this.service.getTaskList();
    return taskList;
  }

  @Post()
  async postNewTask(@Body() task: Task): Promise<any> {
    const result = await this.service.createNewTask(task);
    return result;
  }

  @Get(':id')
  getTaskById(): string {
    return 'task';
  }

  @Put(':id')
  updateTaskById(): string {
    return 'updated task';
  }

  @Delete(':id')
  deleteTaskById(): string {
    return 'updated task';
  }
}
