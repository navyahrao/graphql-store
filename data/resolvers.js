import { Store } from './dbConnectors';

const resolvers = {
  getProduct: async ({ id }) => {
    try {
      const product = await Store.findById(id);
      return product;
    } catch (err) {
      console.log(err);
    } 
  },
  createProduct: async ({ input }) => {
    const product = new Store({ ...input });
    product.id = product._id;
    try{
      await product.save();
      return product;
    } catch (err) {
      console.log(err);
    }
  },
  updateProduct: async ({ input }) => {
    try {
      const updateProduct = await Store.findOneAndUpdate({_id: input.id}, input, {new: true});
      return updateProduct;
    } catch (err) {
      console.log(err);
    }
  },
  deleteProduct: async ({ id }) => {
    try {
      await Store.deleteOne({ _id: id });
      return 'Deleted!!';
    } catch (err) {
      console.log(err);
    }
  },
  getAllProducts: async () => {
    try {
      const products = await Store.find();
      return products;
    } catch (err) {
      console.log(err);
    }
  }
};

export default resolvers;
// The resolvers.js file is where we define the functions that will be called when a query is made.