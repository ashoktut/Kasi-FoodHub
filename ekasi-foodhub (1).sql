-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 22, 2020 at 07:22 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ekasi-foodhub`
--

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `order_id` int(11) NOT NULL,
  `name` varchar(55) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `qty` int(255) DEFAULT NULL,
  `totalAmt` double GENERATED ALWAYS AS (`price` * `qty`) VIRTUAL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`order_id`, `name`, `price`, `qty`) VALUES
(1, 'kota', 35, 2),
(2, 'russian roll', 12, 1),
(3, 'pap and marapo', 12, 1),
(4, 'chicken and pap', 25, 2),
(5, 'steak and pap', 35, 3),
(6, 'ntloko and pap', 35, 1),
(7, 'mogodu and samp', 30, 1),
(8, 'chicken salad', 15, 1);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `category_id` int(255) NOT NULL,
  `Breakfast` text NOT NULL,
  `lunch` varchar(255) NOT NULL,
  `dinner` varchar(255) NOT NULL,
  `dessert` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`category_id`, `Breakfast`, `lunch`, `dinner`, `dessert`) VALUES
(98, 'eggs and bacon', 'pap and vlies', 'greek salad ', 'cake');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `customer_ID` int(255) NOT NULL,
  `name` text NOT NULL,
  `surname` text NOT NULL,
  `address` text NOT NULL,
  `email_address` varchar(255) NOT NULL,
  `cell_no` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `cust_status` tinyint(1) NOT NULL DEFAULT 1,
  `images` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customer_ID`, `name`, `surname`, `address`, `email_address`, `cell_no`, `password`, `cust_status`, `images`) VALUES
(963852741, 'athandwa', 'zeni', '1490 Soshanguve', 'tutu2@yahoo.com', '072360360', 'idont9876', 1, ''),
(963852744, 'kabelo', 'malete', '124 maponto 7th Avennue', 'kabelo@gmail.com', '0213545874', '1212', 1, ''),
(963852746, 'Amanda', 'Manzi', '123 Soshangve BLOCK L', 'amandamanzi@gmail.com', '0781723456', '$2a$10$X3rDSMpc67xL.nxV9Pj3jeRdTJytjjbudMix7sJnZ8vcbPxwEIyWS', 1, ''),
(963852747, 'Lwazi', 'Nxontsa', '124 Soshangve BLOCK M', 'lwazinxontsa@gmail.com', '0782723456', '$2a$10$LVpvYsTJ0.QWWfdTDrt31.Mc.Vj54Ar1a7tN.kFfts5FBSvWzLVdi', 1, ''),
(963852748, 'Ashley', 'Abrahams', '125 Soshangve BLOCK KK', 'ashleyabrahams@gmail.com', '0762723456', '$2a$10$7DQU4Oap8XIuEcU6h6I2GOv3oVkRu5igFpa2zjLw7ohIUO2i2fQva', 1, '');

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `item_id` int(11) NOT NULL,
  `item_name` varchar(255) NOT NULL,
  `item_price` int(11) NOT NULL,
  `item_description` varchar(255) NOT NULL,
  `item_status` tinyint(1) NOT NULL DEFAULT 0,
  `restuarant_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`item_id`, `item_name`, `item_price`, `item_description`, `item_status`, `restuarant_id`) VALUES
(1, 'BBQ Beef', 53, 'beef', 1, 0),
(2, 'Beef&Wors', 45, 'Beef wors', 1, 0),
(3, 'wors', 60, 'beef wors', 0, 0),
(4, 'Full Chicken', 48, 'chicken', 0, 0),
(5, 'Chips', 23, 'potato fried chips', 0, 0),
(6, 'Kota 1', 33, 'Russians,Cheese,Eggs', 1, 0),
(7, 'kota 2', 19, 'Vienna,polony,Garlic', 0, 0),
(8, 'kota3', 21, 'Russian,Polony,Garlic', 0, 0),
(15, 'mphokoqo and amasi', 15, 'almost dry pap and inkomazi', 1, 173);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(255) NOT NULL,
  `customer_ID` int(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `qty` int(11) NOT NULL,
  `price` double NOT NULL,
  `totalAmount` double GENERATED ALWAYS AS (`price` * `qty`) VIRTUAL,
  `order_Status` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `customer_ID`, `name`, `qty`, `price`, `order_Status`) VALUES
(1, 1, 'kota', 2, 35, 1),
(2, 2, 'russian roll', 1, 12, 1),
(3, 3, 'pap and marapo', 1, 12, 0),
(4, 4, 'chicken and pap', 2, 25, 1),
(5, 5, 'steak and pap', 3, 35, 1),
(6, 6, 'ntloko and pap', 1, 35, 1),
(7, 7, 'mogodu and samp', 1, 30, 1),
(8, 8, 'chicken salad', 1, 15, 0);

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `payID` int(11) NOT NULL,
  `orderNo` int(255) NOT NULL,
  `payment_type` varchar(255) NOT NULL,
  `amount` double NOT NULL,
  `payment_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `restaurantmenu1`
--

