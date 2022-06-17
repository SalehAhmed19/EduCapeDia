import React from "react";

const Course = ({ c }) => {
  return (
    <div class="card bg-base-100 shadow-xl">
      <figure>
        <img src={c.img} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{c.name}</h2>
        <ul>
          {c.features.map((feature) => (
            <li className="list-disc ml-5">{feature}</li>
          ))}
        </ul>
        <div class="card-actions justify-center">
          <button class="btn btn-sm btn-outline btn-primary w-full">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
