"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const ExtraSection = () => {
  return (
    <Parallax pages={2}>

      {/* ===== PAGE 1 ===== */}
      <ParallaxLayer offset={0} speed={0.5}>
        <div className="p-10">
          <h2 className="text-2xl font-bold mb-5">
            Qurbani Tips
          </h2>

          <ol className="list-decimal space-y-4 pl-5 text-gray-700">
            <li>
              <strong>Check Animal Health</strong>
              <p>
                Make sure the animal is healthy, active, and free from disease.
              </p>
            </li>

            <li>
              <strong>Verify Age & Weight</strong>
              <p>
                Confirm proper age and weight. Weak animals are not suitable.
              </p>
            </li>

            <li>
              <strong>Look for Active Behavior</strong>
              <p>
                Choose active animals that eat properly.
              </p>
            </li>
          </ol>
        </div>
      </ParallaxLayer>

      {/* ===== PAGE 2 ===== */}
      <ParallaxLayer offset={1} speed={0.5}>
        <div className="p-10">
          <h2 className="text-2xl font-bold mb-5">
            Top Breeds
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Deshi Shahi Cow</li>
            <li>Red Chittagong Cow</li>
            <li>Holstein Friesian Cow</li>
            <li>Black Bengal Goat</li>
          </ul>
        </div>
      </ParallaxLayer>

    </Parallax>
  );
};

export default ExtraSection;