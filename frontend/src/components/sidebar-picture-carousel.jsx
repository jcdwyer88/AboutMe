import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export const SidebarPictureCarousel = () => {

    const images = [
        {
            imageNumber: 1,
            src: "./src/assets/images/JD.jpg",
            alt: "Me",
        },
        {
            imageNumber: 2,
            src: "./src/assets/images/JD_Family.jpg",
            alt: "My Family",
        },

    ]

    return (
        <Card>
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 3000,

                    }),
                ]}
                opts={{
                    align: "center",
                    loop: true,
                }}
                className="w-full max-w-sm"
            >
                <CarouselContent>
                    {images.map((image) => (
                        <CarouselItem key={image.imageNumber} className="basis-full">
                            <div className="p-1">
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <img src={image.src} alt={image.alt} style={{borderRadius: 10, boxShadow: '0px 4px 10px black'}}/>
                                    </CardContent>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </Card>

    )
}
