import React from "react";

const Car = ({ brand, model, year, fuel, transmission, price }) => {
    console.log(brand);
    
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-xl p-5 shadow-md hover:shadow-xl transition duration-300">
      
      <h2 className="text-2xl font-bold text-gray-800">
        {brand} {model}
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        {year} • {fuel} • {transmission}
      </p>

      <div className="mt-4 space-y-2">
        <div className="flex justify-between text-gray-700">
          <span className="font-medium">Fuel Type</span>
          <span>{fuel}</span>
        </div>

        <div className="flex justify-between text-gray-700">
          <span className="font-medium">Transmission</span>
          <span>{transmission}</span>
        </div>

        <div className="flex justify-between text-gray-800 text-lg font-semibold pt-2 border-t">
          <span>Price</span>
          <span className="text-teal-600">₹{price}</span>
        </div>
      </div>

      <button className="w-full mt-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition">
        View Details
      </button>
    </div>
  );
};

export default Car;
