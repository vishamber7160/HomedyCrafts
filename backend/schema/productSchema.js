import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema({
  product_id: { type: String, unique: true },
  seller_id: { type: mongoose.Schema.Types.ObjectId, ref: "Seller" }, // relation
  name: String,
  description: String,
  short_description: String,
  category: String,
  material: [String],
  price: Number,
  discount_price: Number,
  stock_quantity: Number,
  weight: Number,
  dimensions: {
    length: Number,
    width: Number,
    height: Number,
    unit: { type: String, default: "cm" }
  },
  images: [String],
  tags: [String],
  brand: String,
  rating: Number,
  reviews_count: Number,
  sku: String,
  barcode: String,
  status: { type: String, enum: ["active", "inactive"], default: "active" },
  date_added: Date,
  last_updated: Date,
  shipping_info: {
    free_shipping: Boolean,
    shipping_cost: Number,
    shipping_time: String
  },
  customizable: Boolean,
  featured: Boolean,
  related_products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }]
}, { timestamps: true });

export const Product = mongoose.model("Product", ProductSchema);
