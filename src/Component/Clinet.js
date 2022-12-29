import React from 'react'
import Client1 from '../assets/img/clients/client-1.png'
import Client2 from '../assets/img/clients/client-2.png'
import Client3 from '../assets/img/clients/client-3.png'
import Client4 from '../assets/img/clients/client-4.png'
import Client5 from '../assets/img/clients/client-5.png'
import Client6 from '../assets/img/clients/client-6.png'

const Clinet = () => {
  return (
    <>
    <section id="clients" class="clients">
      <div class="container" data-aos="zoom-out">

        <div class="clients-slider swiper">
          <div class="swiper-wrapper align-items-center">
            <div class="swiper-slide"><img src={Client1} class="img-fluid" alt=""/></div>
            <div class="swiper-slide"><img src={Client2} class="img-fluid" alt=""/></div>
            <div class="swiper-slide"><img src={Client3} class="img-fluid" alt=""/></div>
            <div class="swiper-slide"><img src={Client4} class="img-fluid" alt=""/></div>
            <div class="swiper-slide"><img src={Client5} class="img-fluid" alt=""/></div>
            <div class="swiper-slide"><img src={Client6} class="img-fluid" alt=""/></div>

           
          </div>
        </div>

      </div>
    </section>
    </>
  )
}

export default Clinet