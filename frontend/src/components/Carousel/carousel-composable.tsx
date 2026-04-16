import { useCarousel } from './useCarousel'
import './carousel.styles.css'
import { createContext, useContext, type PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
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

interface CarouselContextProps {
    next: () => void;
    prev: () => void;
    currentIndex: number;
    slides: Slide[]
}

function useCarouselContext() {
    const context = useContext(CarouselContext);

    if (!context)
        throw new Error("Should be used within CarouselContext")

    return context
}

const CarouselContext = createContext<CarouselContextProps | undefined>(undefined);


function CarouselRoot(props: Props) {
    const { slides, children } = props;
    const { next, prev, currentIndex } = useCarousel(props.slides?.length);

    return (
        <CarouselContext.Provider value={{ next, prev, currentIndex, slides }}>
            <div className='carousel'>
                {children}
            </div>
        </CarouselContext.Provider>
    )
}

function CarouselSlide() {
    const { currentIndex, slides } = useCarouselContext();

    const slide = slides[currentIndex];

    return (

        <div>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
        </div>

    )
}

function Controls() {
    const { currentIndex, slides, next, prev } = useCarouselContext();

    return (
        <div className='carousel__actions'>
            <button className='carousel__btn' onClick={prev}>
                Prev
            </button>
            <span>{currentIndex + 1} / {slides.length}</span>
            <button className='carousel__btn' onClick={next}>
                Next
            </button>
        </div>
    )
}

export const Carousel = {
    Root: CarouselRoot,
    Slide: CarouselSlide,
    Controls
}
