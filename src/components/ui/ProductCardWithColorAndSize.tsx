'use client'
import { motion } from 'framer-motion'
import {
  Heart,
  ShoppingCart
} from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'


export const CardArr = [
    {
      img: 'https://media.drive.com.au/obj/tx_q:70,rs:auto:1200:675:1/driveau/upload/cms/uploads/bi36meqa62rhbghgdrkh', // Replace with the actual image path
      color: '#FF0000',         // Red color for this variant
    },
    {
      img: 'https://cdn.motor1.com/images/mgl/MkO9NN/s1/future-supercars.webp', // Replace with the actual image path
      color: '#00FF00',         // Green color for this variant
    },
    {
      img: 'https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1707920217641.jpg', // Replace with the actual image path
      color: '#0000FF',         // Blue color for this variant
    },
  ];



function Card2() {
  const [selectedImage, setSelectedImage] = useState(CardArr[0].img)
  console.log(selectedImage);
  const [selectedColor, setSelectedColor] = useState(CardArr[0].color)
  const handleColorButtonClick = (img: string, color: string) => {
    setSelectedImage(img)
    setSelectedColor(color)
  }
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive((prevState) => !prevState)
  }

  return (
    <div className="w-[350px] mx-auto ">
      <div className="dark:bg-white bg-gray-100 rounded-md">
        <div className="w-full h-52 relative">
          <motion.button
            className="absolute top-2 right-2 z-20 text-2xl text-white "
            onClick={handleClick}
            animate={{ scale: isActive ? 1.2 : 1 }}
            transition={{ type: 'spring', stiffness: 1000, damping: 10 }}
          >
            {isActive ? (
              <>
                <Heart className=" fill-white" />
              </>
            ) : (
              <>
                <Heart />
              </>
            )}
          </motion.button>
          {/* <button className="absolute top-2 right-2 z-20">
            <Heart />
          </button> */}
          {CardArr.map((data, index) => (
            <Image
            key={index}
              src={data?.img}
              alt="shoes"
              width={1000}
              height={1000}
              className={`absolute h-52 w-full rounded-t-md  object-cover  ${
                selectedColor === data.color
                  ? 'z-10 transition-all duration-500'
                  : 'transition-all delay-500'
              }`}
              style={{
                clipPath:
                  selectedColor === data.color
                    ? 'polygon(0 0, 100% 0, 100% 100%, 0% 100%) '
                    : 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%) ',
              }}
            />
          ))}
        </div>
        <article className="text-black pt-2 p-2">
          <div className="flex justify-between">
            <h1 className="font-semibold text-xl text-blue-500">
              Nike Air Max
            </h1>
            <span className="font-medium text-xl text-blue-500">$39</span>
          </div>
          <p className="text-xs">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            porro quos quae autem vel praesentium.
          </p>
          
          <div className="flex justify-between py-2">
            {/* <span className="font-semibold text-xl">$39</span> */}
            <div className="flex gap-2 items-center">
              {CardArr.map((data, index) => (
                <button
                  key={index}
                  onClick={() => handleColorButtonClick(data.img, data.color)}
                  className={` relative w-6 h-6 border  rounded-full grid place-content-center transition-all ${
                    selectedColor === data.color
                      ? ' border-black'
                      : 'border-gray-200'
                  }`}
                >
                  <span
                    className="w-4 h-4 rounded-full inline-block"
                    style={{
                      backgroundColor: data.color,
                    }}
                  ></span>
                </button>
              ))}
            </div>
          </div>
          <button onClick={() => alert(selectedColor)} className="w-full text-white flex justify-center items-center gap-2 bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#3e5068] to-[#0c1970] py-3 rounded-md">
            <ShoppingCart className="w-5 h-5" /> Add to cart
          </button>
        </article>
      </div>
    </div>
  )
}

export default Card2
