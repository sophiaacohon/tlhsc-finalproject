-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 04, 2023 at 10:10 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tlhsc_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `branch`
--

CREATE TABLE `branch` (
  `branch_id` varchar(6) NOT NULL,
  `location_id` varchar(6) NOT NULL,
  `branch_contact_no` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `branch`
--

INSERT INTO `branch` (`branch_id`, `location_id`, `branch_contact_no`) VALUES
('B001', 'L00001', '0321231234'),
('B002', 'L00002', '0324011300'),
('B003', 'L00003', '0323213219');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(31) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `category_name`) VALUES
(1, 'Home Decor'),
(2, 'Houseware'),
(3, 'Cleaning'),
(4, 'Automotive'),
(5, 'Lawn & Garden'),
(6, 'Electrical'),
(7, 'Plumbing'),
(8, 'Building Supplies'),
(9, 'Tools'),
(10, 'Paint');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `customer_id` int(11) NOT NULL,
  `customer_fname` varchar(31) NOT NULL,
  `customer_mname` varchar(31) DEFAULT NULL,
  `customer_lname` varchar(31) NOT NULL,
  `customer_contact_number` varchar(15) NOT NULL,
  `credit_card_number` varchar(16) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customer_id`, `customer_fname`, `customer_mname`, `customer_lname`, `customer_contact_number`, `credit_card_number`) VALUES
(1, 'Kathryn', 'Manuel', 'Bernardo', '09171230143', '1234567890123456'),
(2, 'Daniel', 'Ford', 'Padilla', '09170143692', '0987654321098765'),
(3, 'Billie', 'Eilish', 'Baird', '7143238934', '9324982349243239'),
(4, 'Joseph', 'Cecil', 'Marco', '09182347492', '3248123004821238'),
(5, 'Maria Amanda', 'Barrameda', 'Paraiso', '09082349135', ''),
(6, 'Elizabeth Marie', 'Barrameda', 'Paraiso', '09230458832', '3199349283023858'),
(7, 'Diana', 'Paraiso', 'Lamadrid', '09173249185', '9234932848129318'),
(8, 'Vladimir', 'Sebastian', 'Lamadrid', '09127491284', '9234121974381921'),
(9, 'Jonaf', '', 'Salvador', '09153540568', ''),
(10, 'Ambrosio', '', 'Abiog', '09446592358', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `delivery`
--

CREATE TABLE `delivery` (
  `delivery_receipt_no` int(11) NOT NULL,
  `receipt_no` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `location_id` varchar(6) NOT NULL,
  `contact_number` varchar(15) NOT NULL,
  `delivery_fee` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `delivery`
--

INSERT INTO `delivery` (`delivery_receipt_no`, `receipt_no`, `customer_id`, `location_id`, `contact_number`, `delivery_fee`) VALUES
(1, 1, 8, 'L00008', '09127491284', 200);

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `emp_id` varchar(6) NOT NULL,
  `branch_id` varchar(6) NOT NULL,
  `emp_username` varchar(15) NOT NULL,
  `emp_password` varchar(15) NOT NULL,
  `emp_type` enum('ADMIN','MANAGER','STAFF') NOT NULL,
  `emp_status` enum('ACTIVE','INACTIVE') NOT NULL,
  `emp_fname` varchar(31) NOT NULL,
  `emp_mname` varchar(31) NOT NULL,
  `emp_lname` varchar(31) NOT NULL,
  `emp_email` varchar(63) NOT NULL,
  `emp_contact_number` varchar(15) NOT NULL,
  `emp_date_of_birth` date NOT NULL,
  `emp_date_hired` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`emp_id`, `branch_id`, `emp_username`, `emp_password`, `emp_type`, `emp_status`, `emp_fname`, `emp_mname`, `emp_lname`, `emp_email`, `emp_contact_number`, `emp_date_of_birth`, `emp_date_hired`) VALUES
('A00001', 'B001', 'admin001', 'admin111', 'ADMIN', 'ACTIVE', 'Admin', 'The', 'First', 'admin01@tlhsc.com.ph', '+639111111111', '2001-01-01', '2023-01-16'),
('A00002', 'B002', 'admin002', 'admin222', 'ADMIN', 'ACTIVE', 'Admins', 'The', 'Second', 'admin02@tlhsc.com.ph', '+639212222222', '2002-09-12', '2023-08-30'),
('A00003', 'B003', 'admin003', 'admin333', 'ADMIN', 'ACTIVE', 'Adminss', 'The', 'Third', 'admin03@tlhsc.com.ph', '+639132336380', '2003-01-13', '2023-01-30'),
('M00001', 'B001', 'manager001', 'manager111', 'MANAGER', 'ACTIVE', 'Manager', 'The', 'First', 'manager01@tlhsc.com.ph', '+639211212121', '2001-01-15', '2023-01-17'),
('M00002', 'B002', 'manager002', 'manager222', 'MANAGER', 'ACTIVE', 'Managers', 'The', 'Second', 'manager02@tlhsc.com.ph', '+6392134213098', '2002-10-14', '2023-01-30'),
('M00003', 'B003', 'manager003', 'manager333', 'MANAGER', 'ACTIVE', 'Managerss', 'The', 'Third', 'manager03@tlhsc.com.ph', '+639330993692', '2002-04-10', '2023-01-31'),
('S00001', 'B001', 'staff001', 'staff111', 'STAFF', 'ACTIVE', 'Staff', 'The', 'First', 'staff01@tlhsc.com.ph', '+639131234567', '2001-01-17', '2023-01-30'),
('S00002', 'B002', 'staff002', 'staff222', 'STAFF', 'ACTIVE', 'Staffs', 'The', 'Second', 'staff02@tlhsc.com.ph', '+6392345678901', '2002-11-19', '2023-01-17'),
('S00007', 'B003', 'staff007', 'staff777', 'STAFF', 'ACTIVE', 'James', '', 'Bond', 'jamesbond007@tlhsc.com.ph', '+639007774352', '2007-07-07', '2023-09-07');

-- --------------------------------------------------------

--
-- Table structure for table `employee_log`
--

CREATE TABLE `employee_log` (
  `employee_log_no` int(11) NOT NULL,
  `emp_id` varchar(6) NOT NULL,
  `emp_time_in` datetime NOT NULL,
  `emp_time_out` datetime NOT NULL,
  `emp_hours_per_day` int(11) NOT NULL,
  `emp_attendance` enum('PRESENT','ABSENT') NOT NULL,
  `emp_salary` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employee_log`
