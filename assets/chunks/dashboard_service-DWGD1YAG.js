import { S as Service } from '../index-BB3wM8Bo.js';

async function getVaccinesData() {
  const data = await Service.getJson("eir/followup");
  return data;
}

export { getVaccinesData as g };
