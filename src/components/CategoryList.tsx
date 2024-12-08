import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryList = () => {
  return (
    <div className=" px-4 overflow-x-scroll scrollbar-hide  ">
      <div className="flex gap-4 md:gap-8 ">
        {/* 1 */}
        <Link
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 "
          href={"/list?cat=test"}
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src={
                "https://images.pexels.com/photos/993626/pexels-photo-993626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
              fill
              sizes="25vw"
            />
          </div>
          <h1 className="mt-8 font-light text-clip tracking-wide">
            {" "}
            Category Name{" "}
          </h1>
        </Link>
        {/* 1 */}
        <Link
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 "
          href={"/list?cat=test"}
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src={
                "https://images.pexels.com/photos/993626/pexels-photo-993626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
              fill
              sizes="25vw"
            />
          </div>
          <h1 className="mt-8 font-light text-clip tracking-wide">
            {" "}
            Category Name{" "}
          </h1>
        </Link>{" "}
        {/* 1 */}
        <Link
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 "
          href={"/list?cat=test"}
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src={
                "https://images.pexels.com/photos/993626/pexels-photo-993626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
              fill
              sizes="25vw"
            />
          </div>
          <h1 className="mt-8 font-light text-clip tracking-wide">
            {" "}
            Category Name{" "}
          </h1>
        </Link>{" "}
        {/* 1 */}
        <Link
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 "
          href={"/list?cat=test"}
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src={
                "https://images.pexels.com/photos/993626/pexels-photo-993626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
              fill
              sizes="25vw"
            />
          </div>
          <h1 className="mt-8 font-light text-clip tracking-wide">
            {" "}
            Category Name{" "}
          </h1>
        </Link>{" "}
        {/* 1 */}
        <Link
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 "
          href={"/list?cat=test"}
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src={
                "https://images.pexels.com/photos/993626/pexels-photo-993626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
              fill
              sizes="25vw"
            />
          </div>
          <h1 className="mt-8 font-light text-clip tracking-wide">
            {" "}
            Category Name{" "}
          </h1>
        </Link>{" "}
        {/* 1 */}
        <Link
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 "
          href={"/list?cat=test"}
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src={
                "https://images.pexels.com/photos/993626/pexels-photo-993626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
              fill
              sizes="25vw"
            />
          </div>
          <h1 className="mt-8 font-light text-clip tracking-wide">
            {" "}
            Category Name{" "}
          </h1>
        </Link>{" "}
        {/* 1 */}
        <Link
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 "
          href={"/list?cat=test"}
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src={
                "https://images.pexels.com/photos/993626/pexels-photo-993626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
              fill
              sizes="25vw"
            />
          </div>
          <h1 className="mt-8 font-light text-clip tracking-wide">
            {" "}
            Category Name{" "}
          </h1>
        </Link>{" "}
        {/* 1 */}
        <Link
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 "
          href={"/list?cat=test"}
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src={
                "https://images.pexels.com/photos/993626/pexels-photo-993626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
              fill
              sizes="25vw"
            />
          </div>
          <h1 className="mt-8 font-light text-clip tracking-wide">
            {" "}
            Category Name{" "}
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
