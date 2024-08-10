import dotenv from "dotenv";
import connectDB from "./config/database.js";

// mock data
import mockUserData from "./src/mock-data/usersMockData.js";
import mockProductData from "./src/mock-data/productsMockData.js";

// mongoose models
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";

dotenv.config();
connectDB();

// insert all data to database
const insertData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    const createUsers = await User.insertMany(mockUserData);

    const adminUser = createUsers[0]._id;

    const sampleProducts = mockProductData.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    console.log(`Data Inserted!`);
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

// delete all data from database
const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

// conditional execution
if (process.argv[2] === "-d") {
  destroyData();
} else {
  insertData();
}
