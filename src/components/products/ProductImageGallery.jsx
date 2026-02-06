import ImageGallery from 'react-image-gallery';

const ProductImageGallery = ({ product }) => {
  if (!product) {
    return (
      <div className="aspect-square bg-gray-200 flex items-center justify-center rounded-xl">
        <span className="text-gray-400">No image available</span>
      </div>
    );
  }

  const images = [];
  
  if (product.first_image) {
    images.push({
      original: product.first_image,
      thumbnail: product.first_image,
      originalAlt: product.name,
      thumbnailAlt: `${product.name} thumbnail`,
    });
  }
  
  if (product.second_image) {
    images.push({
      original: product.second_image,
      thumbnail: product.second_image,
      originalAlt: product.name,
      thumbnailAlt: `${product.name} thumbnail`,
    });
  }
  
  if (product.third_image) {
    images.push({
      original: product.third_image,
      thumbnail: product.third_image,
      originalAlt: product.name,
      thumbnailAlt: `${product.name} thumbnail`,
    });
  }

  return (
    <div className="relative bg-white rounded-xl overflow-hidden shadow-sm">
      {images.length > 0 ? (
        <ImageGallery
          items={images}
          showPlayButton={false}
          showFullscreenButton={true}
          showNav={images.length > 1}
          showThumbnails={images.length > 1}
          thumbnailPosition="bottom"
          slideDuration={450}
          infinite={true}
          lazyLoad={true}
        />
      ) : (
        <div className="aspect-square bg-gray-200 flex items-center justify-center">
          <span className="text-gray-400">No image available</span>
        </div>
      )}

      {product.status !== 1 && (
        <span className="absolute top-4 left-4 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          Out of Stock
        </span>
      )}
    </div>
  );
};

export default ProductImageGallery;