import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { slidesImages, blogsData } from '../content'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: "AFC" },
      { name: 'description', content: "Welcome to Arthur's Fried Chicken, your destination for delicious and crispy fried chicken!" },

      // Standard Open Graph Meta Tags
      { property: 'og:site_name', content: "Arthur's Fried Chicken" },
      { property: 'og:title', content: "AFC Official Website" },
      { property: 'og:description', content: "Welcome to Arthur's Fried Chicken, your destination for delicious and crispy fried chicken!" },
      { property: 'og:image', content: './assets/images/seoimage.jpg' },
      { property: 'og:url', content: 'https://arthursfriedchicken.com' },
      { property: 'og:type', content: 'website' },

      // Twitter Card Meta Tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'AFC Official Website' },
      { name: 'twitter:description', content: "Welcome to Arthur's Fried Chicken, your destination for delicious and crispy fried chicken!" },
      { name: 'twitter:image', content: './assets/images/seoimage.jpg' },
      { name: 'twitter:url', content: 'https://arthursfriedchicken.com' },
    ],
  }),
  component: Home
})

function Home() {
  return (
    <main className="min-w-0">
      <section>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          loop={true}
          spaceBetween={0}
          slidesPerView={1}
          autoHeight={true}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          className='home-slider w-screen  text-center text-black'
        >

          {slidesImages.map((slide) => (
            <SwiperSlide key={slide.alt} className=''>
              <img
                src={slide.imageWide}
                alt={slide.alt}
                className='w-full object-cover hidden md:block'
              />
              <img
                src={slide.imageMobile}
                alt={slide.alt}
                className='w-full object-cover block md:hidden'
              />
            </SwiperSlide>
          ))}



        </Swiper>
      </section>

      <section className="page-wrap">
        <div className="split-section">

          <div className='split-media'>
            <img
              src="./assets/images/fc.webp"
              alt="Image of AFC Fried Chicken"
            />
          </div>


          <div className="split-content">
            <span className="afc-title text-5xl md:text-6xl text-(--color-primary)">Arthur's Fried Chicken</span>

            <h3 className=" font-bold">Try our Sulit Sarap Value Meals at your nearest AFC store.</h3>

            <div className="flex flex-wrap justify-center gap-4 mt-2 md:justify-start">

              <button className=" shrink-0 font-semibold tracking-tight">
                <Link
                  to="/locations"
                  className="button-primary text-sm px-3 py-1.5 md:px-4 md:py-2"
                >
                  See Locations
                </Link>
              </button>

              <button className="shrink-0 font-semibold tracking-tight">
                <Link
                  to="/menu"
                  className="button-secondary text-sm px-3 py-1.5 md:px-4 md:py-2"
                >
                  Browse Menu
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>


      <section className="page-wrap-red">
        <div className="split-section split-section--flip">

          <div className='split-media'>
            <img
              className="rounded-xl"
              src="./assets/images/about-us.webp"
              loading="lazy"
              alt="Image of AFC Home Opening" />

          </div>

          <div className="split-content">

            <h3 className="font-bold">ABOUT US</h3>

            <p className="">
              <span className="font-bold">Arthur’s Fried Chicken</span> is a beloved local restaurant committed to serving the best and most affordable fried chicken to the Filipino community. What began as a small store with space for just twenty customers has now grown into a thriving enterprise with 8 branches across Mindanao and more are to come soon.
            </p>

            <button className="mt-2 shrink-0 font-semibold tracking-tight md:text-left">
              <Link
                to="/about"
                className="button-secondary text-sm px-3 py-1.5 md:px-4 md:py-2"
              >
                Learn More
              </Link>
            </button>

          </div>
        </div>
      </section>

      <section className="page-wrap">
        <div className="split-section">

          <div className='split-media'>
            <img
              src="./assets/images/franchise-home.webp"
              loading="lazy"
              alt="Image of AFC Ffranchise"
            />
          </div>

          <div className="split-content">

            <h3 className="font-bold">FRANCHISING</h3>

            <p className="">
              Join the AFC family and be part of our rapid growth across Mindanao! Don't miss your chance to bring our irresistible <span className="font-bold">Sulit Sarap Fried Chicken</span> to your community! Contact us today to learn more.
            </p>

            <button className="mt-2 shrink-0 font-semibold tracking-tight md:text-left">
              <Link
                to="/franchise"
                className="button-primary text-sm px-3 py-1.5 md:px-4 md:py-2"
              >
                Franchise Now
              </Link>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-(--color-primary) py-8">
        <div className="page-wrap">

          <div className="flex items-start gap-x-5 justify-between mb-4">
            <div>
              <h3 className="text-white font-bold">BLOGS</h3>

              <p className="text-white">
                Discover our latest news and updates.
              </p>
            </div>

            <button className="shrink-0 font-semibold tracking-tight md:text-left">
              <Link
                to="/blogs"
                className="button-secondary text-sm px-3 py-1.5 md:px-4 md:py-2"
              >
                View All
              </Link>
            </button>
          </div>

          <Swiper
            modules={[Autoplay]}
            loop={true}
            spaceBetween={10}
            slidesPerView={1}
            autoHeight={true}
            autoplay={{ delay: 6000 }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              }
            }}
            className='w-full text-center text-black'
          >

            {blogsData.map((blogs) => (
              <SwiperSlide key={blogs.title}>
                <Link
                  to={'/blogs/$blogId'}
                  params={{ blogId: String(blogs.id) }}
                  className='group'
                >
                  <div className='text-start min-h-full md:min-h-100 bg-white rounded-lg shadow-md '>
                    <img className='w-full h-60 object-cover rounded-t-lg sm:h-60' src={blogs.image} alt={blogs.alt} />
                    <h3 className="text-lg font-bold pt-4 px-5">{blogs.category}</h3>
                    <h2 className="text-2xl font-bold py-1.5 px-5 line-clamp-2 group-hover:text-(--color-primary)">{blogs.title}</h2>
                    <p className="text-md pb-3 px-5">{blogs.date}</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}


          </Swiper>
        </div>

      </section>

    </main>
  )
}
