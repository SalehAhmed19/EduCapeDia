import React, { useEffect, useState } from "react";
import News from "./News";

const Newses = () => {
  const [newsPortal, setNewsPortal] = useState([]);
  useEffect(() => {
    fetch("newses.json")
      .then((res) => res.json())
      .then((data) => setNewsPortal(data));
  }, []);
  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold text-center">এডুকেপেডিয়া বার্তা</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4 my-10">
        {newsPortal.map((newsPort) => (
          <News key={newsPort._id} newsPort={newsPort} />
        ))}
      </div>
    </div>
  );
};

export default Newses;
