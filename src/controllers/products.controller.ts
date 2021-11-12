import { Request, Response } from 'express';
import {
  createNewProduct,
  deleteProductByID,
  getAllProducts,
  getProductByID,
  updateProductByID,
} from '../models/products.model';

export const getProducts = (req: Request, res: Response) => {
  getAllProducts((err, resQuery) => {
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

export const getProduct = (req: Request, res: Response) => {
  const { params } = req;
  const { productCode } = params;

  getProductByID(productCode, (err, resQuery) => {
    if (err) {
      res.status(500).send({
        success: false,
        message: 'unsuccessful request',
      });
    } else {
      res.status(200).send({
        success: true,
        product: resQuery,
      });
    }
  });
};

export const deleteProduct = (req: Request, res: Response) => {
  const { params } = req;
  const { productCode } = params;

  deleteProductByID(productCode, (err) => {
    if (err) {
      res
        .status(500)
        .send({ success: false, message: 'unsuccessful deletion' });
    } else {
      res.status(200).send({
        success: true,
        message: 'successful product deletion',
      });
    }
  });
};

export const updateProduct = (req: Request, res: Response) => {
  const { body, params } = req;
  const { productCode } = params;

  const modifiedVals: string[] = [];
  for (const property in body) {
    modifiedVals.push(`${property} = '${body[property]}'`);
  }
  const set = modifiedVals.join(', ');

  updateProductByID(productCode, set, (err) => {
    if (err) {
      res
        .status(500)
        .send({ success: false, message: 'unsuccessful modification' });
    } else {
      res.status(200).send({
        success: true,
        message: 'successful product modification',
      });
    }
  });
};

export const createProduct = (req: Request, res: Response) => {
  const { body } = req;
  const {
    productCode,
    productName,
    productLine,
    productScale,
    productVendor,
    productDescription,
    quantityInStock,
    buyPrice,
    MSRP,
  } = body;

  createNewProduct(
    productCode,
    productName,
    productLine,
    productScale,
    productVendor,
    productDescription,
    quantityInStock,
    buyPrice,
    MSRP,
    (err) => {
      if (err) {
        res
          .status(500)
          .send({ success: false, message: 'unsuccessful product creation' });
      } else {
        res.status(200).send({
          success: true,
          message: 'product successfully created',
        });
      }
    }
  );
};
