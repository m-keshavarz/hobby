import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType, EmblaPluginType } from "embla-carousel";

import AutoPlay, {
  AutoplayType,
  AutoplayOptionsType,
} from "embla-carousel-autoplay";

import "./styles.css";
import { Box, Flex, Text, chakra } from "@chakra-ui/react";
import { fakeData } from "./fakeData";

let renderCount = 0;

const Carousel = () => {
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [ref, carouselApi] = useEmblaCarousel({ loop: true }, [
    AutoPlay({ stopOnInteraction: false }),
  ]);

  renderCount++;

  const onInit = useCallback((carouselApi: EmblaCarouselType) => {
    setScrollSnaps(carouselApi.scrollSnapList());
  }, []);

  const reset = useCallback(() => {
    carouselApi?.plugins?.()?.autoplay.reset();
  }, [carouselApi]);

  const onSelect = useCallback(
    (carouselApi: EmblaCarouselType) => {
      setSelectedIndex(carouselApi.selectedScrollSnap());
      reset();
    },
    [reset]
  );

  //   useEffect(() => {
  //     if (!carouselApi) return;

  //     onSelect(carouselApi);

  //     carouselApi.on("select", () => carouselApi.plugins().autoplay.reset());
  //   }, [carouselApi, onSelect]);

  useEffect(() => {
    if (!carouselApi) return;

    onInit(carouselApi);
    onSelect(carouselApi);
    carouselApi.on("reInit", onInit);
    carouselApi.on("reInit", onSelect);
    carouselApi.on("select", onSelect);
  }, [carouselApi, onInit, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      carouselApi && carouselApi.scrollTo(index);
    },
    [carouselApi]
  );

  return (
    <Box p="3rem">
      <Text>render count is: {renderCount}</Text>
      <Box overflow="hidden" rounded="1rem" ref={ref}>
        <Flex>
          {fakeData.map((item, index) => {
            return (
              <Box
                flex="0 0 100%"
                w="100%"
                h="200px"
                key={index}
                bg={item.color}
              ></Box>
            );
          })}
        </Flex>
      </Box>
      <Flex mt="2rem" justifyContent="center" alignItems="center" gap="0.5rem">
        {scrollSnaps.map((_item, index) => {
          return (
            <chakra.span
              w="2rem"
              h="0.25rem"
              bg={selectedIndex === index ? "grey" : "lightgrey"}
              rounded="0.25rem"
              key={index}
              onClick={() => scrollTo(index)}
            ></chakra.span>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Carousel;

// const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [AutoPlay()]);

// useEffect(() => {
//   if (emblaApi) {
//     console.log(emblaApi.slideNodes());
//   }
// }, [emblaApi]);

// return (
//   <div className="embla" ref={emblaRef}>
//     <div className="embla__container">
//       <div className="embla__slide">Slide 1</div>
//       <div className="embla__slide">Slide 2</div>
//       <div className="embla__slide">Slide 3</div>
//     </div>
//   </div>
// );
