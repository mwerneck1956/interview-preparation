import { fireEvent, render, screen } from '@testing-library/react'
import Carousel from './index'


const slidesMock = [
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
describe('Carousel tests', () => {
  beforeEach(() => {
    render(<Carousel slides={slidesMock} />)
  })

  it('Should render the carousel with the first item', async () => {
    expect(screen.getByText(slidesMock[0].title)).toBeInTheDocument();
    expect(screen.getByText(slidesMock[0].description))
  })

  it('Carousel should go to next slide when next btn is clicked', async () => {
    const nextBtn = screen.getByRole('button', {
      name: 'Next'
    })

    fireEvent.click(nextBtn)

    await screen.findByRole(slidesMock[1].title);


  })
})