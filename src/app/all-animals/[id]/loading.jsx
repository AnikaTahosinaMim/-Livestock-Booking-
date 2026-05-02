import Lottie from "lottie-react";
import loadingAnim from "@/lottie/loading.json";

export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Lottie animationData={loadingAnim} loop={true} />
    </div>
  );
}