CREATE TABLE `restaurantmenu1` (
  `item_id` int(200) NOT NULL,
  `num_items` int(11) NOT NULL DEFAULT 1,
  `item_name` varchar(200) NOT NULL,
  `item_description` varchar(200) NOT NULL,
  `price` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `restaurantmenu1`
--

INSERT INTO `restaurantmenu1` (`item_id`, `num_items`, `item_name`, `item_description`, `price`) VALUES
(1, 1, 'chips', 'fried potato chips', 22),
(2, 1, 'kota ', 'russian, cheese, eggs', 32),
(3, 1, 'kota', 'Vianna,Polony,Garlic', 18.99),
(4, 1, 'kota', 'Russian,Polony,Garlic', 20.99),
(5, 1, 'Kota', 'beef ', 18.99);

-- --------------------------------------------------------

--
-- Table structure for table `restaurantmenu_2`
--

CREATE TABLE `restaurantmenu_2` (
  `item_id` int(200) NOT NULL,
  `num_items` int(11) NOT NULL DEFAULT 1,
  `item_name` varchar(200) NOT NULL,
  `item_description` varchar(200) NOT NULL,
  `price` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `restaurantmenu_2`
--

INSERT INTO `restaurantmenu_2` (`item_id`, `num_items`, `item_name`, `item_description`, `price`) VALUES
(1, 1, 'skopo', 'cow head', 29.99),
(2, 1, 'Mogodu&Pap', 'insides with white porridge', 43.99),
(3, 1, 'Marapo', 'bones with little meat', 19.99),
(4, 1, 'Chicken and Pap', 'grilled chicken with white porridge', 28.99),
(5, 1, '2 wings', 'chicken wings', 15.99),
(6, 1, 'Motwana&Pap', 'chicken feet with white fluffy porridge', 19.99);

-- --------------------------------------------------------

--
-- Table structure for table `restaurantmenu_3`
--

CREATE TABLE `restaurantmenu_3` (
  `item_id` int(11) NOT NULL,
  `num_items` int(11) NOT NULL DEFAULT 1,
  `item_name` varchar(200) NOT NULL,
  `item_description` varchar(200) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `restaurantmenu_3`
--

INSERT INTO `restaurantmenu_3` (`item_id`, `num_items`, `item_name`, `item_description`, `price`) VALUES
(1, 1, 'BBQ Beef', 'BEEF meat', 52),
(2, 1, 'beef and wors', 'our combo beef special', 45),
(3, 1, 'wors', 'pure beef wors no pork', 60),
(4, 1, '1/4 ribs', 'pure pork ribs with beef sauce', 66);

-- --------------------------------------------------------

--
-- Table structure for table `restuarant_admin`
--

CREATE TABLE `restuarant_admin` (
  `restuarant_id` int(255) NOT NULL,
  `restuarant_name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email_address` varchar(255) NOT NULL,
  `rest_status` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `restuarant_admin`
--

INSERT INTO `restuarant_admin` (`restuarant_id`, `restuarant_name`, `address`, `password`, `email_address`, `rest_status`) VALUES
(13, 'foo', 'adrs', '1234', 'nyanguleo@yahoo.com', 1),
(173, 'food', 'addrs', '12345', 'email@add', 1),
(123456789, 'kentucky', 'shop 19 Soshanguve', 'admin123', 'rest@gmail.com', 1),
(963852741, 'chicken now', 'shop 3 soshanguve', 'admin1234', 'resst@yahoo.com\r\n', 1),
(963852742, 'mogodu', 'sosha south monate', '458', 'mgl@gmail.com', 1),
(963852743, 'foodie', 'address', '$2a$10$pbIQ9HUwCTGAdVtUpj6bI.5H34Rr.NISbDOb1H.MRBhgtOw1yjGI6', 'email@address', 1);

-- --------------------------------------------------------

--
-- Table structure for table `system_admin`
--

CREATE TABLE `system_admin` (
  `system_Id` int(11) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email_address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `system_admin`
--

INSERT INTO `system_admin` (`system_Id`, `password`, `email_address`) VALUES
(1, 'admin@123', 'admin123@yahoo.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customer_ID`);

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`item_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`payID`);

--
-- Indexes for table `restaurantmenu1`
--
ALTER TABLE `restaurantmenu1`
  ADD PRIMARY KEY (`item_id`);

--
-- Indexes for table `restaurantmenu_2`
--
ALTER TABLE `restaurantmenu_2`
  ADD PRIMARY KEY (`item_id`);

--
-- Indexes for table `restaurantmenu_3`
--
ALTER TABLE `restaurantmenu_3`
  ADD PRIMARY KEY (`item_id`);

--
-- Indexes for table `restuarant_admin`
--
ALTER TABLE `restuarant_admin`
  ADD PRIMARY KEY (`restuarant_id`);

--
-- Indexes for table `system_admin`
--
ALTER TABLE `system_admin`
  ADD PRIMARY KEY (`system_Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `customer_ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=963852749;

--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `payID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `restaurantmenu1`
--
ALTER TABLE `restaurantmenu1`
  MODIFY `item_id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `restuarant_admin`
--
ALTER TABLE `restuarant_admin`
  MODIFY `restuarant_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=963852744;

--
-- AUTO_INCREMENT for table `system_admin`
--
ALTER TABLE `system_admin`
  MODIFY `system_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=987654322;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
