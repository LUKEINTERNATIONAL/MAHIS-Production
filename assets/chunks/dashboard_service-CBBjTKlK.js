import { S as Service } from '../index-CJ7RFc79.js';

async function getVaccinesData() {
  const data = await Service.getJson("eir/followup");
  return data;
}

export { getVaccinesData as g };
