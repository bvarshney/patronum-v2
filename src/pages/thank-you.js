import Link from "next/link";
import { useEffect, useState } from "react";
import React from 'react'
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import PageLoader from '@/components/PageLoader';
import dynamic from 'next/dynamic'
import gsap from "gsap";

const CrispWithNoSSR = dynamic(
    () => import('@/components/Crisp'),
    { ssr: false }
  )

export default function Thankyou() {
  const [countdown, setCountdown] = useState(6);

  useEffect(() => {
    let ctx = gsap.context(() => {
    const tl = gsap.timeline();
    const anim = document.querySelectorAll("#anim");

    tl.fromTo("#h1",{
        rotationX: -80,
        opacity: 0,
        translateY: 300,
        transformPerspective: "1000",
        transformOrigin: "top center",
      },
      {
        duration: 1,
        rotationX: 0,
        opacity: 1,
        translateY: 0,
        stagger: 0.2,
      }).fromTo(anim, {
        y: 100,
        opacity: 0,
      },
      {
        delay: -0.7,
        duration: 1,
        opacity: 1,
        y: 0,
        stagger: 0.2
      }).fromTo("#img1", {
        opacity: 0,
        y: -20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
      }).fromTo("#img2", {
        opacity: 0,
        y: 20
      }, 
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: -0.5,
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
      const countdownInterval = setInterval(() => {
       if (countdown > 1) {
         setCountdown(countdown - 1);
       } else {
         clearInterval(countdownInterval);
         window.location.href = "https://workspace.google.com/marketplace/app/patronum/824001351376";
       }
     }, 1000);

     return () => {
       clearInterval(countdownInterval);
     };
   }, [countdown]);

  return (
    <>
      <div className="page">
        <div className="fixed w-screen h-screen left-0 top-0 pointer-events-none z-[10000]">
          <motion.div
            initial={{ top: 0, height: 0 }}
            exit={{ height: "100%" }}
            transition={{ ease: [[0.215, 0.61, 0.355, 1]], duration: 0.4 }}
            className="bg-primary h-0 w-full relative origin-bottom"
          />
        </div>
        <PageLoader />
        <CrispWithNoSSR />
        <Header />
        <section id="hero">
          <div className="container h-screen">
            <div className="flex w-full items-center justify-center h-full ">
              <div className="text-center">
                <div className="relative">
                  <h1 id="h1" className="uppercase lg:text-[9vw] text-[12vw] font-bold text-head">
                    <span>Thank You</span>
                  </h1>
                  <img
                    id="img1"
                    className="absolute lg:top-[-42%] top-[-65%] left-[5%] lg:left-[-5.5%] w-[20%]"
                    src="/assets/extras/thanks-1.svg"
                  />
                  <img
                    id="img2"
                    className="absolute md:block hidden lg:top-[5%] top-0 right-0 w-[20%] lg:right-[-13%]"
                    src="/assets/extras/thanks-2.svg"
                  />
                </div>

                <div className="flex justify-center flex-col-reverse lg:flex-row items-center gap-[1vw] mt-[5vw] lg:mt-[1vw]">
                  <Link id="link1" href="/" className="btn fadeUp thankyou">
                    <span data-primary className="btn-text">
                      Back To Home
                    </span>
                    <div aria-hidden="true" className="btn-circle">
                      <div className="btn-circle-text">
                        Back To Home
                        <svg
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="btn-icon"
                        >
                          <path
                            data-v-f4363f2a
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z"
                            className="btn-path fill-current"
                          />
                          <path
                            data-v-f4363f2a
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z"
                            className="btn-path fill-current"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                  <Link
                    id="link2"
                    target="_blank"
                    href="https://workspace.google.com/marketplace/app/patronum/824001351376"
                    data-secondary
                    className="btn fadeUp thankyou"
                  >
                    <span className="btn-text">Proceed To Installation</span>
                    <div aria-hidden="true" className="btn-circle">
                      <div className="btn-circle-text">
                        Proceed To Installation
                        <svg
                          data-second-install
                          viewBox="0 0 22 22"
                          className="btn-icon"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            className="btn-path fill-current"
                            clipPath="url(#clip0_2103_37341)"
                          >
                            <path d="M21 18.9768C20.9616 19.1084 20.9287 19.24 20.8904 19.3661C20.5834 20.3475 19.6899 20.9945 18.6155 21C15.9624 21.0055 13.3148 21 10.6617 21C7.94832 21 5.22944 21 2.51605 21C0.981206 21 0 20.0186 0 18.4888C0 16.2298 0 13.9708 0 11.7118C0 10.8619 0.778387 10.2971 1.55129 10.5713C2.05012 10.7468 2.33516 11.1854 2.33516 11.794C2.33516 13.4444 2.33516 15.0948 2.33516 16.7397C2.33516 17.0139 2.32968 17.288 2.34064 17.5622C2.36805 18.1708 2.83399 18.6368 3.44792 18.6642C3.51919 18.6697 3.59593 18.6697 3.66719 18.6697C8.2224 18.6697 12.7776 18.6697 17.3383 18.6752C17.7768 18.6752 18.1441 18.571 18.4236 18.2201C18.621 17.9679 18.6648 17.6828 18.6648 17.3702C18.6594 15.5005 18.6594 13.6363 18.6648 11.7666C18.6648 10.977 19.2733 10.4123 19.9914 10.5219C20.5286 10.6042 20.8301 10.9551 21 11.4431C21 13.9434 21 16.4601 21 18.9768Z" />
                            <path d="M10.7763 0C10.7983 0.0164491 10.8147 0.0383812 10.8366 0.0493473C11.4341 0.301567 11.6644 0.636031 11.6644 1.28851C11.6644 4.06841 11.6644 6.8483 11.6644 9.6282C11.6644 10.1546 11.6644 10.6809 11.6644 11.2676C11.774 11.1689 11.8398 11.1141 11.9001 11.0538C12.5524 10.4013 13.1992 9.74883 13.857 9.10183C14.1969 8.76736 14.608 8.6577 15.0629 8.81671C15.507 8.97023 15.7646 9.29373 15.8359 9.75431C15.8907 10.1217 15.7865 10.4452 15.5289 10.7084C14.1201 12.123 12.7113 13.5376 11.2971 14.9413C10.8421 15.3909 10.1569 15.3909 9.69646 14.9358C8.28221 13.5376 6.87892 12.1339 5.48112 10.7248C5.02066 10.2587 5.03711 9.55692 5.4866 9.10183C5.94157 8.64125 6.6487 8.63029 7.13108 9.09634C7.79435 9.73786 8.44118 10.3903 9.09349 11.0428C9.15927 11.1086 9.2086 11.1799 9.2689 11.2512C9.29631 11.2402 9.32372 11.2347 9.34564 11.2238C9.34564 11.1305 9.34564 11.0428 9.34564 10.9496C9.34564 7.80783 9.36209 4.66057 9.33468 1.5188C9.32372 0.784073 9.54298 0.274151 10.2282 0C10.4091 0 10.59 0 10.7763 0Z" />
                          </g>
                          <g
                            className="btn-path fill-current"
                            clipPath="url(#clip0_2103_37341)"
                          >
                            <path d="M21 18.9768C20.9616 19.1084 20.9287 19.24 20.8904 19.3661C20.5834 20.3475 19.6899 20.9945 18.6155 21C15.9624 21.0055 13.3148 21 10.6617 21C7.94832 21 5.22944 21 2.51605 21C0.981206 21 0 20.0186 0 18.4888C0 16.2298 0 13.9708 0 11.7118C0 10.8619 0.778387 10.2971 1.55129 10.5713C2.05012 10.7468 2.33516 11.1854 2.33516 11.794C2.33516 13.4444 2.33516 15.0948 2.33516 16.7397C2.33516 17.0139 2.32968 17.288 2.34064 17.5622C2.36805 18.1708 2.83399 18.6368 3.44792 18.6642C3.51919 18.6697 3.59593 18.6697 3.66719 18.6697C8.2224 18.6697 12.7776 18.6697 17.3383 18.6752C17.7768 18.6752 18.1441 18.571 18.4236 18.2201C18.621 17.9679 18.6648 17.6828 18.6648 17.3702C18.6594 15.5005 18.6594 13.6363 18.6648 11.7666C18.6648 10.977 19.2733 10.4123 19.9914 10.5219C20.5286 10.6042 20.8301 10.9551 21 11.4431C21 13.9434 21 16.4601 21 18.9768Z" />
                            <path d="M10.7763 0C10.7983 0.0164491 10.8147 0.0383812 10.8366 0.0493473C11.4341 0.301567 11.6644 0.636031 11.6644 1.28851C11.6644 4.06841 11.6644 6.8483 11.6644 9.6282C11.6644 10.1546 11.6644 10.6809 11.6644 11.2676C11.774 11.1689 11.8398 11.1141 11.9001 11.0538C12.5524 10.4013 13.1992 9.74883 13.857 9.10183C14.1969 8.76736 14.608 8.6577 15.0629 8.81671C15.507 8.97023 15.7646 9.29373 15.8359 9.75431C15.8907 10.1217 15.7865 10.4452 15.5289 10.7084C14.1201 12.123 12.7113 13.5376 11.2971 14.9413C10.8421 15.3909 10.1569 15.3909 9.69646 14.9358C8.28221 13.5376 6.87892 12.1339 5.48112 10.7248C5.02066 10.2587 5.03711 9.55692 5.4866 9.10183C5.94157 8.64125 6.6487 8.63029 7.13108 9.09634C7.79435 9.73786 8.44118 10.3903 9.09349 11.0428C9.15927 11.1086 9.2086 11.1799 9.2689 11.2512C9.29631 11.2402 9.32372 11.2347 9.34564 11.2238C9.34564 11.1305 9.34564 11.0428 9.34564 10.9496C9.34564 7.80783 9.36209 4.66057 9.33468 1.5188C9.32372 0.784073 9.54298 0.274151 10.2282 0C10.4091 0 10.59 0 10.7763 0Z" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="lg:mt-[4vw] mt-[10vw]" id="anim">
                  <p className="content-p">
                    You'll be redirected to Installation page in {countdown}{" "}
                    seconds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}