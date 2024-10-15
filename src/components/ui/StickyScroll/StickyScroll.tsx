//

"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import Image from "next/image";
export default function StickyScroll(): JSX.Element {
  return (
    <div className="">
      <ReactLenis root>
        <main className="bg-black">
          <div className="wrapper">
            <section className="text-white  h-screen  w-full bg-slate-950  grid place-content-center sticky top-0">
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

              <h1 className="2xl:text-7xl text-6xl px-8 font-semibold text-center tracking-tight leading-[120%]">
             <span className="text-[#00a76b]">GYM STAR</span> <br /> is not just a place, it&apos;s a mindset. Every time you step in, you are stepping closer to your goals.
              </h1>
            </section>

            <section className="bg-gray-300 text-black grid place-content-center h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
              <h1 className="2xl:text-7xl text-4xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              <span className="text-[#00a76b]">GYM </span> time is where you break limits 💪, push through pain, and sculpt not just your body, but your discipline. 
              </h1>
            </section>
            <section className="text-white  h-screen  w-full bg-slate-950  grid place-content-center sticky top-0">
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
              <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              <span className="text-[#00a76b]">GYM </span>  sessions don&apos;t just build muscles, they build character, determination, and an unbreakable spirit.
              </h1>
            </section>
          </div>

          <section className="text-white   w-full bg-slate-950  ">
            <div className="grid grid-cols-2">
              <div className="sticky top-0 h-screen flex items-center justify-center">
                <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
                  Stop Thinking
                  <br /> Start  Gyming 😎
                </h1>
              </div>
              <div className="grid gap-2 overflow-x-hidden overflow-y-auto">
                <figure className="grid place-content-center -skew-x-12">
                  <Image
                    src="https://hips.hearstapps.com/hmg-prod/images/701/articles/2017/01/how-much-joining-gym-helps-health-2-jpg-1488906648.jpeg?resize=640:*"
                    width={500}
                    className="transition-all duration-300 w-80 h-96  align-bottom object-cover "
                    height={500}
                    alt="preview image"
                  />
                </figure>
                <figure className="grid place-content-center skew-x-12">
                 
                  <Image
                    src="https://www.spartanfitness.ca/cdn/shop/files/iStock-1449353914-SM.jpg?v=1715286764&width=836"
                    alt=""
                    className="transition-all duration-300 w-80 h-96  align-bottom object-cover "
                    width={500}
                    height={500}
                  />
                </figure>
                <figure className="grid place-content-center -skew-x-12">
               
                   <Image
                   src="https://img.freepik.com/premium-photo/man-woman-with-good-physique-holding-heavy-kettle-bell-swing-cross-training-hard-core-workout-gym-personal-class-with-professional-sport-coach_266732-32666.jpg"
                   alt=""
                   className="transition-all duration-300 w-80 h-96  align-bottom object-cover "
                    width={500}
                    height={500}
                  />
                </figure>
                <figure className="grid place-content-center skew-x-12">
               
                     <Image
                  src="https://xplorgym.co.uk/wp-content/uploads/2023/10/commercial-gym-equipment-list.jpg"
                  alt=""
                  className="transition-all duration-300 w-80 h-96  align-bottom object-cover "
                    width={500}
                    height={500}
                  />
                </figure>
              </div>
            </div>
          </section>
          <section className="text-white   w-full bg-slate-950  ">
            <div className="grid grid-cols-2 px-8">
              <div className="grid gap-2">
                <figure className="sticky top-0 h-screen grid place-content-center">
            
                    <Image
                      src="https://i.ytimg.com/vi/gey73xiS8F4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCpkC50rWBy9eRhk8v1BOkKNx0LmA"
                      alt=""
                      className="transition-all duration-300 w-96 h-96  align-bottom object-cover rounded-md"
                    width={500}
                    height={500}
                  />
                </figure>
                <figure className="sticky top-0 h-screen grid place-content-center">
                <Image
                      src="https://swequity.vn/wp-content/uploads/2019/07/tap-gym-yeu-sinh-ly.jpg"
                      alt=""
                      className="transition-all duration-300 w-96 h-96  align-bottom object-cover rounded-md"
                    width={500}
                    height={500}
                  />
                </figure>
                <figure className="sticky top-0 h-screen grid place-content-center">
                <Image
                      src="https://miro.medium.com/v2/resize:fit:1400/0*Tx4TigIz9GY0x4P9"
                      alt=""
                      className="transition-all duration-300 w-96 h-96  align-bottom object-cover rounded-md"
                    width={500}
                    height={500}
                  />
                </figure>
                <figure className="sticky top-0 h-screen grid place-content-center">
                <Image
                      src="https://img.freepik.com/premium-photo/sport-muscular-fitness-man-working-out-gym_174475-145.jpg"
                      alt=""
                      className="transition-all duration-300 w-96 h-96  align-bottom object-cover rounded-md"
                    width={500}
                    height={500}
                  />
                </figure>
              </div>
              <div className="sticky top-0 h-screen grid place-content-center">
                <h1 className="text-4xl px-8 font-medium text-right tracking-tight leading-[120%]">
                <span className="text-[#00a76b]">GYM STAR</span> is where excuses end, and hard work begins. It&apos;s the arena where you compete against yesterday&apos;s version of yourself.
                </h1>
              </div>
            </div>
          </section>
       
        </main>
      </ReactLenis>
    </div>
  );
}
