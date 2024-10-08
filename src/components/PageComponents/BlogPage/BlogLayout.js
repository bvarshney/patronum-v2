import {
  LinkedinShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "next-share";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Layout from "@/components/Stairs";

gsap.registerPlugin(ScrollTrigger);

export default function BlogLayout({
  children,
  postTitle,
  postAuthor,
  postDate,
  shareLink,
  featImg,
  readingTime,
}) {
  useEffect(() => {
    const fadeUps = document.querySelectorAll(".fadeUp");

    let ctx = gsap.context(() => {
      fadeUps.forEach((fadeUp) => {
        gsap.fromTo(
          fadeUp,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "Power3.out",
            scrollTrigger: {
              trigger: fadeUp,
              start: "top 85%",
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Layout>
        <main>
          <section id="blog-hero">
            <div className="w-[88%] mx-auto">
              <div className="content blog-content-1">
                <div className="lg:w-[88%] w-full mx-auto lg:mt-[6.5vw] md:mt-[3vw] mt-[6vw] lg:mb-[4vw] mb-[6vw]">
                  <h1 className="lg:text-[3.4vw] md:text-[5vw] text-[7vw] leading-[1.2] text-center text-head lg:mb-[2vw] mb-[4vw] fadeUp">
                    <span>{postTitle}</span>
                  </h1>
                  <div className="lg:text-[1.15vw] md:text-[2.5vw] md:flex items-center justify-between lg:w-[70%] w-[90%] mx-auto md:mb-0">
                    <div className="flex items-center justify-between gap-[2vw] md:mb-0 mb-[3vw] fadeUp">
                      <p>By {postAuthor}</p>
                      <p>{postDate}</p>
                    </div>
                    <div className="flex md:items-center items-end justify-between gap-[2vw] fadeUp">
                      <div>
                        <p>Read Time: {readingTime} mins</p>
                      </div>
                      <div className="flex items-start justify-center lg:gap-[1vw] md:gap-[2vw] gap-[3vw]">
                        <FacebookShareButton
                          url={`https://www.patronum.io/${shareLink}`}
                          quote={
                            "Read more articles like this on our website - https://www.patronum.io"
                          }
                          hashtag={"#patronum"}
                        >
                          <img
                            className="lg:w-[1.8vw] md:w-[2.8vw] w-[6vw]"
                            src="/assets/icons/facebook.webp"
                            alt="social icon"
                          />
                        </FacebookShareButton>

                        <LinkedinShareButton
                          url={`https://www.patronum.io/${shareLink}`}
                          hashtag={"#patronum"}
                        >
                          <img
                            className="lg:w-[1.8vw] md:w-[2.8vw] w-[6vw]"
                            src="/assets/icons/linkedin.webp"
                            alt="social icon"
                          />
                        </LinkedinShareButton>

                        <TwitterShareButton
                          url={`https://www.patronum.io/${shareLink}`}
                          title={postTitle}
                          hashtag={"#patronum"}
                        >
                          <img
                            className="lg:w-[1.8vw] md:w-[2.8vw] w-[6vw]"
                            src="/assets/icons/twitter.webp"
                            alt="social icon"
                          />
                        </TwitterShareButton>

                        <WhatsappShareButton
                          url={`https://www.patronum.io/${shareLink}`}
                          title={postTitle}
                          hashtag={"#patronum"}
                        >
                          <img
                            className="lg:w-[1.8vw] md:w-[2.8vw] w-[6vw]"
                            src="/assets/icons/whatsapp.webp"
                            alt="social icon"
                          />
                        </WhatsappShareButton>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="featured-image overflow-hidden lg:rounded-3xl rounded-2xl lg:h-[35vw] h-[full] fadeUp">
                  <img
                    className="w-full h-full object-cover object-center"
                    src={featImg}
                    alt={`${postTitle} image`}
                    title={`${postTitle} image`}
                  />
                </div>
              </div>
            </div>
          </section>
          {children}
        </main>
      </Layout>
    </>
  );
}
