import { Request, Response } from 'express';
import {
  getAllEmployees,
  getClientsByEmployeeID,
  getEmployeeByID,
} from '../models/employees.model';

export const getEmployees = (req: Request, res: Response) => {
  getAllEmployees((err, resQuery) => {
    if (err) {
      res.status(500).send({
        success: false,
        message: 'unsuccessful request',
      });
    } else {
      res.status(200).send({
        success: true,
        numberOfEmployee: resQuery.length,
        employees: resQuery,
      });
    }
  });
};

export const getEmployee = (req: Request, res: Response) => {
  const { params } = req;
  const { employeeNumber } = params;

  const id = parseInt(employeeNumber);

  getEmployeeByID(id, (err, resQuery) => {
    if (err) {
      res.status(500).send({
        success: false,
        message: 'unsuccessful request',
      });
    } else {
      res.status(200).send({
        success: true,
        employeeData: resQuery,
      });
    }
  });
};

export const getClientFromEmployee = (req: Request, res: Response) => {
  const { params } = req;
  const { employeeNumber } = params;

  const id = parseInt(employeeNumber);

  getClientsByEmployeeID(id, (err, resQuery) => {
    if (err) {
      res.status(500).send({
        success: false,
        message: 'unsuccessful request',
      });
    } else {
      res.status(200).send({
        success: true,
        employeeClients: resQuery,
      });
    }
  });
};
