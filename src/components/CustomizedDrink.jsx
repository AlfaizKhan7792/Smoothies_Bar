import React from 'react'

const CustomizedDrink = () => {
  return (
    <>
      <div data-aos="fade-up" className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Customize Your Drink</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
              <select className="w-full border rounded-md py-2 px-3">
                <option>Small (16 oz)</option>
                <option>Medium (20 oz)</option>
                <option>Large (24 oz)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sweetness Level</label>
              <select className="w-full border rounded-md py-2 px-3">
                <option>100% (Regular)</option>
                <option>75%</option>
                <option>50%</option>
                <option>25%</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm font-medium text-gray-700 mb-2">Add Boosters (+$1 each)</p>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Protein
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Chia Seeds
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Honey
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Almond Milk
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Collagen
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Vitamins
              </label>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Special Instructions</label>
            <textarea 
              className="w-full border rounded-md py-2 px-3" 
              rows="4"
              placeholder="Any special requests?"
            ></textarea>
          </div>
        </div> 
    </>
  )
}

export default CustomizedDrink
