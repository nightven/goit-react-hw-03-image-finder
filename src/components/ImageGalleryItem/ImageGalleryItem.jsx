import { GalleryItem } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({data:{tags, webformatURL, id}, onImageClick}) => {
  return (
    <GalleryItem className="gallery-item" onClick={()=>onImageClick(id)}> 
      <img src={webformatURL} alt={tags} />
    </GalleryItem>
  );
};
