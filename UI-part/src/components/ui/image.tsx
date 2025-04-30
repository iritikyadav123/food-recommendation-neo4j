import React from "react";

// Accept either a string or object with a src
type ImageLike = string | { src: string };

// Props that can be passed to both NextImage and native img
type BaseImageProps = {
  src: ImageLike;
  fill?: boolean; // Only works for Next.js Image
} & Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src">;

const Image: React.FC<BaseImageProps> = ({ src, fill, ...props }) => {
  const resolvedSrc = typeof src === "string" ? src : src.src;

  try {
    const NextImage = require("next/image").default;
    return <NextImage src={resolvedSrc} fill={fill} {...props} />;
  } catch {
    console.log("Not using Next.js, falling back to <img>");
    const { style, ...rest } = props;
    return (
      <img
        src={resolvedSrc}
        style={{
          ...(fill ? { position: "absolute", width: "100%", height: "100%", objectFit: "cover" } : {}),
          ...style,
        }}
        {...rest}
      />
    );
  }
};

export default Image;
