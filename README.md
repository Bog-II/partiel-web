Endpoints:
1. 2.
--- GET /api/v1/customers
--- GET /api/v1/employees

--- 3. GET /api/v1/customers/:customerID
--- 4. GET /api/v1/employees/:employeeID
--- 5. POST /api/v1/customers
--- 6. PUT /api/v1/customers/:customerID
--- 7. DELETE /api/v1/customers/:customerID
--- 8. GET /api/v1/employees
9. GET /api/v1/employees?limit=2&sort=clients:desc
10. GET /api/v1/employees?limit=2&sort=client_payments:desc
--- 11. GET /api/v1/employees/:employeeID/clients
--- 12. 13. GET /api/v1/offices

--- 14. GET /api/v1/offices/:officeID/employees
15. GET /api/v1/customers/:customerID/orders?limit=1&sort=newest|oldest
--- 16. GET /api/v1/orders/:orderID/products
17. POST /api/v1/orders/:orderID/products
18. DELETE /api/v1/orders/:orderID/products/:productID
19. PUT /api/v1/orders/:orderID/products/:productID/
--- 20. GET /api/v1/productlines

21. GET /api/v1/payments?year="XXXX"

22. 23. 24GET /api/v1/payments?year=10&month=10&day=1
&from=UTCDAY&to=UTCDAY

--- 25. POST /api/v1/products/
--- 26. DELETE /api/v1/products/:productID
--- 27. PUT /api/v1/products/:productID

28. GET /api/v1/payments/ ????????????
29. GET /api/v1/payments/ ????????????
30. GET /api/v1/payments/ ????????????
31. GET /api/v1/payments/ ????????????
32. GET /api/v1/customers/ ????????????

--- 33. POST /api/v1/offices
--- 34. PUT /api/v1/offices/:officeID
--- 35. DELETE /api/v1/offices/:officeID
36. GET /api/v1/payments/ ????????????
