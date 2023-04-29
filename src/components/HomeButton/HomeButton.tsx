import arrow from "../../assets/arrow.svg";
import * as Scroll from 'react-scroll';
import { useEffect, useState } from "react";

export function HomeButton() {
    const [scrollTop, setScrollTop] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        function handleScroll() {
        setScrollTop(window.pageYOffset);
            }

            window.addEventListener('scroll', handleScroll);

            return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollTop > 700) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }, [scrollTop]);

    return (
        <div onClick={() => Scroll.animateScroll.scrollToTop()} className={`rounded-full bg-gray-arrow flex items-center hover:bg-purple-primary justify-center w-10 h-10 transition ease-in-out 100s cursor-pointer fixed bottom-24 right-20 ${isVisible ? 'opacity-100 duration-500 delay-300' : 'opacity-0'}`}>
        <img src={arrow}/>
        </div>
    );
    } 

