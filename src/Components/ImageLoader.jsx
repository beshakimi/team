import React, { useState } from "react";

const ImageLoader = ({ src, alt, className, loadingText }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className={`relative ${className}`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
          {/* اگر loadingText برابر false باشد، متن نمایش داده نمی‌شود */}
          {loadingText !== false && (
            <span className="text-gray-400">{loadingText || "Loading..."}</span>
          )}
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${className} ${loading ? "opacity-0" : "opacity-100"
          }`}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};

export default ImageLoader;
