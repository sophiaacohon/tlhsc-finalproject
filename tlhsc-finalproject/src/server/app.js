
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tlhsc_db'
});

db.connect((err) => {
  if (err) {
    console.log('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log("Received login attempt:", username, password);

  const sql = 'SELECT * FROM employee WHERE emp_username = ?';

  db.query(sql, [username], (error, result) => {
    if (error) {
      console.log(error);
      return res.status(401).json({ message: "Invalid Username" });
    }

    if (result && result.length > 0) {
      const user = result[0];

      console.log("User from database:", user);
      if ('emp_password' in user) {
        if (user.emp_password.trim() === password.trim()) {
          return res.json({ user });
        } else {
          return res.status(401).json({ message: "Wrong Password" });
        }
      } else {
        return res.status(401).json({ message: "No Password Found" });
      }
    } else {
      return res.status(401).json({ message: "Invalid Username" });
    }
  });
});

app.get('/dashboard-data', async (req, res) => {
  try {

    const deliveryStatusQuery = `
      SELECT
        (SELECT COUNT(*) as count FROM delivery WHERE delivery_status = 'UNPACKED') as unpacked,
        (SELECT COUNT(*) as count FROM delivery WHERE delivery_status = 'PACKED') as packed,
        (SELECT COUNT(*) as count FROM delivery WHERE delivery_status = 'SHIPPED') as shipped,
        (SELECT COUNT(*) as count FROM delivery WHERE delivery_status = 'DELIVERED') as delivered,
        (SELECT COUNT(*) as count FROM delivery WHERE delivery_status = 'CANCELLED') as cancelled
    `;

    const soldProductsQuery = 'SELECT COUNT(*) as count FROM product WHERE product_status = "sold"';

    const [deliveryStatusResults, soldProductsResults] = await Promise.all([
      db.promise().query(deliveryStatusQuery),
      db.promise().query(soldProductsQuery),
    ]);

    const dashboardData = {
      deliveries: {
        unpacked: deliveryStatusResults[0][0].unpacked,
        packed: deliveryStatusResults[0][0].packed,
        shipped: deliveryStatusResults[0][0].shipped,
        delivered: deliveryStatusResults[0][0].delivered,
        cancelled: deliveryStatusResults[0][0].cancelled,
      },
      soldProducts: soldProductsResults[0][0].count,
    };

    const branchCountsQuery = `
      SELECT
        branch_id,
        (SELECT COUNT(*) as count FROM delivery WHERE branch_id = b.branch_id AND delivery_status = 'UNPACKED') as unpacked,
        (SELECT COUNT(*) as count FROM delivery WHERE branch_id = b.branch_id AND delivery_status = 'PACKED') as packed,
        (SELECT COUNT(*) as count FROM delivery WHERE branch_id = b.branch_id AND delivery_status = 'SHIPPED') as shipped,
        (SELECT COUNT(*) as count FROM delivery WHERE branch_id = b.branch_id AND delivery_status = 'DELIVERED') as delivered,
        (SELECT COUNT(*) as count FROM delivery WHERE branch_id = b.branch_id AND delivery_status = 'CANCELLED') as cancelled
      FROM branch b;
    `;

    const branchCountsResults = await db.promise().query(branchCountsQuery);
    const branchCounts = {};

    branchCountsResults[0].forEach((branch) => {
      branchCounts[`BRANCH_${branch.branch_id}`] = {
        unpacked: branch.unpacked,
        packed: branch.packed,
        shipped: branch.shipped,
        delivered: branch.delivered,
        cancelled: branch.cancelled,
      };
    });

    dashboardData.branchCounts = branchCounts;

    res.json(dashboardData);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/transaction-data', async (req, res) => {
  try {
    const transactionDataQuery = `
      SELECT
        receipt_no as no,
        receipt_date_time as datetime,
        receipt_total_amount as total,
        payment_type as payment,
        receipt_status as payment_status,
        need_delivery as needdelivery
      FROM receipt;
    `;

    const [transactionDataResults] = await db.promise().query(transactionDataQuery);

    const transactionData = transactionDataResults.map((row) => ({
      no: row.no,
      datetime: row.datetime,
      total: row.total,
      payment: row.payment,
      payment_status: row.payment_status,
      needdelivery: row.needdelivery,
    }));

    res.json({ row: transactionData });
  } catch (error) {
    console.error('Error fetching transaction data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/inventory-data', async (req, res) => {
  try {
    const inventoryQuery = 'SELECT product_name, product_description, product_qty_stock, product_price, product_status FROM product';

    const [inventoryResults] = await db.promise().query(inventoryQuery);

    const inventoryData = {
      row: inventoryResults,
    };

    res.json(inventoryData);
  } catch (error) {
    console.error('Error fetching inventory data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/employee-data', (req, res) => {
  const query = 'SELECT * FROM employee';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching employee data:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ row: results });
    }
  });
});

app.post('/add-employee', async (req, res) => {
  try {
    const {
      emp_fname,
      emp_mname,
      emp_lname,
      emp_username,
      emp_password,
      branch_id,
      emp_type,
    } = req.body;

    const addEmployeeQuery = `
      INSERT INTO employee
      (emp_fname, emp_mname, emp_lname, emp_username, emp_password, branch_id, emp_type)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      emp_fname,
      emp_mname,
      emp_lname,
      emp_username,
      hashedPassword,
      branch_id,
      emp_type,
    ];

    db.query(addEmployeeQuery, values, (error, results) => {
      if (error) {
        console.error('Error adding employee:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        console.log('Employee added successfully');
        res.json({ success: true });
      }
    });
  } catch (error) {
    console.error('Error adding employee:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/employee/:id', (req, res) => {
  const employeeId = req.params.id;
  const query = 'DELETE FROM employee WHERE emp_id = ?';

  db.query(query, [employeeId], (err, results) => {
    if (err) {
      console.error('Error deleting employee:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ message: 'Employee deleted successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});