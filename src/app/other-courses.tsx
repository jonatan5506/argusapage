"use client";

import { Typography } from "@material-tailwind/react";
import CourseCard from "@/components/course-card";

const OTHER_COURSES = [
  {
    img: "/image/impressora.jpg",
    title: "Impressoras",
    desc: "",
  },
  {
    img: "/image/blogs/blog2.svg",
    title: "Desktops",
    desc: "",
  },
  {
    img: "/image/rede.jpg",
    title: "Equipamentos de Rede",
    desc: "",
  },
  {
    img: "/image/mobile.jpg",
    title: "Móbiles e Tablets",
    desc: "",
  },
];

export function OtherCourses() {
  return (
    <section className="pb-20 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Locaçao de Equipamentos
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {OTHER_COURSES.map((props, idx) => (
          <CourseCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default OtherCourses;