--

INSERT INTO `employee_log` (`employee_log_no`, `emp_id`, `emp_time_in`, `emp_time_out`, `emp_hours_per_day`, `emp_attendance`, `emp_salary`) VALUES
(1, 'A00001', '2023-01-17 06:37:53', '2023-01-17 21:49:53', 15, 'PRESENT', 47),
(2, 'A00002', '2023-08-31 06:44:30', '2023-08-31 21:37:53', 14, 'PRESENT', 47),
(3, 'A00003', '2023-01-31 06:40:19', '2023-12-04 21:20:19', 14, 'PRESENT', 47),
(4, 'M00001', '2018-01-18 06:51:33', '2023-01-18 20:40:19', 13, 'PRESENT', 27),
(5, 'M00002', '2023-01-31 06:43:24', '2023-12-04 21:37:24', 14, 'PRESENT', 27),
(6, 'M00003', '2023-02-01 06:43:24', '2023-02-01 20:43:31', 14, 'PRESENT', 27),
(7, 'S00007', '2023-09-08 07:07:07', '2023-09-08 19:07:07', 12, 'PRESENT', 22),
(8, 'S00001', '2023-01-31 06:45:33', '2023-12-04 21:52:43', 15, 'PRESENT', 22),
(9, 'S00002', '2023-01-18 06:47:57', '2023-01-18 21:38:37', 14, 'PRESENT', 22);

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `location_id` varchar(6) NOT NULL,
  `loc_street` varchar(63) NOT NULL,
  `loc_barangay` varchar(63) NOT NULL,
  `loc_city` varchar(63) NOT NULL,
  `loc_province` varchar(63) NOT NULL,
  `loc_country` varchar(63) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`location_id`, `loc_street`, `loc_barangay`, `loc_city`, `loc_province`, `loc_country`) VALUES
