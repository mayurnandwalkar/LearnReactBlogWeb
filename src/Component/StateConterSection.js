import React from 'react'
import StatsImg from '../assets/img/stats-img.svg'
const StateConterSection = () => {
    return (
        <>
            <section id="stats-counter" class="stats-counter">
                <div class="container" data-aos="fade-up">
                    <div class="row gy-4 align-items-center">
                        <div class="col-lg-6">
                            <img src={StatsImg} alt="" class="img-fluid" />
                        </div>
                        <div class="col-lg-6">
                            <div class="stats-item d-flex align-items-center">
                                <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter">232</span>
                                <p><strong>Happy Clients</strong> consequuntur quae diredo para mesta</p>
                            </div>
                            <div class="stats-item d-flex align-items-center">
                                <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" class="purecounter">521</span>
                                <p><strong>Projects</strong> adipisci atque cum quia aut</p>
                            </div>
                            <div class="stats-item d-flex align-items-center">
                                <span data-purecounter-start="0" data-purecounter-end="453" data-purecounter-duration="1" class="purecounter">453</span>
                                <p><strong>Hours Of Support</strong> aut commodi quaerat</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="call-to-action" class="call-to-action">
                <div class="container text-center" data-aos="zoom-out">
                    <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox play-btn"></a>
                    <h3>Call To Action</h3>
                    <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <a class="cta-btn" href="#">Call To Action</a>
                </div>
            </section>
        </>
    )
}

export default StateConterSection