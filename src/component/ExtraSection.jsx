import React from "react";

const ExtraSection = () => {
  return (
    <div className="max-w-5xl mx-auto my-12 px-4">

      <div className="bg-white shadow-lg rounded-2xl p-6 md:p-10 border border-gray-100">
        
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6 flex items-center gap-2">
           Qurbani Tips
        </h2>

        <ol className="space-y-6 list-decimal pl-5 text-gray-700">
          
          <li className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
            <strong className="text-lg text-gray-900">
              Check Animal Health
            </strong>
            <p className="mt-1 text-sm">
              Make sure the animal is healthy, active, and free from any disease.
              Check eyes, nose, and overall body condition.
            </p>
          </li>

          <li className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
            <strong className="text-lg text-gray-900">
              Verify Age & Weight
            </strong>
            <p className="mt-1 text-sm">
              Confirm the proper age and weight of the animal. Very young or weak
              animals are not suitable for Qurbani.
            </p>
          </li>

          <li className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
            <strong className="text-lg text-gray-900">
              Look for Active Behavior
            </strong>
            <p className="mt-1 text-sm">
              Choose animals that are active and eat properly. Avoid lazy or weak-looking animals.
            </p>
          </li>

        </ol>
      </div>

      <div className="mt-10 bg-gradient-to-r from-green-50 to-white shadow-lg rounded-2xl p-6 md:p-10 border">

        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">
           Top Breeds
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
          <div className="p-4 bg-white rounded-xl shadow hover:shadow-md transition">
             Deshi Shahi Cow
          </div>
          <div className="p-4 bg-white rounded-xl shadow hover:shadow-md transition">
             Red Chittagong Cow
          </div>
          <div className="p-4 bg-white rounded-xl shadow hover:shadow-md transition">
             Holstein Friesian Cow
          </div>
          <div className="p-4 bg-white rounded-xl shadow hover:shadow-md transition">
             Black Bengal Goat
          </div>
        </div>

      </div>
    </div>
  );
};

export default ExtraSection;