('L00001', 'A. Minoza', 'Bacayan', 'Cebu City', 'Cebu', 'Philippines'),
('L00002', 'Gov. Cuenco Ave.', 'Talamban', 'Cebu City', 'Cebu', 'Philippines'),
('L00003', 'Juan Luna Ave.', 'Mabolo', 'Cebu City', 'Cebu', 'Philippines'),
('L00004', 'Woods St.', 'Luz', 'Cebu City', 'Cebu', 'Philippines'),
('L00005', 'Lava St.', 'Zapatera', 'Cebu City', 'Cebu', 'Philippines'),
('L00006', 'Lightning St.', 'Lorega San Miguel', 'Cebu City', 'Cebu', 'Philippines'),
('L00007', 'Colors St.', 'Lorega San Miguel', 'Cebu City', 'Cebu', 'Philippines'),
('L00008', 'Paradise St.', 'Lorega San Miguel', 'Cebu City', 'Cebu', 'Philippines');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` varchar(10) NOT NULL,
  `category_id` int(11) NOT NULL,
  `branch_id` varchar(6) NOT NULL,
  `product_name` varchar(63) NOT NULL,
  `product_description` varchar(128) NOT NULL,
  `product_qty_stock` int(11) NOT NULL,
  `product_price` int(11) NOT NULL,
  `product_status` enum('AVAILABLE','NOT AVAILABLE','OUT OF STOCK') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `category_id`, `branch_id`, `product_name`, `product_description`, `product_qty_stock`, `product_price`, `product_status`) VALUES
('P001C01B01', 1, 'B001', 'Anton Air Humidifier', 'Black air humidifier with free cleaner sample', 10, 9089, 'AVAILABLE'),
('P001C01B02', 1, 'B002', 'Anton Air Humidifier', 'Black air humidifier with free cleaner sample', 15, 9089, 'AVAILABLE'),
('P001C01B03', 1, 'B003', 'Anton Air Humidifier', 'Black air humidifier with free cleaner sample', 0, 9089, 'OUT OF STOCK'),
('P001C07B01', 7, 'B001', 'PVC Pipe', '8 inch, 50 cm', 25, 350, 'AVAILABLE'),
('P001C07B02', 7, 'B002', 'PVC Pipe', '8 inch, 50 cm', 0, 350, 'OUT OF STOCK'),
('P001C07B03', 7, 'B003', 'PVC Pipe', '8 inch, 50 cm', 5, 350, 'NOT AVAILABLE'),
('P001C08B03', 8, 'B003', '2x4 Lumber', '1 1/2 inch x 3 1/2 inch', 25, 700, 'AVAILABLE'),
('P001C09B01', 9, 'B001', 'Wooden Handle Claw Hammer', 'Kineer 16oz Hammer', 100, 95, 'AVAILABLE'),
('P001C09B02', 9, 'B002', 'Wooden Handle Claw Hammer', 'Kineer 16oz Hammer', 150, 95, 'AVAILABLE'),
('P001C09B03', 9, 'B002', 'Wooden Handle Claw Hammer', 'Kineer 16oz Hammer', 55, 95, 'AVAILABLE'),
('P002C01B01', 1, 'B001', 'Hidden Springs Reed Diffuser', 'Vanilla Diffuser', 20, 525, 'AVAILABLE'),
('P002C01B02', 1, 'B002', 'Hidden Springs Reed Diffuser', 'Vanilla Diffuser', 100, 525, 'AVAILABLE'),
('P002C01B03', 1, 'B003', 'Hidden Springs Reed Diffuser', 'Vanilla Diffuser', 5, 525, 'AVAILABLE'),
('P002C09B01', 9, 'B001', 'Combination Wrench Set 8pcs', '6mm, 7mm, 8mm, 9mm, 10mm, 11mm, 12mm, 13mm', 200, 300, 'AVAILABLE');

-- --------------------------------------------------------

--
-- Table structure for table `purchase`
--

CREATE TABLE `purchase` (
  `purchase_order_no` int(11) NOT NULL,
  `supplier_id` int(11) NOT NULL,
  `emp_id` varchar(6) NOT NULL,
  `item_qty` int(11) NOT NULL,
  `item_unit_price` int(11) NOT NULL,
  `item_description` varchar(128) NOT NULL,
  `purchase_order_total_amount` int(11) NOT NULL,
  `purchase_status` enum('PENDING','APPROVED','CANCELLED') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `purchase`
--

INSERT INTO `purchase` (`purchase_order_no`, `supplier_id`, `emp_id`, `item_qty`, `item_unit_price`, `item_description`, `purchase_order_total_amount`, `purchase_status`) VALUES
(1, 3, 'M00003', 100, 178, 'Light Switch', 17800, 'PENDING'),
(2, 1, 'M00003', 20, 600, '2x4 Lumber 1 1/2 inch x 3 1/2 inch', 12000, 'PENDING');

-- --------------------------------------------------------

--
-- Table structure for table `receipt`
--

CREATE TABLE `receipt` (
  `receipt_no` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `emp_id` varchar(6) NOT NULL,
  `branch_id` varchar(6) NOT NULL,
  `product_id` varchar(10) NOT NULL,
  `product_qty` int(11) NOT NULL,
  `receipt_total_amount` int(11) NOT NULL,
  `receipt_date_time` datetime NOT NULL,
  `receipt_status` enum('PAID','CANCELLED','REFUNDED') NOT NULL,
  `payment_type` enum('CASH','CREDIT CARD','ONLINE') NOT NULL,
  `need_delivery` enum('YES','NO') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `receipt`
--

INSERT INTO `receipt` (`receipt_no`, `customer_id`, `emp_id`, `branch_id`, `product_id`, `product_qty`, `receipt_total_amount`, `receipt_date_time`, `receipt_status`, `payment_type`, `need_delivery`) VALUES
(1, 8, 'S00007', 'B003', 'P001C08B03', 5, 3500, '2023-12-04 21:53:48', 'PAID', 'CREDIT CARD', 'YES'),
(2, 7, 'S00002', 'B002', 'P002C01B02', 3, 1575, '2023-12-04 22:07:58', 'PAID', 'CREDIT CARD', 'NO');

-- --------------------------------------------------------

--
-- Table structure for table `supplier`
--

CREATE TABLE `supplier` (
  `supplier_id` int(11) NOT NULL,
  `location_id` varchar(6) NOT NULL,
  `supplier_company` varchar(63) NOT NULL,
  `supplier_contact_number` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `supplier`
--

INSERT INTO `supplier` (`supplier_id`, `location_id`, `supplier_company`, `supplier_contact_number`) VALUES
(1, 'L00004', 'Timburr Lumber Supply', '0325320532'),
(2, 'L00005', 'Klefki Tools Supply', '0327076543'),
(3, 'L00006', 'Togedemaru Electronics Inc.', '0327777777'),
(4, 'L00007', 'Smeargle Paints Co.', '0322350555');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `branch`
--
ALTER TABLE `branch`
  ADD PRIMARY KEY (`branch_id`),
  ADD KEY `fk_branchloc` (`location_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `delivery`
