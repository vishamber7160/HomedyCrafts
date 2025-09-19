# Prefrance Product Schema for product
## i prepeare for product detail
product_id: Unique identifier for the product (e.g., SKU, auto-generated ID).

name: The name of the product that customers will see.

description & short_description: Detailed and brief descriptions to entice users and improve SEO.

material: This allows you to list multiple materials that a product is made from (e.g., wood, metal, etc.).

category: Helps in grouping products (e.g., Furniture, Home Decor).

price & discount_price: Core product pricing info.

quantity_in_stock: Inventory tracking.

images: Multiple images for better product visualization.

tags: Keywords for search and filter purposes.

brand: Optionally, list the brand or manufacturer.

rating & reviews_count: Reviews and average ratings from customers.

shipping_info: Crucial info for customers (e.g., free shipping, shipping cost).

related_products: You can use this to show related products to the customer.

customizable: This is helpful for products that have variations (like size or color).

featured: Flag to mark products for promotional sections like homepage features.

materials_info

product_id	String	Unique identifier or SKU
name	String	Name shown to the customer
short_description	String	Shown on listing cards or previews
description	String	Full product details for SEO and buyer info
category	String	Helps in filtering/browsing
material	Array of Strings	High-level materials (e.g., ["Wood", "Metal"])
materials_info	Object	Detailed breakdown of specific material types
price	Float	Regular selling price
discount_price	Float	Optional discounted price
currency	String	ISO currency code (e.g., USD, INR)
quantity_in_stock	Integer	Track availability
images	Array of Strings	Image URLs
tags	Array of Strings	Keywords for search & filtering
brand	String	Optional brand or artisan name
rating	Float	Average customer rating
reviews_count	Integer	Number of total reviews
shipping_info	Object	Shipping cost, time, free shipping boolean
related_products	Array of Strings	Product IDs for upselling/cross-selling
customizable	Boolean	Indicates if user can customize product
featured	Boolean	Mark for homepage or special listing