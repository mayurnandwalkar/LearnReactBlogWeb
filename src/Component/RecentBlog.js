import React from 'react'
import blog1img from '../assets/img/blog/blog-1.jpg'
import blog2img from '../assets/img/blog/blog-2.jpg'
import blog3img from '../assets/img/blog/blog-3.jpg'



const RecentBlog = () => {
    return (
        <>
            <section id="recent-posts" class="recent-posts sections-bg">
                <div class="container" data-aos="fade-up">
                    <div class="section-header">
                        <h2>Recent Blog Posts</h2>
                        <p>Consequatur libero assumenda est voluptatem est quidem illum et officia imilique qui vel architecto accusamus fugit aut qui distinctio</p>
                    </div>
                    <div class="row gy-4">
                        <div class="col-xl-4 col-md-6">
                            <article>
                                <div class="post-img">
                                    <img src={blog1img} alt="" class="img-fluid"/>
                                </div>

                                <p class="post-category">Politics</p>

                                <h2 class="title">
                                    <a href="blog-details.html">Dolorum optio tempore voluptas dignissimos</a>
                                </h2>

                                <div class="d-flex align-items-center">
                                    <img src="assets/img/blog/blog-author.jpg" alt="" class="img-fluid post-author-img flex-shrink-0"/>
                                        <div class="post-meta">
                                            <p class="post-author">Maria Doe</p>
                                            <p class="post-date">
                                                <time datetime="2022-01-01">Jan 1, 2022</time>
                                            </p>
                                        </div>
                                </div>

                            </article>
                        </div> 

                        <div class="col-xl-4 col-md-6">
                            <article>

                                <div class="post-img">
                                    <img src={blog2img} alt="" class="img-fluid"/>
                                </div>

                                <p class="post-category">Sports</p>

                                <h2 class="title">
                                    <a href="blog-details.html">Nisi magni odit consequatur autem nulla dolorem</a>
                                </h2>

                                <div class="d-flex align-items-center">
                                    <img src={blog1img} alt="" class="img-fluid post-author-img flex-shrink-0"/>
                                        <div class="post-meta">
                                            <p class="post-author">Allisa Mayer</p>
                                            <p class="post-date">
                                                <time datetime="2022-01-01">Jun 5, 2022</time>
                                            </p>
                                        </div>
                                </div>

                            </article>
                        </div>

                        <div class="col-xl-4 col-md-6">
                            <article>

                                <div class="post-img">
                                    <img src={blog3img} alt="" class="img-fluid"/>
                                </div>

                                <p class="post-category">Entertainment</p>

                                <h2 class="title">
                                    <a href="blog-details.html">Possimus soluta ut id suscipit ea ut in quo quia et soluta</a>
                                </h2>

                                <div class="d-flex align-items-center">
                                    <img src="assets/img/blog/blog-author-3.jpg" alt="" class="img-fluid post-author-img flex-shrink-0"/>
                                        <div class="post-meta">
                                            <p class="post-author">Mark Dower</p>
                                            <p class="post-date">
                                                <time datetime="2022-01-01">Jun 22, 2022</time>
                                            </p>
                                        </div>
                                </div>

                            </article>
                        </div> 
                    </div> 

                </div>
            </section>
        </>

    )
}

export default RecentBlog