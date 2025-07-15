import { Request, Response } from "express";
import {
  getLastDataService,
  getLastIncomeService,
  getNormalDataService,
  getCodersTypeService,
  getNewEmployesService,
  getSolidProductsService,
} from "../services/dashboardService";

export const getLastData = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    data: getLastDataService(),
    message: "Last data retrieved successfully",
  });
};

export const getLastIncome = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    data: getLastIncomeService(),
    message: "Last income data retrieved successfully",
  });
};

export const getNormalData = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    data: getNormalDataService(),
    message: "Normal data retrieved successfully",
  });
};

export const getCodersType = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    data: getCodersTypeService(),
    message: "Coders type data retrieved successfully",
  });
};

export const getNewEmployes = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    data: getNewEmployesService(),
    message: "New employees data retrieved successfully",
  });
};

export const getSolidProducts = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    data: getSolidProductsService(),
    message: "Solid products data retrieved successfully",
  });
};
