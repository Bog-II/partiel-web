import { Request, Response } from 'express';
import { getAllCustomers } from '../models/customers.model';
import {
  addProductByOrderID,
  deleteProdctByOrderID,
  getAllOrders,
  getOrderByID,
  getProductsByOrderID,
  updateProductByOrderID,
} from '../models/orders.model';

export const getOrders = (req: Request, res: Response) => {
  getAllOrders((err, resQuery) => {
    if (err) {
      res.status(500).send({
        success: false,
        message: 'unsuccessful request',
      });
    } else {
      res.status(200).send({
        success: true,
        numberOfOrders: resQuery.length,
        orders: resQuery,
      });
    }
  });
};

export const getOrder = (req: Request, res: Response) => {
  const { params } = req;
  const { orderNumber } = params;

  const id = parseInt(orderNumber);

  getOrderByID(id, (err, resQuery) => {
    if (err) {
      res.status(500).send({
        success: false,
        message: 'unsuccessful request',
      });
    } else {
      res.status(200).send({
        success: true,
        data: resQuery,
      });
    }
  });
};

export const getProductsFromOrder = (req: Request, res: Response) => {
  const { params } = req;
  const { orderNumber } = params;

  const id = parseInt(orderNumber);

  getProductsByOrderID(id, (err, resQuery) => {
    if (err) {
      res.status(500).send({
        success: false,
        message: 'unsuccessful request',
      });
    } else {
      res.status(200).send({
        success: true,
        numberOfProducts: resQuery.length,
        products: resQuery,
      });
    }
  });
};

export const addProduct = (req: Request, res: Response) => {
  const { orderNumber } = req.params;
  const { body } = req;
  const { productCode, quantityOrdered, priceEach, orderLineNumber } = body;

  addProductByOrderID(
    orderNumber,
    productCode,
    quantityOrdered,
    priceEach,
    orderLineNumber,
    (err) => {
      if (err) {
        res
          .status(500)
          .send({ success: false, message: 'unsuccessful creation' });
      } else {
        res.status(200).send({
          success: true,
          message: 'product successfully added',
        });
      }
    }
  );
};

export const deleteProduct = (req: Request, res: Response) => {
  const { orderNumber, productCode } = req.params;

  deleteProdctByOrderID(orderNumber, productCode, (err) => {
    if (err) {
      res
        .status(500)
        .send({ success: false, message: 'unsuccessful creation' });
    } else {
      res.status(200).send({
        success: true,
        message: 'product successfully deleted',
      });
    }
  });
};

export const updateProduct = (req: Request, res: Response) => {
  const { orderNumber, productCode } = req.params;
  const { body } = req;

  const modifiedVals: string[] = [];
  for (const property in body) {
    modifiedVals.push(`${property} = '${body[property]}'`);
  }
  const set = modifiedVals.join(', ');
  
  updateProductByOrderID(orderNumber, productCode, set, (err) => {
    if (err) {
      res
        .status(500)
        .send({ success: false, message: 'unsuccessful request' });
    } else {
      res.status(200).send({
        success: true,
        message: 'product successfully updated',
      });
    }
  });
};
