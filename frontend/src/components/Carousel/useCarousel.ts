import { useState, useCallback } from 'react'

export function useCarousel(totalSlides: number) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const next = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides)
    }, [totalSlides])

    const prev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
    }, [totalSlides])

    const goTo = useCallback((index: number) => {
        setCurrentIndex(index)
    }, [])

    return { currentIndex, next, prev, goTo }
}
