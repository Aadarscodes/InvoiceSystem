import React, { useState } from "react";

const BillingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    items: [{ description: "", quantity: 1, price: 0 }],
    paymentMethod: "credit-card",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...formData.items];
    updatedItems[index][field] = value;
    setFormData({ ...formData, items: updatedItems });
  };

  const addItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { description: "", quantity: 1, price: 0 }],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Billing System</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Details */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Personal Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
            />
          </div>
        </div>

        {/* Billing Address */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Billing Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
            />
            <input
              type="text"
              name="zip"
              placeholder="ZIP Code"
              value={formData.zip}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
            />
          </div>
        </div>

        {/* Item Details */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Item Details</h2>
          {formData.items.map((item, index) => (
            <div key={index} className="grid grid-cols-3 gap-4 mb-2">
              <input
                type="text"
                placeholder="Description"
                value={item.description}
                onChange={(e) =>
                  handleItemChange(index, "description", e.target.value)
                }
                className="p-3 border border-gray-300 rounded-md w-full"
              />
              <input
                type="number"
                placeholder="Quantity"
                value={item.quantity}
                onChange={(e) =>
                  handleItemChange(index, "quantity", e.target.value)
                }
                className="p-3 border border-gray-300 rounded-md w-full"
              />
              <input
                type="number"
                placeholder="Price"
                value={item.price}
                onChange={(e) =>
                  handleItemChange(index, "price", e.target.value)
                }
                className="p-3 border border-gray-300 rounded-md w-full"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addItem}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Add Item
          </button>
        </div>

        {/* Payment Method */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Payment Method</h2>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="paymentMethod"
                value="credit-card"
                checked={formData.paymentMethod === "credit-card"}
                onChange={handleChange}
                className="form-radio"
              />
              <span>Credit Card</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={formData.paymentMethod === "paypal"}
                onChange={handleChange}
                className="form-radio"
              />
              <span>PayPal</span>
            </label>
          </div>
        </div>

        {/* Submit and Print Buttons */}
        <div className="flex justify-between">
          <button
            type="submit"
            className="py-3 px-6 bg-green-500 text-white rounded-md font-semibold"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handlePrint}
            className="py-3 px-6 bg-gray-500 text-white rounded-md font-semibold"
          >
            Print Bill
          </button>
        </div>
      </form>
    </div>
  );
};

export default BillingForm;


