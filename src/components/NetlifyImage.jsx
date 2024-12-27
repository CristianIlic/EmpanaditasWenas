function NetlifyImage({ src, alt, className }) {
  // Detectar el formato original de la imagen
  const getFormat = (filename) => {
    const ext = filename.split(".").pop().toLowerCase();
    // Si es jpg o jpeg podemos ofrecer webp como alternativa
    if (ext === "jpg" || ext === "jpeg") {
      return { original: ext, alternative: "webp" };
    }
    // Para PNG u otros formatos, mantenemos el formato original
    return { original: ext, alternative: null };
  };

  const format = getFormat(src);

  // Construir URLs para diferentes tamaños
  const getImageUrl = (width, fmt = format.original) =>
    `/.netlify/images?url=/images/${src}&w=${width}${
      fmt === "webp" ? "&f=webp" : ""
    }&fit=cover`;

  return (
    <picture className={className}>
      {/* Solo ofrecemos WebP si la imagen original es JPG/JPEG */}
      {format.alternative === "webp" && (
        <>
          {/* Mobile - WebP */}
          <source
            media="(max-width: 768px)"
            srcSet={`
              ${getImageUrl(400, "webp")} 1x,
              ${getImageUrl(800, "webp")} 2x
            `}
            type="image/webp"
          />
          {/* Desktop - WebP */}
          <source
            srcSet={`
              ${getImageUrl(800, "webp")} 1x,
              ${getImageUrl(1200, "webp")} 2x
            `}
            type="image/webp"
          />
        </>
      )}

      {/* Formato original (JPG/JPEG/PNG) */}
      <source
        media="(max-width: 768px)"
        srcSet={`
          ${getImageUrl(400)} 1x,
          ${getImageUrl(800)} 2x
        `}
        type={`image/${format.original}`}
      />
      <source
        srcSet={`
          ${getImageUrl(800)} 1x,
          ${getImageUrl(1200)} 2x
        `}
        type={`image/${format.original}`}
      />

      {/* Fallback */}
      <img
        src={getImageUrl(800)}
        alt={alt || ""}
        loading="lazy"
        className={className}
      />
    </picture>
  );
}

export default NetlifyImage;
