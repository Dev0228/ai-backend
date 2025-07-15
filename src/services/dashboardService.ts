import {
  lastData,
  lastIncomeData,
  normalData,
  codersTypeData,
  newEmployesData,
  solidProductsData1,
  solidProductsData2,
  dashboardRates,
} from "../data/dashboardData";

export const getLastDataService = () => lastData;
export const getLastIncomeService = () => ({
  lastIncomeData,
  increaseIncomeRate: dashboardRates.increaseIncomeRate,
  increaseIncomeValue: dashboardRates.increaseIncomeValue,
});
export const getNormalDataService = () => ({
  normalData,
  increaseNormalRate: dashboardRates.increaseNormalRate,
});
export const getCodersTypeService = () => codersTypeData;
export const getNewEmployesService = () => newEmployesData;
export const getSolidProductsService = () => ({
  solidProductsData1,
  solidProductsData2,
  increaseSolidRate: dashboardRates.increaseSolidRate,
});
