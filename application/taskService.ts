import { TaskDomainServices } from "../domain/taskDomainServices";
import { ApplicationService } from "./Application-service";
const taskDomainServices = new TaskDomainServices();

interface TaskApplicationServiceI {
  createNewTask(newTask);
  deleteTask(taskID);
  getTask(payload);
  updateTask(payload);
}

export class TaskApplicationService implements TaskApplicationServiceI {
  async createNewTask(req) {
    // input validations
    if (!req.body.name) throw new Error(`request body doesn't contain name`);
    if (!req.body.userUUID)
      throw new Error(`request body doesn't contain userUUID`);

    const payload = ApplicationService.createPayloadForTask(req);
    return await taskDomainServices.createNewTask(payload);
  }

  async deleteTask(req) {
    // input validations
    if (!req.params.id) throw new Error(`request body doesn't contain task ID`);
    if (!req.body.userUUID)
      throw new Error(`request body doesn't contain userUUID`);

    const payload = ApplicationService.createPayloadForTask(req);
    return await taskDomainServices.deleteTask(payload);
  }

  async getTask(req) {
    // input validations
    if (!req.params.id) throw new Error(`request body doesn't contain task ID`);
    if (!req.body.userUUID)
      throw new Error(`request body doesn't contain userUUID`);

    const payload = ApplicationService.createPayloadForTask(req);
    return await taskDomainServices.getTask(payload);
  }

  async getAllTasks(req) {
    // input validations
    if (!req.params.page)
      throw new Error(`request body doesn't contain page info`);
    if (!req.body.userUUID)
      throw new Error(`request body doesn't contain userUUID`);

    const payload = ApplicationService.createPayloadForTask(req);
    return await taskDomainServices.getAllTasks(payload);
  }

  async updateTask(req) {
    // input validations
    if (!req.params.id) throw new Error(`request body doesn't contain task ID`);
    if (!req.body.userUUID)
      throw new Error(`request body doesn't contain userUUID`);

    const payload = ApplicationService.createPayloadForTask(req);
    return await taskDomainServices.updateTask(payload);
  }
}
