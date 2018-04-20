import { createPerson } from "../dao/person.dao";
import { rConditioner } from "../utils/conditioner.util";

export async function addPerson(req, res) {
  const personModel = req.body;
  const newPerson = await createPerson(personModel);
  return rConditioner(res, newPerson, 200, "ok", "created new person", null);
}
