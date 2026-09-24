import { blogsData, type BlogsType } from '#/content';
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/blogs/')({
  head: () => ({
    meta: [
      { title: "AFC | Blogs" },
      { name: 'description', content: "Stay updated with the latest AFC news, stories, events, promotions, and updates from Arthur’s Fried Chicken." },

      // Standard Open Graph Meta Tags
      { property: 'og:site_name', content: "Arthur's Fried Chicken" },
      { property: 'og:title', content: "AFC Blog Page" },
      { property: 'og:description', content: "Stay updated with the latest AFC news, stories, events, promotions, and updates from Arthur’s Fried Chicken." },
      { property: 'og:image', content: './assets/images/seoimage.jpg' },
      { property: 'og:url', content: 'https://arthursfriedchicken.com/blogs' },
      { property: 'og:type', content: 'website' },

      // Twitter Card Meta Tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'AFC Blog Page' },
      { name: 'twitter:description', content: "Stay updated with the latest AFC news, stories, events, promotions, and updates from Arthur’s Fried Chicken." },
      { name: 'twitter:image', content: './assets/images/seoimage.jpg' },
      { name: 'twitter:url', content: 'https://arthursfriedchicken.com/blogs' },
    ],
  }),
  component: RouteComponent,
})

const OtherBlogsCard = ({ entry }: { entry: BlogsType }) => (
  <Link
    to={'/blogs/$blogId'}
    params={{ blogId: String(entry.id) }}
    className='w-full sm:w-[48%] lg:w-[31%] bg-white border border-gray-300 rounded-lg group'
  >
    <img
      src={entry.image}
      alt={entry.alt}
      loading='lazy'
      className='w-full h-60 object-cover rounded-t-lg' />
    <h3 className="text-lg font-bold pt-4 px-5">{entry.category}</h3>
    <h2 className="text-2xl font-bold py-1.5 px-5 line-clamp-2 group-hover:text-(--color-primary)">{entry.title}</h2>
    <p className="text-md pb-3 px-5">{entry.date}</p>
  </Link>
);

function RouteComponent() {
  return (
    <main className='min-w-0'>
      <section className='page-wrap py-8'>
        <h3 className='pb-4'>FEATURED BLOG</h3>
        <div className='pb-8'>
          {blogsData.map((entry) => {
            return (
              <Link
                to={'/blogs/$blogId'}
                params={{ blogId: String(entry.id) }}
              >
                {entry?.featured &&
                  <div className='bg-white border border-gray-300 rounded-lg shadow-lg'>
                    <img
                      src={entry.image}
                      alt={entry.alt}
                      className='w-full max-h-80 object-cover rounded-t-lg '
                    />
                    <h3 className="text-lg font-bold pt-4 px-5">{entry.category}</h3>
                    <h2 className="text-2xl font-bold py-1.5 px-5 line-clamp-2 group-hover:text-(--color-primary)">{entry.title}</h2>
                    <p className="text-md pb-3 px-5">{entry.date}</p>
                    <p className="text-md pb-3 px-5">{entry?.summary} <span className='font-bold text-(--color-primary)'>Continue Reading</span></p>
                  </div>}
              </Link>
            )
          })}
        </div>


        <h4 className='py-4'>OTHER STORIES</h4>
        <div className='flex justify-between gap-y-8 flex-wrap'>
          {blogsData.map((entry, index) => (
            <>
              {!entry?.featured && <OtherBlogsCard entry={entry} key={index} />}
            </>
          ))}
        </div>
      </section>
    </main>
  )
}
