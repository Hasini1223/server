import Product from "../models/Product.js";
import Customer from "../models/Customer.js";
import Supplier from "../models/Supplier.js";
import Sales from "../models/Sales.js";
import Category from "../models/Categories.js";
import SupplierPayment from "../models/SupplierPayment.js";
import NotAvailable from "../models/NotAvailable.js";
import Order from "../models/OnlineOrders.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCustomer = async (req, res) => {
  try {
    const customer = await Customer.find();
    res.status(200).json(customer);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.find();
    res.status(200).json(supplier);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getSales = async (req, res) => {
  try {
    const sales = await Sales.find();
    res.status(200).json(sales);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCategory = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getSupplierPayment = async (req, res) => {
  try {
    const supplierPayment = await SupplierPayment.find();
    res.status(200).json(supplierPayment);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getNotAvailabe = async (req, res) => {
  try {
    const notAvailable = await NotAvailable.find();
    res.status(200).json(notAvailable);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getOrder = async (req, res) => {
  try {
    const order = await Order.find();
    res.status(200).json(order);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};