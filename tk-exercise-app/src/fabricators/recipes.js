import { Fabricator } from '@travelperksl/fabricator';
import faker from 'faker';

export const recipe = Fabricator({
  id: faker.random.uuid,
  name: () => faker.lorem.word(),
  description: () => faker.lorem.sentence(),
  ingredients: () => faker.lorem.words()
});