--
ALTER TABLE `delivery`
  ADD PRIMARY KEY (`delivery_receipt_no`),
  ADD KEY `fk_delreceipt` (`receipt_no`),
  ADD KEY `fk_delcustomer` (`customer_id`),
  ADD KEY `fk_dellocation` (`location_id`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`emp_id`),
  ADD KEY `fk_empbranch` (`branch_id`);

--
-- Indexes for table `employee_log`
--
ALTER TABLE `employee_log`
  ADD PRIMARY KEY (`employee_log_no`),
  ADD KEY `fk_emplog` (`emp_id`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`location_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `fk_prodcategory` (`category_id`),
  ADD KEY `fk_prodbranch` (`branch_id`);

--
-- Indexes for table `purchase`
--
ALTER TABLE `purchase`
  ADD PRIMARY KEY (`purchase_order_no`),
  ADD KEY `fk_purchsupplier` (`supplier_id`),
  ADD KEY `fk_purchemp` (`emp_id`);

--
-- Indexes for table `receipt`
--
ALTER TABLE `receipt`
  ADD PRIMARY KEY (`receipt_no`),
  ADD KEY `fk_reccustomer` (`customer_id`),
  ADD KEY `fk_recemp` (`emp_id`),
  ADD KEY `fk_recbranch` (`branch_id`),
  ADD KEY `fk_recprod` (`product_id`);

--
-- Indexes for table `supplier`
--
ALTER TABLE `supplier`
  ADD PRIMARY KEY (`supplier_id`),
  ADD KEY `fk_supplierloc` (`location_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `delivery`
--
ALTER TABLE `delivery`
  MODIFY `delivery_receipt_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `employee_log`
--
ALTER TABLE `employee_log`
  MODIFY `employee_log_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `purchase`
--
ALTER TABLE `purchase`
  MODIFY `purchase_order_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `receipt`
--
ALTER TABLE `receipt`
  MODIFY `receipt_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `supplier`
--
ALTER TABLE `supplier`
  MODIFY `supplier_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `branch`
--
ALTER TABLE `branch`
  ADD CONSTRAINT `fk_branchloc` FOREIGN KEY (`location_id`) REFERENCES `location` (`location_id`);

--
-- Constraints for table `delivery`
--
ALTER TABLE `delivery`
  ADD CONSTRAINT `fk_delcustomer` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`),
  ADD CONSTRAINT `fk_dellocation` FOREIGN KEY (`location_id`) REFERENCES `location` (`location_id`),
  ADD CONSTRAINT `fk_delreceipt` FOREIGN KEY (`receipt_no`) REFERENCES `receipt` (`receipt_no`);

