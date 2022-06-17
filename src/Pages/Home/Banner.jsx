import React from "react";
import banner from "../../Assets/img/PCPC.png";

const Banner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content grid grid-cols-1 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl lg:text-6xl font-bold text-blue-500">
            শিক্ষায়, চর্চায় ও সহযোগিতায়
          </h1>
          <p className="py-6 font-bold">
            পাশে আছি আমরা । প্রবেশ করো তোমার স্বপ্ন ছোঁয়ার কোর্সে
          </p>
        </div>
        <div>
          <img src={banner} className="rounded-lg shadow-2xl" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
