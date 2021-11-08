import { Request, Response } from 'express';
import { getAllCustomers } from '../models/customers.model';
import {
  getAllOrders,
  getOrderByID,
  getProductsByOrderID,
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
        orderData: resQuery,
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
        productsOrder: resQuery,
      });
    }
  });
};

// export const deleteCustomer = (req: Request, res: Response) => {
//   const { params } = req;
//   const { customerNumber } = params;

//   const id = parseInt(customerNumber);

//   deleteCustomerByID(id, (err) => {
//     if (err) {
//       res
//         .status(500)
//         .send({ success: false, message: 'unsuccessful deletion' });
//     } else {
//       res.status(200).send({
//         success: true,
//         message: 'successful customer deletion',
//       });
//     }
//   });
// };

// export const updateCustomer = (req: Request, res: Response) => {
//   const { body, params } = req;
//   const { customerNumber } = params;

//   const id = parseInt(customerNumber);

//   const modifiedVals: string[] = [];
//   for (const property in body) {
//     modifiedVals.push(`${property} = '${body[property]}'`);
//   }
//   const set = modifiedVals.join(', ');

//   updateCustomerByID(id, set, (err) => {
//     if (err) {
//       res
//         .status(500)
//         .send({ success: false, message: 'unsuccessful modification' });
//     } else {
//       res.status(200).send({
//         success: true,
//         message: 'successful customer modification',
//       });
//     }
//   });
// };

// export const createCustomer = (req: Request, res: Response) => {
//   const { body } = req;
//   const {
//     customerNumber,
//     customerName,
//     contactLastName,
//     contactFirstName,
//     phone,
//     addressLine1,
//     addressLine2,
//     city,
//     state,
//     postalCode,
//     country,
//     salesRepEmployeeNumber,
//     creditLimit,
//   } = body;

//   createNewCustomer(
//     customerNumber,
//     customerName,
//     contactLastName,
//     contactFirstName,
//     phone,
//     addressLine1,
//     addressLine2,
//     city,
//     state,
//     postalCode,
//     country,
//     salesRepEmployeeNumber,
//     creditLimit,
//     (err) => {
//       if (err) {
//         res
//           .status(500)
//           .send({ success: false, message: 'unsuccessful creation' });
//       } else {
//         res.status(200).send({
//           success: true,
//           message: 'customer successfully created',
//         });
//       }
//     }
//   );
// };
