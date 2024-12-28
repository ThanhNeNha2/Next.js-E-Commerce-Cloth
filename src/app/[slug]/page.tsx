import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";
import { wixClientServer } from "@/lib/wixClientServer";
import { notFound } from "next/navigation";
import React from "react";

const SinglePage = async ({ params }: { params: { slug: string } }) => {
  const wixClient = await wixClientServer();

  const products = await wixClient.products
    .queryProducts()
    // dựa theo cái id của mỗi project mà lấy cái này lấy theo slug
    .eq("slug", params.slug)
    .find();
  if (!products.items[0]) {
    return notFound();
  }

  const product = products.items[0];

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row  gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages items={product.media?.items} />
      </div>
      {/* TEXTS  */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium "> {product.name} </h1>
        <p className=" text-gray-500">{product.description}</p>
        <hr />
        {/* <div className="h-[2px] bg-gray-100" /> */}
        <div className="flex items-center gap-4 ">
          <span className="text-xl text-gray-500 line-through">$59</span>
          <p className="font-medium text-2xl">$49</p>
        </div>
        {/* <div className="h-[2px] bg-gray-100"/> */}
        <hr />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloremque saepe ad culpa libero suscipit? Vero libero at, optio
            temporibus labore voluptatibus soluta eligendi, velit omnis eaque
            debitis iusto perferendis.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloremque saepe ad culpa libero suscipit? Vero libero at, optio
            temporibus labore voluptatibus soluta eligendi, velit omnis eaque
            debitis iusto perferendis.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloremque saepe ad culpa libero suscipit? Vero libero at, optio
            temporibus labore voluptatibus soluta eligendi, velit omnis eaque
            debitis iusto perferendis.
          </p>
        </div>
        a
      </div>
    </div>
  );
};

export default SinglePage;
