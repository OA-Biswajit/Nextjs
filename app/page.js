"use client";
import React, { useState } from "react";
import axios from "axios";

const page = () => {
  const [Images, setImages] = useState([]);
  const getImages = async () => {
    try {
      const response = await axios.get(
        "https://picsum.photos/v2/list"
      );
      const data = response.data;
      setImages(data);
      console.log(Images);
    } catch (error) {
      console.log("Error Fetching Images");
    }
  };
  return (
    <>
      <div className="p-12">
        <h1>This is home page</h1>
        <button
          onClick={getImages}
          className="px-5 py-3 bg-green-600  text-white  font-bold">
          Get Image
        </button>
        <div className="2xl:p-10">
          {Images.map((elem, i) => {
            return (
              <img key={i}
                width={300}
                height={300}
                className="m-10 rounded inline-block"
                src={elem.download_url} />
              )
          })
          }
        </div>
      </div>
    </>
  );
};
export default page;
