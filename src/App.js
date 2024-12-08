import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ProductSlider() {
  const contentRef = useRef();
  const products = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

  // useGSAP(() => {
  //   if (contentRef.current) {
  //     const createGsap = () => {
  //       const sections = gsap.utils.toArray('.productSection');

  //       return gsap.to(sections, {
  //         x: -(
  //           sections[0]?.offsetWidth *
  //           (sections.length -
  //             Math.round(window.innerWidth / sections[0]?.offsetWidth))
  //         ),
  //         ease: 'none',
  //         scrollTrigger: {
  //           trigger: contentRef.current,
  //           start: 'bottom bottom',
  //           invalidateOnRefresh: true,
  //           pin: true,
  //           markers: true,
  //           scrub: true,
  //           end: () => '+=' + contentRef?.current?.offsetWidth,
  //         },
  //       });
  //     };

  //     const gsapEntity = createGsap();

  //     return () => {
  //       gsapEntity.kill();
  //     };
  //   }
  // }, []);

  return (
    <>
      <div
        ref={contentRef}
        className="w-max border-t-[1px] border-t-[#262626] flex flex-nowrap"
      >
        {products.map((productItem) => {
          const { id } = productItem || {};

          return (
            <div
              key={id}
              className="productSection relative w-screen md:w-[50vw] lg:w-[33.333vw] xl:w-[25vw] bg-purple-900 h-screen border-r-[1px] border-r-[#404040] last:border-none"
            >
              test{id}
            </div>
          );
        })}
      </div>
    </>
  );
}
