import { HeadContent, Outlet, createRootRoute } from '@tanstack/react-router'
import NotFoundPage from '#/components/NotFoundPage'

import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    links: [{ rel: 'icon', href: '/assets/logo/favicon.ico' }],
    meta: [
      { title: "AFC" },

      {
        name: 'description',
        content: "Welcome to Arthur's Fried Chicken, your destination for delicious and crispy fried chicken!"
      },

      { charSet: 'UTF-8', },

      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0',
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: () => <NotFoundPage />,
})

function RootComponent() {
  return (
    <div className="min-h-dvh grid grid-rows-[auto_1fr_auto] min-w-0">
      <HeadContent />
      <Header />
      <Outlet />
      <Footer />
      <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'TanStack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </div>
  )
}
