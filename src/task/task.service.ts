import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { TaskDocument, Task } from './Entities/task.entity';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private TaskModel: Model<TaskDocument>) {}

  async getTaskList(): Promise<Task[]> {
    return await this.TaskModel.find().exec();
  }

  async createNewTask(task: Task) {
    const newtask = new this.TaskModel(task);
    return newtask.save();
  }
}
