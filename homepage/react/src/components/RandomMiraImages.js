import React, { useState, useEffect } from 'react';

function RandomMiraImages() {
  const [randomImage, setRandomImage] = useState(null);

  const allImages = [];

  const importAll =
    (requireContext) =>
      requireContext.keys().forEach(key => allImages.push(key.replace('./', '')));

  importAll(require.context('../../public/mira', false, /\.png$/));

  const getRandomBottomPosition = (imageName) => {
    // Check if the image name contains "left"
    if (imageName.toLowerCase().includes('left')) {
      return {
        bottom: 0,
        left: 0, // Always place at the left corner
      };
    }

    // Check if the image name contains "right"
    if (imageName.toLowerCase().includes('right')) {
      return {
        bottom: 0,
        right: 0, // Stick to the browser's right edge
      };
    }

    return {
      bottom: 0,
      left: Math.random() * 80 + 10, // 10% to 90% from left for other images
    };
  };

  const generateTooltip = (filename) => {
    let base = filename.replace(/\.png$/i, '');
    base = base.replace(/-left$/i, '');
    base = base.replace(/-right$/i, '');
    base = base.replace(/-\d+$/i, '');
    base = base.replace(/^mira-?/i, '');
    base = base.replace(/-/g, ' ').trim();
    if (!base) return 'Mira';
    base = base.charAt(0).toLowerCase() + base.slice(1);
    return 'Mira ' + base;
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * allImages.length);
    const selectedImage = allImages[randomIndex];

    setRandomImage({
      src: `/mira/${selectedImage}`,
      position: getRandomBottomPosition(selectedImage),
      key: Math.random(),
      tooltip: generateTooltip(selectedImage)
    });
  }, []);

  if (!randomImage) return null;

  return (
    <img
      key={randomImage.key}
      src={randomImage.src}
      alt={randomImage.tooltip}
      title={randomImage.tooltip}
      className="random-mira-image"
      style={{
        position: 'fixed',
        bottom: `${randomImage.position.bottom}%`,
        ...(randomImage.position.right !== undefined
          ? { right: 0 }
          : { left: `${randomImage.position.left}%` }),
        zIndex: 1,
      }}
    />
  );
}

export default RandomMiraImages;
