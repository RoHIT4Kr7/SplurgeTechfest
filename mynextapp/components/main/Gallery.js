import React from 'react';
import Image from 'next/image'; 
import { motion } from 'framer-motion'; // Import Framer Motion

const Gallery = () => {
  const images = [
    'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/splurgememo10.jpg?alt=media&token=80cb1098-5957-47a8-b160-ea9f75f3cb61',
    'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/splurgememo11.jpg?alt=media&token=884f0d63-2fa7-42e6-bcf7-8008049ad8fb',
    'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/splurgememo3.jpg?alt=media&token=dbc92e98-5f28-4911-b580-f7f853494dab',
    'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/splurgememo12.jpg?alt=media&token=f2561c99-8e65-495c-bc20-05faa0467edf',
    'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/splurgememo5.jpg?alt=media&token=5ae91a11-4352-4131-a7d5-59acaf8cf20f',
    'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/splurgememo6.jpg?alt=media&token=7357b1f1-dbef-460c-a281-46f5323c5cb6',
    'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/splurgememo7.jpg?alt=media&token=e2316dab-96e6-4804-8b92-bb80b2566f07',
    'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/splurgememo8.jpg?alt=media&token=b63558ba-4d56-4fb6-81f1-9b939bbdee7d',
    'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/splurgememo9.jpg?alt=media&token=349af9d7-9729-420a-bccc-d2fec65bee32',
    'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/splurgememo1.jpg?alt=media&token=17de4d47-0f6e-4c6a-84be-1d9d6b169334',
    'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/splurgememo2.jpg?alt=media&token=f660ded8-78f2-43ed-a1cc-1451c7cbfc50',
    'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/splurgememo3.jpg?alt=media&token=dbc92e98-5f28-4911-b580-f7f853494dab',
    'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/_MG_0019.JPG?alt=media&token=5b2cece4-6081-43a2-89d7-8cd987b30c82',
    'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/_MG_0032.JPG?alt=media&token=c712bb34-c9bc-4c90-8aa4-9e2a3bb9a5d8',
    'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/_MG_0041.JPG?alt=media&token=e112366b-5422-4522-8159-71aa79430373',
    'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/_MG_0044.JPG?alt=media&token=16a7d07f-5838-46d6-ab0c-1cbb71900056',
    'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/_MG_0053.JPG?alt=media&token=cb7bb237-f3d0-4b40-87b6-ba57530b4267',
    'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/_MG_0057.JPG?alt=media&token=97468d78-a1bc-4739-984c-37892c82e000',
    'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/_MG_0061.JPG?alt=media&token=5a5ab471-f40c-4973-a026-fc077d39fc4e',
    'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/_MG_0086.JPG?alt=media&token=8f40add6-5482-417e-9d00-bd94aead0264',
    'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/_MG_0093.JPG?alt=media&token=b4a56b2e-8451-4cb7-a02e-02e5c58513ae',
    'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/_MG_0097.JPG?alt=media&token=c2178288-d468-4765-94f7-efcb3883eca0',
    'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/_MG_0111.JPG?alt=media&token=de3d3307-2052-493b-808b-bbdf3261d04c',
    'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/_MG_0171.JPG?alt=media&token=55545d0b-40ea-471e-a2a4-bb070f8001ec',
    'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/_MG_0182.JPG?alt=media&token=045f85c7-67d0-4e4c-ae0d-c6716f73d744',
    'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/Copy%20of%20_MG_0075.JPG?alt=media&token=c079a937-e023-47c4-a35d-35cf4c7286d8',
    'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/IMG_0006.JPG?alt=media&token=94023ba6-cd4a-4547-852a-c4f6d123fe30',
    'https://firebasestorage.googleapis.com/v0/b/splurge-techfest.appspot.com/o/IMG_0128.JPG?alt=media&token=3c6551b7-f4d1-4528-b7a0-ea5d95dd10df',
  ];

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  return (
    <div className="relative min-h-screen w-full bg-slate-950 py-16 px-4">
      <h2 className="py-10 mt-4 text-xl sm:text-2xl lg:text-6xl text-white bg-transparent font-bold font-ethnocentric flex justify-center">
        WELCOME TO SPLURGE GALLERY
      </h2>
      <div id="grid-container" className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
        {images.map((src, index) => (
          <motion.div 
            key={index} 
            className="overflow-hidden rounded-lg flex flex-col items-start p-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              className="border overflow-hidden rounded-lg w-auto h-auto object-cover border-slate-100"
              layout="responsive"
              width={500}
              height={500}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
