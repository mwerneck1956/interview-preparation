import { createBrowserRouter } from 'react-router-dom'
import App from '@/App'
import Home from '@/pages/Home'
import CarouselPage from '@/pages/Carousel'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'carousel',
        element: <CarouselPage />,
      },
    ],
  },
])
