import { Carousel } from '@/components/Carousel/carousel-composable'

const slides = [
  {
    title: 'Slide 1',
    description: 'Descrição do primeiro slide',
    comments: [{
      id: 1,
      comment: "Commentario 1"
    }, {
      id: 2,
      comment: "Comentario 2"
    }]
  },
  {
    title: 'Slide 2',
    description: 'Descrição do segundo slide',
    comments: [{
      id: 2,
      comment: 'Comentário 3'
    }],
  },
]

function CarouselPage() {
  return (
    <div>
      <h1>Carousel</h1>
     <Carousel.Root slides={slides}>
      <Carousel.Slide/>
      <Carousel.Controls/>
     </Carousel.Root>
    </div>
  )
}

export default CarouselPage
