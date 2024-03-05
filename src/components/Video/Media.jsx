import React from 'react';
import data from '../../assets/data.json'

function Media() {
    const images = data.imageMedia
     
      return (
       <div className='max-w-[1300px] m-auto'>
          <div className="flex gap-5 overflow-x-auto">
              {images.map((image) => (
                  <img src={image.imgSrc} alt={image.imgAlt} key={image.id} />
              ))}
         
      </div>
       </div>
     
      );
    }


export default Media
