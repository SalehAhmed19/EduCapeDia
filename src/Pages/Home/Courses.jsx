import React, { useEffect, useState } from "react";
import Course from "./Course";

const Courses = () => {
  const [AllCourses, setAllCourses] = useState([]);
  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setAllCourses(data));
  }, []);
  return (
    <div>
      <h2 className="text-center font-bold text-3xl mt-20 mb-10">
        All Courses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4">
        {AllCourses.map((c) => (
          <Course key={c._id} c={c} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
