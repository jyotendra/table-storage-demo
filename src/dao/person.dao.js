import person from "../db/models/person.model";
import { logger } from "../server";

export async function createPerson(model) {
  const newPerson = new person(model);
  await newPerson.save().catch(err => {
    logger.error(err);
  });
  return newPerson;
}
