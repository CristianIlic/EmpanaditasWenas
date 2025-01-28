import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage, responsive } from "@cloudinary/react";

const CdnImage = ({ photoName, autoSize, border }) => {
  const cld = new Cloudinary({ cloud: { cloudName: "duevqnubu" } });

  // Use this sample image or upload your own via the Media Explorer
  const img = cld
    .image(photoName || "noImage")
    .format("auto") // Optimize delivery by resizing and applying auto-format and auto-quality
    .quality("auto")
    .resize(auto().gravity(autoGravity()).width(500).height(500)); // Transform the image: auto-crop to square aspect_ratio

  return (
    <AdvancedImage
      style={{
        maxWidth: autoSize ? "30%" : "100%",
        border: border && "3px solid black",
      }}
      cldImg={img}
      plugins={autoSize ? [responsive({ steps: 200 })] : []}
    />
  );
};

export default CdnImage;