--
-- Constraints for table `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `fk_empbranch` FOREIGN KEY (`branch_id`) REFERENCES `branch` (`branch_id`);

--
-- Constraints for table `employee_log`
--
ALTER TABLE `employee_log`
  ADD CONSTRAINT `fk_emplog` FOREIGN KEY (`emp_id`) REFERENCES `employee` (`emp_id`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `fk_prodbranch` FOREIGN KEY (`branch_id`) REFERENCES `branch` (`branch_id`),
  ADD CONSTRAINT `fk_prodcategory` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`);

--
-- Constraints for table `purchase`
--
ALTER TABLE `purchase`
  ADD CONSTRAINT `fk_purchemp` FOREIGN KEY (`emp_id`) REFERENCES `employee` (`emp_id`),
  ADD CONSTRAINT `fk_purchsupplier` FOREIGN KEY (`supplier_id`) REFERENCES `supplier` (`supplier_id`);

--
-- Constraints for table `receipt`
--
ALTER TABLE `receipt`
  ADD CONSTRAINT `fk_recbranch` FOREIGN KEY (`branch_id`) REFERENCES `branch` (`branch_id`),
  ADD CONSTRAINT `fk_reccustomer` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`),
  ADD CONSTRAINT `fk_recemp` FOREIGN KEY (`emp_id`) REFERENCES `employee` (`emp_id`),
  ADD CONSTRAINT `fk_recprod` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);

--
-- Constraints for table `supplier`
--
ALTER TABLE `supplier`
  ADD CONSTRAINT `fk_supplierloc` FOREIGN KEY (`location_id`) REFERENCES `location` (`location_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
