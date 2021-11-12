import express from 'express';
import { addProduct, deleteProduct, getOrder, getOrders, getProductsFromOrder, updateProduct } from '../controllers/orders.controller';

const router = express.Router();

// GET
router.get('/', getOrders);
/**
 * @swagger
 * /api/v1/orders/:
 *   get:
 *      description: Used to get all orders
 *      tags:
 *          - orders
 *      responses:
 *          '200':
 *              description: Successfull request
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get('/:orderNumber', getOrder);
/**
 * @swagger
 * /api/v1/orders/{orderNumber}:
 *   get:
 *      description: Used to get an order
 *      tags:
 *          - orders
 *      parameters:
 *          - in: path
 *            name: orderNumber
 *            type: integer
 *            required: true
 *      responses:
 *          '200':
 *              description: Successfull request
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get('/:orderNumber/products', getProductsFromOrder);
/**
 * @swagger
 * /api/v1/orders/{orderNumber}/products:
 *   get:
 *      description: Used to get products from an order
 *      tags:
 *          - orders
 *      parameters:
 *          - in: path
 *            name: orderNumber
 *            type: integer
 *            required: true
 *      responses:
 *          '200':
 *              description: Successfull request
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

// POST
router.post('/:orderNumber/products', addProduct);
/**
 * @swagger
 * /api/v1/orders/{orderNumber}/products:
 *   post:
 *      description: Used to create a new product in an order
 *      tags:
 *          - orders
 *      parameters:
 *          - in: path
 *            name: orderNumber
 *            type: integer
 *            required: true
 *      responses:
 *          '200':
 *              description: Successfull request
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

//PUT
router.put('/:orderNumber/products/:productCode', updateProduct);
/**
 * @swagger
 * /api/v1/orders/{orderNumber}/products/{productCode}:
 *   put:
 *      description: Used to update a product from an order
 *      tags:
 *          - orders
 *      parameters:
 *          - in: path
 *            name: orderNumber
 *            type: integer
 *            required: true
 *          - in: path
 *            name: productCode
 *            type: string
 *            required: true
 *      responses:
 *          '200':
 *              description: Successfull request
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

// DELETE
router.delete('/:orderNumber/products/:productCode', deleteProduct);
/**
 * @swagger
 * /api/v1/orders/{orderNumber}/products/{productCode}:
 *   delete:
 *      description: Used to delete a product from an order
 *      tags:
 *          - orders
 *      parameters:
 *          - in: path
 *            name: orderNumber
 *            type: integer
 *            required: true
 *          - in: path
 *            name: productCode
 *            type: string
 *            required: true
 *      responses:
 *          '200':
 *              description: Successfull request
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

export { router as ordersRouter };
