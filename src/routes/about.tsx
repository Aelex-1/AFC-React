import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect } from 'react'

import type { HistoryTypes } from '../content'
import { historyData } from '../content'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: "AFC | About Us" },
      { name: 'description', content: "Learn about Arthur’s Fried Chicken, our story, our values, and our journey as a growing homegrown food brand in Mindanao." },

      // Standard Open Graph Meta Tags
      { property: 'og:site_name', content: "Arthur's Fried Chicken" },
      { property: 'og:title', content: "AFC About Us" },
      { property: 'og:description', content: "Learn about Arthur’s Fried Chicken, our story, our values, and our journey as a growing homegrown food brand in Mindanao." },
      { property: 'og:image', content: './assets/images/seoimage.jpg' },
      { property: 'og:url', content: 'https://arthursfriedchicken.com/about' },
      { property: 'og:type', content: 'website' },

      // Twitter Card Meta Tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'AFC About Us' },
      { name: 'twitter:description', content: "Learn about Arthur’s Fried Chicken, our story, our values, and our journey as a growing homegrown food brand in Mindanao." },
      { name: 'twitter:image', content: './assets/images/seoimage.jpg' },
      { name: 'twitter:url', content: 'https://arthursfriedchicken.com/about' },
    ],
  }),
  component: RouteComponent,
})

const missionData = [
  {
    imageSrc: './assets/images/about/about-chicken.jpg',
    title: 'DELICIOUS FOOD',
    subTitle: 'Made to satisfy'
  },
  {
    imageSrc: './assets/images/about/about-money.jpg',
    title: 'AFFORDABLE PRICE',
    subTitle: 'Made for everyone'
  },
  {
    imageSrc: './assets/images/about/about-happy.jpg',
    title: 'GLADNESS IN EVERY MEAL',
    subTitle: 'Served from joyful hearts'
  },
]

const Circle = () => {
  return (
    <div className='node-circle rounded-full w-4 h-4 bg-blue-500 mx-auto'></div>
  )
}

const HistoryCard: React.FC<HistoryTypes> = ({ historyYear, historyTitle, historyDescription, historyImage }) => {
  return (
    <div className='node-card flex flex-col w-full gap-y-2 border-gray-200 border shadow-md rounded-lg p-4'>
      <img className='aspect-ratio-7/4 h-auto object-cover rounded-lg md:hidden' src={historyImage} loading="lazy" alt={historyTitle} />
      <div className='font-semibold text-lg'>
        {`${historyYear} ${historyTitle}`}

      </div>
      <div>
        {historyDescription}
      </div>
    </div>
  )
}

const History = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("node-show");
        } else {
          entry.target.classList.add("node-retain");
          entry.target.classList.remove("node-show");
        }
      })
    }, { rootMargin: "-300px 0px -200px 0px" });

    const nodeElements = document.querySelectorAll(".node");
    nodeElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className='relative'>
      {/* line pillar thing */}
      <div className="absolute left-2 top-0 bottom-0 w-px bg-gray-300 md:left-1/2 md:-translate-x-1/2" />

      <div className="space-y-10 md:space-y-12">

        {historyData.map((data, i) => {
          const isLeft = i % 2 === 0;

          return (
            <div key={i} className='node'>
              {/* mobile screen */}
              <div className="flex items-start gap-4 md:hidden">
                <div className="relative z-10 shrink-0">
                  <Circle />
                </div>
                <div className="flex-1 min-w-0">
                  <HistoryCard historyYear={data.historyYear} historyTitle={data.historyTitle} historyDescription={data.historyDescription} historyImage={data.historyImage} />
                </div>
              </div>

              {/* desktop or tab screen */}
              <div className="hidden md:grid grid-cols-[1fr_2rem_1fr] items-center">
                <div className="pr-6 flex justify-end">
                  {isLeft ? <HistoryCard historyYear={data.historyYear} historyTitle={data.historyTitle} historyDescription={data.historyDescription} historyImage={data.historyImage} /> :
                    <img className='node-card aspect-ratio-7/4 h-auto border border-gray-200 shadow-md rounded-lg' src={data.historyImage} loading="lazy" alt={data.historyTitle} />}

                </div>
                <div className="relative z-10 flex justify-center">
                  <Circle />
                </div>
                <div className="pl-6">
                  {isLeft ? <img className='node-card aspect-ratio-7/4 h-auto border border-gray-200 shadow-md rounded-lg' src={data.historyImage} loading="lazy" alt={data.historyTitle} /> :
                    <HistoryCard historyYear={data.historyYear} historyTitle={data.historyTitle} historyDescription={data.historyDescription} historyImage={data.historyImage} />}
                </div>
              </div>
            </div>
          )
        })

        }



      </div>
    </div>
  )
}

function RouteComponent() {
  return (
    <main className="min-w">
      <section className="relative">
        <img src='./assets/images/about/about-store.webp'
          className='aspect-ratio-4/1'
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex justify-center items-center h-fit w-fit bg-(--color-primary) rounded-lg shadow-md">
          <h2 className="text-white font-bold text-center px-10 py-2">OUR MISSION</h2>
        </div>
      </section>

      <section className="page-wrap pt-14">
        <div className='text-center pb-4 md:pb-6'>
          <h5 className=' text-gray-700'>AFC's mission is to provide:</h5>
        </div>
        <div className='flex flex-col gap-y-6  md:grid md:grid-cols-3 md:place-items-center'>
          {missionData.map((entry) => (
            <div className='flex flex-col items-center text-center'>
              <img src={entry.imageSrc} className='aspect-4/5 max-h-60 rounded-lg shadow-md mb-4' />
              <h4 className='font-extrabold text-(--color-primary)'>{entry.title}</h4>
              <small className='italic text-gray-700'>{entry.subTitle}</small>
            </div>
          ))}
        </div>
        <hr className="mt-8 border-gray-200" />
      </section>


      <section className="page-wrap mx-auto pt-8 ">
        <div className='text-center '>
          <h2 className="text-(--color-primary) font-boldpx-10 py-2">OUR HISTORY</h2>
          <h5 className=' text-gray-700'>AFC's progress and milestones throughout the years</h5>
        </div>
      </section>

      <section className="page-wrap mx-auto py-8">
        <History />
      </section>

      <section className="page-wrap-red">
        <div className="split-section split-section--flip md:grid-cols-[7fr_4fr]">

          <div className='split-media '>
            <img
              className="max-h-120"
              src="./assets/images/about/branch-map.webp"
              loading="lazy"
              alt="Map of Philippines with AFC locations" />

          </div>

          <div className="split-content">

            <h3 className="font-bold">OUR VISION</h3>
            <h4>AFC will soon be available to Visayas and Luzon</h4>
            <p>
              Arthur’s Fried Chicken aims to lead Mindanao by 2030, expand to Visayas by 2032, and grow across the Philippines—creating jobs, developing leaders, and building a better future for Filipino families.
            </p>
            <p>
              With rapid growth on the horizon, we invite you to join us on this exciting path to success.
            </p>
            <button className="mt-2 shrink-0 font-semibold tracking-tight md:text-left">
              <Link
                to="/franchise"
                className="button-secondary text-sm px-3 py-1.5 md:px-4 md:py-2"
              >
                Explore Franchise
              </Link>
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
