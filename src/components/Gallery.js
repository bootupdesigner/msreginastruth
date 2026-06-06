'use client'

import React, { useRef } from 'react'
import { Image } from 'react-bootstrap'
import { ChevronLeft, ChevronRight } from 'lucide-react'


const images = [
    {
        id: 1,
        source: "https://res.cloudinary.com/dhhnhfcrw/image/upload/v1780572735/Grace/Messenger_creation_637DEC8D-0E1F-4D6C-AFA5-6BA26C0D0E9D_wvffuj.jpg",
        alt: ``,
        description: ``
    },
    {
        id: 2,
        source: "https://res.cloudinary.com/dhhnhfcrw/image/upload/v1780572733/Grace/Messenger_creation_AE1E06EE-1AD4-4C57-9879-661F3E3F5006_tyrlvo.jpg",
        alt: ``,
        description: ``
    },
    {
        id: 3,
        source: "https://res.cloudinary.com/dhhnhfcrw/image/upload/v1780572732/Grace/Messenger_creation_A0C139C6-E13A-4747-B579-2FE51C9FED5C_uqseya.jpg",
        alt: ``,
        description: ``
    },
    {
        id: 4,
        source: "https://res.cloudinary.com/dhhnhfcrw/image/upload/v1780572731/Grace/Messenger_creation_71699852-2DD9-452D-A55F-B6B475792323_xo5kjt.jpg",
        alt: ``,
        description: ``
    },
    {
        id: 5,
        source: "https://res.cloudinary.com/dhhnhfcrw/image/upload/v1780572730/Grace/Messenger_creation_37A8FE97-E82B-4819-AF8E-20C96B62BA35_e98ae1.jpg",
        alt: ``,
        description: ``
    },
    {
        id: 6,
        source: "https://res.cloudinary.com/dhhnhfcrw/image/upload/v1780572729/Grace/Messenger_creation_BC267B14-A7A2-43DA-92AE-A4C6F6F17FAE_m182eb.jpg",
        alt: ``,
        description: ``
    },
    {
        id: 7,
        source: "https://res.cloudinary.com/dhhnhfcrw/image/upload/v1780572727/Grace/Messenger_creation_52CC5DC3-3B2F-4DA0-A524-43A1F39A7EAE_omoi2y.jpg",
        alt: ``,
        description: ``
    },
    {
        id: 8,
        source: "https://res.cloudinary.com/dhhnhfcrw/image/upload/v1780759694/Grace/Messenger_creation_983A3969-CAA5-481D-A876-0FA095380D1D_uoq50t.jpg",
        alt: ``,
        description: ``
    },
    {
        id: 9,
        source: "https://res.cloudinary.com/dhhnhfcrw/image/upload/v1780572549/Grace/Messenger_creation_2285C14A-115C-41DB-8A6A-920DACF1781B_tafghk.jpg",
        alt: ``,
        description: ``
    },
    {
        id: 10,
        source: "https://res.cloudinary.com/dhhnhfcrw/image/upload/v1780701323/Grace/Messenger_creation_F9176C17-69DD-4FB8-8116-5CDB709F5F30_ojww9d.jpg",
        alt: ``,
        description: ``
    },
    
    {
        id: 11,
        source: "https://res.cloudinary.com/dhhnhfcrw/image/upload/v1780572734/Grace/Messenger_creation_4E1B499C-58A9-45B4-9690-971B5F5AECA2_yne0t3.jpg",
        alt: ``,
        description: ``
    },
]
function Gallery() {
  const galleryRef = useRef(null)

  const scrollLeft = () => {
    galleryRef.current?.scrollBy({
      left: -300,
      behavior: 'smooth',
    })
  }

  const scrollRight = () => {
    galleryRef.current?.scrollBy({
      left: 300,
      behavior: 'smooth',
    })
  }

  return (
    <div>
      <h2 className="text-left ole-regular-font">Gallery</h2>

      <div className="gallery-wrapper">
        <button
          className="gallery-arrow left"
          onClick={scrollLeft}
        >
          <ChevronLeft />
        </button>

        <div
          className="gallery"
          ref={galleryRef}
        >
          {images.map((image) => (
            <figure key={image.id}>
              <Image
                className="gallery-img"
                rounded
                src={image.source}
                alt={image.alt}
              />
              <figcaption>{image.description}</figcaption>
            </figure>
          ))}
        </div>

        <button
          className="gallery-arrow right"
          onClick={scrollRight}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}

export default Gallery