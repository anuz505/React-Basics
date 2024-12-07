import React from "react";

interface ImageProps {
  src: string;
  alt: string;
  height?: number | string;
  width?: number | string;
  className?: string;
}
const Image: React.FC<ImageProps> = ({
  src,
  alt,
  height,
  width,
  className,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      height={height}
      width={width}
      className={className}
    />
  );
};

export default Image;
