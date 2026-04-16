import { createBrowserRouter } from 'react-router-dom'
import App from '@/App'
import Home from '@/pages/Home'
import CarouselPage from '@/pages/Carousel'
import Counter from './pages/Counter'

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'carousel',
        element: <CarouselPage />,
      },
      {
        path: 'counter',
        element: <Counter/>
      }
    ],
  },
])
