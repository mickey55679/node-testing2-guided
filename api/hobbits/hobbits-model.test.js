const Hobbit = require("./hobbits-model");
const db = require("../../data/dbConfig");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  await db.seed.run();
});
test("environment is testing", () => {
  expect(process.env.NODE_ENV).toBe("testing");
});

describe("getAll", () => {
  test("resolves all the hobbits in the table", async () => {
    const result = await Hobbit.getAll();
    expect(result).toHaveLength(4);
    expect(result[0]).toMatchObject({ name: "sam" });
    expect(result[1]).toMatchObject({ name: "frodo" });
    expect(result[2]).toMatchObject({ name: "pippin" });
    expect(result[3]).toMatchObject({ name: "merry" });
  });
});
describe("getById", () => {
  test("resolves the hobbit by the given id", async () => {
    const result = await Hobbit.getById(1);
    expect(result).toMatchObject({name: 'sam'})
  });
});
