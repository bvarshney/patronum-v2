import { useEffect, useState } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { NextSeo } from "next-seo";

import Hero from '@/components/PageComponents/HomePage/Hero';
import Features from '@/components/PageComponents/HomePage/Features';
import About from '@/components/PageComponents/HomePage/About';
import UseCases from '@/components/PageComponents/HomePage/UseCases';
import Faqs from '@/components/PageComponents/HomePage/Faqs';
import Pricing from '@/components/PageComponents/HomePage/Pricing';
import Testimonial from '@/components/PageLayout/Testimonial';
import RelatedPosts from "@/components/PageComponents/BlogPage/RelatedPosts";

import { getHomePagePosts } from '@/lib/posts';
import UseCasesMobile from "@/components/PageComponents/HomePage/UseCasesMobile";
import Head from "next/head";
import Ratings from "@/components/PageComponents/HomePage/Ratings";
import Layout from "@/components/Layout";
import { useDevice } from "@/utils/useDevice";

gsap.registerPlugin(ScrollTrigger);

import dynamic from "next/dynamic";

const SideMenu = dynamic(() => import("@/components/SideMenu"));

export default function Home({ recentPosts }) {
  const { isDesktop } = useDevice();
  const [isClient, setIsClient] = useState(false);

  const sections = [
    { id: '#hero', name: 'Introduction' },
    { id: '#features', name: 'Features' },
    { id: '#use-cases', name: 'Use Cases' },
    { id: '#pricing', name: 'Pricing' },
    { id: '#about', name: 'About' },
    { id: '#blogs', name: 'Blog' },
    { id: "#faqs", name: "FAQ's" },
  ];

  useEffect(() => {
    setIsClient(true);
    const headings = document.querySelectorAll('.text-anim');

    headings.forEach((heading) => {
      let ctx = gsap.context(() => {
        const textAnim = new SplitType(heading, { types: 'words' });
        let animWord = heading.querySelectorAll('.word');

        gsap.from(animWord, {
          scrollTrigger: {
            trigger: heading,
            start: 'top 80%',
          },
          duration: 0.6,
          yPercent: 100,
          stagger: 0.04,
        });
      });
      return () => ctx.revert();
    });
  }, []);

  useEffect(() => {
    const fadeUps = document.querySelectorAll('.fadeUp');

    let ctx = gsap.context(() => {
      fadeUps.forEach((fadeUp) => {
        gsap.fromTo(
          fadeUp,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'Power3.out',
            scrollTrigger: {
              trigger: fadeUp,
              start: 'top 85%',
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const pricingCards = document.querySelectorAll('.pricing-card-wrapper .pricing-card');
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pricing-card-wrapper",
        start: "top 85%",
      }
    });

    tl.fromTo(
      pricingCards,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'Power2.out',
      }
    );
  }, []);

  useEffect(() => {
    const blogCards = document.querySelectorAll('.blog-card-wrapper .blog-cards');
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".blog-card-wrapper",
        start: "top 85%",
      }
    });

    tl.fromTo(
      blogCards,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'Power2.out',
      }
    );
  }, []);

  useEffect(() => {
    const fadeRights = document.querySelectorAll('.fadeRight');

    let ctx = gsap.context(() => {
      fadeRights.forEach((fadeRight) => {
        gsap.fromTo(
          fadeRight,
          {
            opacity: 0,
            x: 100,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.05,
            ease: 'Power3.out',
            scrollTrigger: {
              trigger: fadeRight,
              start: 'top 85%',
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const lineDraws = document.querySelectorAll('.lineDraw');

    let ctx = gsap.context(() => {
      lineDraws.forEach((lineDraw) => {
        gsap.fromTo(
          lineDraw,
          {
            scaleX: 0,
            transformOrigin: 'left'
          },
          {
            scaleX: 1,
            duration: 1,
            ease: 'Power4.out',
            scrollTrigger: {
              trigger: lineDraw,
              start: 'top 90%',
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const scaleAnims = document.querySelectorAll('.scaleAnim');

    let ctx = gsap.context(() => {
      scaleAnims.forEach((scaleAnim) => {
        gsap.fromTo(
          scaleAnim,
          {
            scale: 1.1,
            y: 40,
            opacity: 0,
            transformOrigin: 'bottom center'
          },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: 'Power4.out',
            scrollTrigger: {
              trigger: scaleAnim,
              start: 'top bottom',
              end: 'bottom 85%',
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <NextSeo
        canonical="https://www.patronum.io"
        languageAlternates={[{
          hrefLang: 'en-US',
          href: 'https://www.patronum.io'
        }]}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "@id": "https://www.patronum.io/#webpage",
                "url": "https://www.patronum.io",
                "name": "Patronum - Best Platform for Google Workspace (GSuite) Management",
                "description": "Patronum provides a better way to Google Workspace (GSuite) Management. Patronum fully automates all the administrator and user tasks to ensure an efficient, effective and secure process.",
                "datePublished": "2020-12-21T12:01:00+00:00",
                "dateModified": "2024-04-04T12:00:00+00:00",
                "publisher": {
                  "@type": "Organization",
                  "name": "Patronum",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.patronum.io/logo.svg",
                  }
                },
                "about": {
                  "@id": "https://www.patronum.io/#organization"
                },
                "isPartOf": {
                  "@id": "https://www.patronum.io/#website"
                },
                "inLanguage": "en_US",
              }
            ),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": "Patronum - Best Platform for Google Workspace (GSuite) Management",
                "keywords": "Patronum,Google Workspace,GSuite Management",
                "@id": "https://www.patronum.io/#richSnippet",
                "datePublished": "2020-12-21T12:01:00+00:00",
                "dateModified": "2024-04-04T12:00:00+00:00",
                "url": "https://www.patronum.io",
                "name": "Patronum - Best Platform for Google Workspace (GSuite) Management",
                "description": "Patronum provides a better way to Google Workspace (GSuite) Management. Patronum fully automates all the administrator and user tasks to ensure an efficient, effective and secure process.",
                "author": {
                  "name": "Patronum",
                  "@id": "https://www.patronum.io/admin/",
                },
                "publisher": {
                  "@id": "https://www.patronum.io/#organization"
                },
                "mainEntityOfPage": {
                  "@id": "https://www.patronum.io/#webpage"
                },
                "image": {
                  "@id": "https://www.patronum.io/assets/seo/homepage.jpg",
                },
                "isPartOf": {
                  "@id": "https://www.patronum.io/#website"
                },
                "inLanguage": "en_US",
              }
            ),
          }}
        />
      </Head>
      {isClient && isDesktop && <SideMenu sections={sections} />}
      <Layout>
        <main>
          <Hero />
          <Ratings />
          <Features />
          {isClient && (
            <>
              {isDesktop ? (
                <UseCases />
              ) : (
                <UseCasesMobile />
              )}
            </>
          )}
          <Pricing />
          <About />
          <Testimonial />
          <RelatedPosts
            sectionPara={"Discover a World of Knowledge with Expert Tips, In-Depth Tricks, Latest News, and Comprehensive Resources for Mastering Google Workspace."}
            recentPosts={recentPosts}
            sectionTitle={"Our Latest Blogs"}
          />
          <Faqs />
        </main>
      </Layout>
    </>
  );
}

export async function getStaticProps() {

  const recentPosts = await getHomePagePosts();

  return {
    props: {
      recentPosts,
    },
    revalidate: 500,
  };
}