function NetlifyImage({ src }) {
  return (
    <img
      src={`/.netlify/images?url=/images/${src}&w=800&h=600&fit=crop`}
      alt="Descripción"
    />
  );
}

export default NetlifyImage;
