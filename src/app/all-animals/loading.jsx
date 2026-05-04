import React from "react";

const Loading = () => {
  return (
      <div className="max-w-6xl mx-auto px-4 py-10 animate-pulse">
      
      <div className="bg-gray-200 h-[300px] md:h-[400px] rounded-xl mb-6"></div>

      <div className="space-y-4">
        <div className="h-6 bg-gray-200 w-1/2 rounded"></div>
        <div className="h-4 bg-gray-200 w-full rounded"></div>
        <div className="h-4 bg-gray-200 w-5/6 rounded"></div>

        <div className="flex gap-2 mt-4">
          <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
          <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
          <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
        </div>

        <div className="h-6 bg-gray-200 w-1/3 rounded mt-4"></div>
        <div className="h-10 bg-gray-200 w-full rounded mt-6"></div>
      </div>
    </div>

  );
};

export default Loading;
