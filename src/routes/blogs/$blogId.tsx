import { createFileRoute } from '@tanstack/react-router'
import { blogsData } from '#/content';


export const Route = createFileRoute('/blogs/$blogId')({
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

function RouteComponent() {
    const { blogId } = Route.useParams()

    return (
        <main className='min-w-0'>
            <section className='py-8'>
                <div className='page-wrap flex flex-col items-start gap-y-4'>
                    <img
                        src={blogsData[Number(blogId)].image}
                        alt={blogsData[Number(blogId)].alt}
                        className='max-h-[70vh] object-cover rounded-xl shadow-xl border border-gray-400 mx-auto'
                    />
                    <div className=''>
                        <h2>{blogsData[Number(blogId)].title}</h2>
                        <p>{blogsData[Number(blogId)].date}</p>
                    </div>

                    <div className=''>
                        {blogsData[Number(blogId)].content.map((entry) => (
                            <p className='pb-4' >{entry}</p>
                        ))}
                    </div>

                </div>
            </section>
        </main>
    )
}
