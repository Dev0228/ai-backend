import {
  getLastDataService,
  getLastIncomeService,
  getNormalDataService,
  getCodersTypeService,
  getNewEmployesService,
  getSolidProductsService,
} from "../dashboardService";

describe("dashboardService", () => {
  it("should return last data", () => {
    const data = getLastDataService();
    expect(data).toBeDefined();
  });

  it("should return last income data with required fields", () => {
    const data = getLastIncomeService();
    expect(data).toHaveProperty("lastIncomeData");
    expect(data).toHaveProperty("increaseIncomeRate");
    expect(data).toHaveProperty("increaseIncomeValue");
  });

  it("should return normal data with required fields", () => {
    const data = getNormalDataService();
    expect(data).toHaveProperty("normalData");
    expect(data).toHaveProperty("increaseNormalRate");
  });

  it("should return coders type data", () => {
    const data = getCodersTypeService();
    expect(data).toBeDefined();
  });

  it("should return new employees data", () => {
    const data = getNewEmployesService();
    expect(data).toBeDefined();
  });

  it("should return solid products data with required fields", () => {
    const data = getSolidProductsService();
    expect(data).toHaveProperty("solidProductsData1");
    expect(data).toHaveProperty("solidProductsData2");
    expect(data).toHaveProperty("increaseSolidRate");
  });
});
