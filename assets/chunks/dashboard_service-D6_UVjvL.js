import { S as Service } from '../index-Ch2cLL0x.js';

async function getVaccinesData() {
  const data = await Service.getJson("eir/followup");
  return data;
}

export { getVaccinesData as g };
