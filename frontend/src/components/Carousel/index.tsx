import { useCarousel } from './useCarousel'
import './carousel.styles.css'
import { SlideComments } from './comment';

interface Props {
    slides: Slide[]
}

interface Slide {
    title: string;
    description: string;
    comments: {
        id: number,
        comment: string;
    }[]
}


const Carousel = ({ slides }: Props) => {
    const { currentIndex, next, prev } = useCarousel(slides.length)
    const slide = slides[currentIndex]

    return (
        <>
            <div className='carousel'>
                <div key={slide.title}>
                    <h3>{slide.title}</h3>
                    <p>{slide.description}</p>
                </div>

                <div className='carousel__actions'>
                    <button className='carousel__btn' onClick={prev}>
                        Prev
                    </button>
                    <span>{currentIndex + 1} / {slides.length}</span>
                    <button className='carousel__btn' onClick={next}>
                        Next
                    </button>
                </div>
            </div>

            <SlideComments comments={slide.comments} />
        </>

    );
}

export default Carousel;
