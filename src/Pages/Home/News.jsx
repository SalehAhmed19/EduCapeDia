import React from "react";

const News = ({ newsPort }) => {
  return (
    <div>
      <div class="card shadow-xl hover:bg-blue-500 hover:text-white hover:transition cursor-pointer">
        <div class="card-body">
          <h2 class="card-title">{newsPort.head}</h2>
          <p>{newsPort.news}</p>
          <div class="card-actions justify-end">
            <p className="font-bold"> -- {newsPort.footer}--</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
