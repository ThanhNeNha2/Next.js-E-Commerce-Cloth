import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DOMPurify from "isomorphic-dompurify";
const ProductList = async ({
  categoryId,
  limit,
}: {
  categoryId: string;
  limit?: number;
}) => {
  const wixClient = await wixClientServer();

  const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit || 20)
    .find();
  console.log("check thong tin wix res", res);

  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap mt-12 ">
      {/* ẨN HIỆN ẢNH   */}
      {/* Mục 1  */}

      {res.items.map((product: products.Product) => (
        <Link
          href={"/" + product.slug}
          className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          key={product._id}
        >
          <div className=" relative w-full h-80  ">
            <Image
              src={product.media?.mainMedia?.image?.url || "/product.png"}
              title=""
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500  "
            />
            {product.media?.items && (
              <Image
                src={product.media?.items[1]?.image?.url || "/product.png"}
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md "
              />
            )}
          </div>
          <div className=" flex justify-between">
            <span className="font-medium"> {product.name} </span>
            <span className="font-semibold"> ${product.price?.price}</span>
          </div>
          {product.additionalInfoSections && (
            <div
              className="text-sm text-gray-500"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  product.additionalInfoSections.find(
                    (section: any) => section.title === "shortDesc"
                  )?.description || ""
                ),
              }}
            ></div>
          )}
          <button className=" rounded-2xl ring-1 ring-lama text-lama py-2 px-4 text-sm hover:bg-lama hover:text-white w-max">
            {" "}
            Add to Cart{" "}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
