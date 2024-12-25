"use client";

import React, { useState } from "react";
import { gsap } from "gsap";
import { Expo } from "gsap/gsap-core";
import { aboutMeCards } from "../constants/about";

const AboutCards: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  // Shuffle animation for the card
  const shuffleCard = (card: HTMLElement) => {
    gsap.fromTo(
      card,
      { x: 410, y: -15, scale: 0.9, ease: Expo.easeOut },
      { x: 0, y: 0, scale: 1, ease: Expo.easeIn, duration: 0.6 }
    );
  };

  // Hover effect to scale the card
  const hoverEffect = (card: HTMLElement, scale: number) => {
    gsap.to(card, { scale, duration: 0.3, ease: Expo.easeOut });
  };

  const handleClick = (
    e: React.MouseEvent<HTMLDivElement>,
    cardIndex: number
  ) => {
    const target = e.currentTarget;
    const updatedCount = count < 3 ? count + 1 : 0;

    // Swap the image index between 0 and 1 (toggle images)
    const updatedImageIndex = aboutMeCards[cardIndex].imageIndex === 0 ? 1 : 0;
    aboutMeCards[cardIndex].imageIndex = updatedImageIndex;

    if (count < 3) {
      target.classList.remove("z-50");
      target.classList.add("z-10");
    } else {
      document.querySelectorAll(".tarot-card").forEach((el) => {
        el.classList.remove("z-10");
      });
    }

    setCount(updatedCount);
    shuffleCard(target);
  };

  return (
    <div className="h-full w-full mx-auto rounded-3xl relative overflow-hidden flex items-center justify-center">
      {aboutMeCards.map((card, index) => (
        <div
          key={card.id}
          onClick={(e) => handleClick(e, index)}
          onMouseEnter={(e) => hoverEffect(e.currentTarget, 1.1)} // Scale up on hover
          onMouseLeave={(e) => hoverEffect(e.currentTarget, 1)} // Scale back to normal on hover out
          className={`tarot-card absolute rounded-2xl border-2 border-white shadow-2xl cursor-pointer transition-all duration-300 ${
            index === 0
              ? "rotate-[-3deg] z-50"
              : index === 1
              ? "rotate-[4deg]"
              : index === 2
              ? "rotate-[10deg]"
              : "rotate-[4deg]"
          } 
          // Responsive card size and position
          md:w-[400px] md:h-[400px] md:scale-100 
          sm:w-[300px] sm:h-[300px] sm:scale-95 
          xs:w-[250px] xs:h-[250px] xs:scale-90`}
        >
          <img
            src={card.images[card.imageIndex]} // Use the imageIndex to select the image
            alt={card.alt}
            className="lg:w-full w-[250px] bg-red-400  h-[250px] md:w-[300px] md:h-[300px] lg:h-full object-cover rounded-2xl"
          />
        </div>
      ))}
    </div>
  );
};

export default AboutCards;
