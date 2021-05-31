import {
  EncounterCondition,
  EncounterConditionValue,
  EncounterMethod,
  NamedAPIResourceList,
} from '../models';
import { EncounterClient } from '../clients';
import { EncounterMethods, EncounterConditions, EncounterConditionValues } from '../constants';

describe('Test Encounter Client', () => {
  let client: EncounterClient;
  beforeAll(() => {
    client = new EncounterClient();
  });

  // Encounter Method
  it('Check if it returns an encounter method passig a name', async () => {
    const data = await client
      .getEncounterMethodByName('walk')
      .then((response: EncounterMethod) => response);

    expect(data.id).toBe(EncounterMethods.WALK);
  });
  it('Check if it returns an encounter method passig an id', async () => {
    const data = await client
      .getEncounterMethodById(EncounterMethods.WALK)
      .then((response: EncounterMethod) => response);

    expect(data.name).toBe('walk');
  });
  it('Check if it returns a list of encounter methods', async () => {
    const data = await client
      .listEncounterMethods()
      .then((response: NamedAPIResourceList) => response);

    expect(data.results.length).toBeGreaterThan(0);
  });
  // Encounter Condition
  it('Check if it returns an encounter condition passig a name', async () => {
    const data = await client
      .getEncounterConditionByName('swarm')
      .then((response: EncounterCondition) => response);

    expect(data.id).toBe(EncounterConditions.SWARM);
  });
  it('Check if it returns an encounter condition passig an id', async () => {
    const data = await client
      .getEncounterConditionById(EncounterConditions.SWARM)
      .then((response: EncounterCondition) => response);

    expect(data.name).toBe('swarm');
  });
  it('Check if it returns a list of encounter conditions', async () => {
    const data = await client
      .listEncounterConditions()
      .then((response: NamedAPIResourceList) => response);

    expect(data.results.length).toBeGreaterThan(0);
  });
  // Encounter Condition Values
  it('Check if it returns an encounter condition values passig a name', async () => {
    const data = await client
      .getEncounterConditionValueByName('swarm-yes')
      .then((response: EncounterConditionValue) => response);

    expect(data.id).toBe(EncounterConditionValues.SWARM_YES);
  });
  it('Check if it returns an encounter condition values passig an id', async () => {
    const data = await client
      .getEncounterConditionValueById(EncounterConditionValues.SWARM_YES)
      .then((response: EncounterConditionValue) => response);

    expect(data.name).toBe('swarm-yes');
  });
  it('Check if it returns a list of encounter condition values', async () => {
    const data = await client
      .listEncounterConditionValues()
      .then((response: NamedAPIResourceList) => response);

    expect(data.results.length).toBeGreaterThan(0);
  });
});