import React from "react";

const ExtraSection = () => {
  return (
    <div>
      <ol className="list-decimal space-y-4 pl-5 text-gray-700">
        <h2 className="text-xl font-bold mb-3">Qurbani Tips </h2>
        <li className="animate__animated animate__rubberBand">
          <strong className="animate__animated animate__fadeInDown">Check Animal Health</strong>
          <p className="animate__animated animate__fadeInDown">
            Make sure the animal is healthy, active, and free from any disease.
            Check eyes, nose, and overall body condition.
          </p>
        </li>

        <li>
          <strong className="animate__animated animate__fadeInDown">Verify Age & Weight</strong>
          <p  className="animate__animated animate__fadeInDown" >
            Confirm the proper age and weight of the animal. Very young or weak
            animals are not suitable for Qurbani.
          </p>
        </li>

        <li>
          <strong className="animate__animated animate__fadeInDown">Look for Active Behavior</strong>
          <p className="animate__animated animate__fadeInDown">
            Choose animals that are active and eat properly. Avoid lazy or
            weak-looking animals.
          </p>
        </li>
      </ol>
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-3">Top Breeds</h2>

        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Deshi Shahi Cow</li>
          <li>Red Chittagong Cow</li>
          <li>Holstein Friesian Cow</li>
          <li>Black Bengal Goat</li>
        </ul>
      </div>
    </div>
  );
};

export default ExtraSection;
