import React from 'react';

const CategorySelector = ({ onSelectCategory }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#000]">
      <div className="bg-[rgba(0,0,80,0.6)] p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Select a Quiz Category</h2>
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => onSelectCategory('javascript')}
            className="bg-green-800 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            JavaScript
          </button>
          <button
            onClick={() => onSelectCategory('python')}
            className="bg-[rgba(0,0,230,0.2)] text-white p-2 rounded hover:bg-blue-700 transition"
          >
            Python
          </button>
          <button
            onClick={() => onSelectCategory('typescript')}
            className="bg-blue-900 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            TypeScript
          </button>
          <button
            onClick={() => onSelectCategory('cplusplus')}
            className="bg-green-800 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            C++
          </button>
          <button
            onClick={() => onSelectCategory('java')}
            className="bg-red-700 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            Java
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategorySelector;
