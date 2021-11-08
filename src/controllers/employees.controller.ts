import { Request, Response } from 'express';
import {
  getAllEmployees,
  getClientsByEmployeeID,
  getEmployeeByID,
  getEmployeesWithMostPaymentsAndLimit,
  getMostAssignedEmployeesWithLimit,
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

export const getMostAssignedEmployees = (req: Request, res: Response) => {
  let { limit } = req.query;
  if (limit === undefined) {
    limit = '10';
  }
  if (/^\d+$/.test(String(limit))) {
    const limitInteger = parseInt(String(limit));
    getMostAssignedEmployeesWithLimit(limitInteger, (err, resQuery) => {
      if (err) {
        res.status(500).send({
          success: false,
          message: 'unsuccessful request',
        });
      } else {
        res.status(200).send({
          success: true,
          length: resQuery.length,
          data: resQuery,
        });
      }
    });
  } else {
    res.status(400).send({
      success: false,
      message: 'bad query parameter',
    });
  }
};

export const getEmployeesWithMostPayments = (req: Request, res: Response) => {
  let { limit } = req.query;
  if (limit === undefined) {
    limit = '10';
  }
  if (/^\d+$/.test(String(limit))) {
    const limitInteger = parseInt(String(limit));
    getEmployeesWithMostPaymentsAndLimit(limitInteger, (err, resQuery) => {
      if (err) {
        res.status(500).send({
          success: false,
          message: 'unsuccessful request',
        });
      } else {
        res.status(200).send({
          success: true,
          length: resQuery.length,
          data: resQuery,
        });
      }
    });
  } else {
    res.status(400).send({
      success: false,
      message: 'bad query parameter',
    });
  }
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
