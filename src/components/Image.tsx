interface Iprops {
  imageUrl: string;
  altText: string;
  className?: string;
}

const Image = ({ imageUrl, altText, className }: Iprops) => {
  return <img src={imageUrl} alt={altText} className={className} />;
};

export default Image;
