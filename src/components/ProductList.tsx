"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductList = () => {
  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap mt-12 ">
      {/* ẨN HIỆN ẢNH   */}
      {/* Mục 1  */}
      <Link
        href={"/test"}
        className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className=" relative w-full h-80  ">
          <Image
            src={
              "https://images.pexels.com/photos/29637285/pexels-photo-29637285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            title=""
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500  "
          />
          <Image
            src={
              "https://images.pexels.com/photos/29636869/pexels-photo-29636869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            title=""
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md "
          />
        </div>
        <div className=" flex justify-between">
          <span className="font-medium"> Product Name </span>
          <span className="font-semibold"> $49</span>
        </div>
        <div className=" text-sm text-gray-500"> My description</div>
        <button className=" rounded-2xl ring-1 ring-lama text-lama py-2 px-4 text-sm hover:bg-lama hover:text-white w-max">
          {" "}
          Add to Cart{" "}
        </button>
      </Link>
      {/* Mục 2  */}
      <Link
        href={"/test"}
        className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className=" relative w-full h-80  ">
          <Image
            src={
              "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            title=""
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500  "
          />
          <Image
            src={
              "https://images.pexels.com/photos/12198337/pexels-photo-12198337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            title=""
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md "
          />
        </div>
        <div className=" flex justify-between">
          <span className="font-medium"> Product Name </span>
          <span className="font-semibold"> $49</span>
        </div>
        <div className=" text-sm text-gray-500"> My description</div>
        <button className=" rounded-2xl ring-1 ring-lama text-lama py-2 px-4 text-sm hover:bg-lama hover:text-white w-max">
          {" "}
          Add to Cart{" "}
        </button>
      </Link>{" "}
      {/* Mục 3  */}
      <Link
        href={"/test"}
        className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className=" relative w-full h-80  ">
          <Image
            src={
              "https://images.pexels.com/photos/5789005/pexels-photo-5789005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            title=""
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500  "
          />
          <Image
            src={
              "https://images.pexels.com/photos/5789008/pexels-photo-5789008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            title=""
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md "
          />
        </div>
        <div className=" flex justify-between">
          <span className="font-medium"> Product Name </span>
          <span className="font-semibold"> $49</span>
        </div>
        <div className=" text-sm text-gray-500"> My description</div>
        <button className=" rounded-2xl ring-1 ring-lama text-lama py-2 px-4 text-sm hover:bg-lama hover:text-white w-max">
          {" "}
          Add to Cart{" "}
        </button>
      </Link>{" "}
      {/* Mục 4  */}
      <Link
        href={"/test"}
        className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className=" relative w-full h-80  ">
          <Image
            src={
              "https://images.pexels.com/photos/993626/pexels-photo-993626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            title=""
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500  "
          />
          <Image
            src={
              "https://images.pexels.com/photos/7919142/pexels-photo-7919142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            title=""
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md "
          />
        </div>
        <div className=" flex justify-between">
          <span className="font-medium"> Product Name </span>
          <span className="font-semibold"> $49</span>
        </div>
        <div className=" text-sm text-gray-500"> My description</div>
        <button className=" rounded-2xl ring-1 ring-lama text-lama py-2 px-4 text-sm hover:bg-lama hover:text-white w-max">
          {" "}
          Add to Cart{" "}
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
