/* eslint-disable no-empty-pattern */
import s from './index.module.css'
// import { ButtonProps } from './Button.props'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

//import { indexProps } from "./index.props"


import React, { useState, useEffect } from 'react';


interface SliderProps {
	slides: React.ReactNode[];
	slideDuration?: number;
 }
 
 const Slider: React.FC<SliderProps> = ({ slides, slideDuration = 7000  }) => {
   const [currentSlide, setCurrentSlide] = useState(0);
   const [sliderWidth, setSliderWidth] = useState(0);
   const sliderRef = React.createRef<HTMLDivElement>();
	console.log('sliderRef', sliderRef);
	console.log('sliderWidth', sliderWidth);
	
   useEffect(() => {
     if (sliderRef.current) {
       setSliderWidth(sliderRef.current.offsetWidth);
     }
   }, []);

   useEffect(() => {
     const timerId = setTimeout(() => {
       setCurrentSlide(
         currentSlide === slides.length - 1 ? 0 : currentSlide + 1
       );
     }, slideDuration);
     return () => clearTimeout(timerId);
   }, [currentSlide, slideDuration, slides.length]);

   const handlePrevSlide = (): void => {
     setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
   };

   const handleNextSlide = (): void => {
     setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
   };
	


   return (
     <div className={s.slider} ref={sliderRef}>
       <div
         className={s.slidesWrapper}
         style={{ transform: `translateX(-${currentSlide * sliderWidth}px)` }}
       >
         {slides.map((slide, index) => (
           <div key={index} className={s.slide}>
				<div className={s['slide__text']}>Текст</div>
             <div className={s['image']}>{slide}</div>
           </div>
         ))}
       </div>
       <div className={s.controls}>
         <button className={s.control} onClick={handlePrevSlide}>
           &lt;
         </button>
         <div className={s.dots}>
           {slides.map((_slide, index) => (
             <button
               key={index}
               className={`${s.dot} ${currentSlide === index ? s.active : ""}`}
               onClick={() => setCurrentSlide(index)}
             />
           ))}
         </div>
         <button className={s.control} onClick={handleNextSlide}>
           &gt;
         </button>
       </div>
     </div>
   );
 };
 
 export default Slider;





// export const Button = ({ appearance, arrow = 'none',  children, className, ...props }: ButtonProps): JSX.Element => {
// 	return (
// 	<button  className={cn(s.button, className, {
// 		[s.primary]: appearance == 'primary',
// 		[s.ghost]: appearance == 'ghost',
// 	})}
// 	{...props}
// 	>
// 		{children}
// 		{arrow != 'none' && <span className={cn(s.arrow, {
// 				[s.down]: arrow == 'down'
// 			})}>
// 				<ArrowIcon />
// 			</span>}
			
// 	</button>)
// }



// export const шаблон = ({  }:indexProps): JSX.Element => {
// 	return (
// 		<>
			
// 		</>
// 	)
// }

