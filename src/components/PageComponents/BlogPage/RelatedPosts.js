import React from 'react';
import { format } from 'date-fns';
import PrimaryButton from '@/components/PageLayout/Button/PrimaryButton';
import Link from 'next/link';

function RelatedPosts({ recentPosts, currentSlug, sectionTitle, sectionPara }) {

    const filteredPosts = recentPosts.filter(post => post.slug !== currentSlug).slice(0, 3);
    
    const formattedDates = filteredPosts.map(post => format(new Date(post.date), 'MMMM dd, yyyy'));

    return (
        <>
            <section className='recent-blogs' id='blogs'>
                <div className='container'>
                    <div className='content'>
                        <div className='section-head'>
                            <h2 className='title-4xl'>
                                <span>
                                    {sectionTitle}
                                </span>
                            </h2>
                            {sectionPara && (
                                <p className='content-p lg:w-[40%] w-[90%] fadeUp mt-8'>
                                {sectionPara}
                                </p>
                            )}
                        </div>

                        <div className='blog-card-wrapper mb-16'>
                            {filteredPosts.map((post, index) => (
                                <div key={index} className="blog-cards">
                                    <div className="blog-card hover:shadow-lg">
                                        <div className="blog-card-content">
                                            {post.featuredImage && (
                                                <div className="blog-card-image">
                                                    <img 
                                                        height="325"
                                                        width="460"
                                                        src={post.featuredImage.node.sourceUrl} 
                                                        loading="lazy" 
                                                        alt={`${post.title} Image`} 
                                                        title={`${post.title} Image`}/>
                                                </div>
                                            )}
                                            <div className="blog-card-details">
                                                <div className="blog-card-author">
                                                    <p className="head">By {post.author.node.name}</p>
                                                    <p className="date">{formattedDates[index]}</p>
                                                </div>
                                                    <h5 className="blog-card-title aeonik">
                                                        {post.title}
                                                    </h5>
                                                <Link href={post.slug} className="link-btn">
                                                    <span className="btn-text">Read More</span>
                                                    <span className="screen-reader-text">About This Blog</span>
                                                    <span className="btn-images">
                                                        <div>
                                                            <svg className="" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0 9.27361C2.25898 9.27361 4.5105 9.26604 6.76947 9.26604C15.4997 9.26604 24.2299 9.26604 32.9602 9.26604C33.1018 9.26604 33.2509 9.26604 33.3777 9.26604C30.8876 6.74513 28.4049 4.22423 25.9521 1.74117C26.5784 1.09769 27.1375 0.537491 27.6669 0C31.0814 3.4672 34.5556 6.98738 37.9925 10.4773C34.5482 13.9672 31.0814 17.4874 27.6296 20.9924C27.1003 20.4549 26.5486 19.9023 25.982 19.327C28.4571 16.8212 30.9472 14.3003 33.4373 11.7794C33.4299 11.7491 33.4224 11.7188 33.415 11.6885C33.2733 11.6885 33.1391 11.6885 32.9975 11.6885C22.1573 11.6885 11.3172 11.6885 0.484599 11.6885C0.320581 11.6885 0.164018 11.6885 0 11.681C0 10.8861 0 10.0761 0 9.27361Z" fill="currentColor"/>
                                                            </svg>
                                                            <svg className="" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0 9.27361C2.25898 9.27361 4.5105 9.26604 6.76947 9.26604C15.4997 9.26604 24.2299 9.26604 32.9602 9.26604C33.1018 9.26604 33.2509 9.26604 33.3777 9.26604C30.8876 6.74513 28.4049 4.22423 25.9521 1.74117C26.5784 1.09769 27.1375 0.537491 27.6669 0C31.0814 3.4672 34.5556 6.98738 37.9925 10.4773C34.5482 13.9672 31.0814 17.4874 27.6296 20.9924C27.1003 20.4549 26.5486 19.9023 25.982 19.327C28.4571 16.8212 30.9472 14.3003 33.4373 11.7794C33.4299 11.7491 33.4224 11.7188 33.415 11.6885C33.2733 11.6885 33.1391 11.6885 32.9975 11.6885C22.1573 11.6885 11.3172 11.6885 0.484599 11.6885C0.320581 11.6885 0.164018 11.6885 0 11.681C0 10.8861 0 10.0761 0 9.27361Z" fill="currentColor"/>
                                                            </svg>
                                                        </div>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="section-btn-container">
                            <PrimaryButton link="/blog" btnText="View All Blogs"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default RelatedPosts;