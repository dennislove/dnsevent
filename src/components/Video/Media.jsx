import React, { useState } from 'react';

function Media() {

      const [images, setImages] = useState([
        {
          url:  'http://www.grandteambuilding.vn/thumbs/460x420x1/upload/photo/msc-20240.jpg',
          alt: 'Image 1',
        },
        {
          url: 'http://www.grandteambuilding.vn/thumbs/460x420x1/upload/photo/expeditor-18871.jpg',
          alt: 'Image 2',
        },
        {
          url: 'http://www.grandteambuilding.vn/thumbs/460x420x1/upload/photo/terumo-77640.jpg',
          alt: 'Image 3',
        },
        {
          url:'http://www.grandteambuilding.vn/thumbs/460x420x1/upload/photo/vnpay-18791.jpg',

          alt: 'Image 4',
        },
        {
          url: 'http://www.grandteambuilding.vn/thumbs/460x420x1/upload/photo/msc-20240.jpg',
          alt: 'Image 5',
        },
        {
          url: 'http://www.grandteambuilding.vn/thumbs/460x420x1/upload/photo/expeditor-18871.jpg',
          alt: 'Image 6',
        },
        {
          url:  'http://www.grandteambuilding.vn/thumbs/460x420x1/upload/photo/terumo-77640.jpg',
          alt: 'Image 7',
        },
        {
          url:'http://www.grandteambuilding.vn/thumbs/460x420x1/upload/photo/vnpay-18791.jpg',
          alt: 'Image 8',
        },
      ]);
      
     
      return (
       <div className='max-w-[1300px] m-auto'>
          <div className="flex gap-5 overflow-x-auto">
              {images.map((image) => (
                  <img src={image.url} alt={image.title} />
              
              ))}
         
      </div>
       </div>
     
      );
    }


export default Media
