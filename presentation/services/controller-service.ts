export class ControllerService {
  /**
   * creates two different payloads FOR TASKS based on req
   */
  static createPayload(req) {
    if (!req.params.id) {
      // create a payload for 'createNewTask'
      const payload = { name: req.body.name, uuid: req.body.userUUID }; // create payload
      return payload;
    } else {
      // create a payload for others
      const payload = { taskId: req.params.id, uuid: req.body.userUUID }; // create payload
      return payload;
    }
  }

  /**
   * handles response for task
   */
  static handleResponse(task, res) {
    // check if task FOUND ??
    if (!task) res.status(404).send({ msg: "something went wrong !!!" });
    else res.status(200).send({ msg: "task operation performed", task });
  }

  /**
   * creates two different payloads FOR USERS based on req
   */
  static createPayloadForUser(req) {
    if (!req.params.uuid) {
      // create a payload for 'createNewTask'
      const payload = {
        name: req.user.name.givenName,
        email: req.user.emails[0].value,
      };
      return payload;
      //
    } else {
      // create a payload for others
      const payload = { userUUID: req.params.uuid.toString() };
      return payload;
    }
  }

  /**
   * handles response for user
   */
  static handleResponseForUser(user, res) {
    // // check if USER FOUND ??
    if (!user) res.status(404).send({ msg: "user not found/created !!!" });
    else res.status(200).send({ msg: "user operation performed", user });
  }
}