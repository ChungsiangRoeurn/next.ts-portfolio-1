import { motion, useMotionValue, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { aboutMeCards } from '../constants/about'

interface CardRotateProps {
  children: React.ReactNode
  onSendToBack: () => void
  sensitivity: number
  isMobile: boolean
}

function CardRotate({ children, onSendToBack, sensitivity, isMobile }: CardRotateProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-100, 100], isMobile ? [0, 0] : [60, -60])
  const rotateY = useTransform(x, [-100, 100], isMobile ? [0, 0] : [-60, 60])

  function handleDragEnd(_: never, info: { offset: { x: number; y: number } }) {
    if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
      onSendToBack()
    } else {
      x.set(0)
      y.set(0)
    }
  }

  return (
    <motion.div
      className="absolute cursor-grab"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: 'grabbing' }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  )
}

interface StackProps {
  randomRotation?: boolean
  sensitivity?: number
  sendToBackOnClick?: boolean
  animationConfig?: { stiffness: number; damping: number }
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false,
}: StackProps) {
  const [cards, setCards] = useState(
    aboutMeCards.map((card, index) => ({
      ...card,
      imageIndex: 0,
      zIndex: index,
    })),
  )

  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const cardWidth = isMobile ? 300 : 450
  const cardHeight = isMobile ? 300 : 450

  const sendToBack = (id: number) => {
    setCards((prev) => {
      const newCards = [...prev]
      const index = newCards.findIndex((card) => card.id === id)
      const [card] = newCards.splice(index, 1)
      newCards.unshift(card)
      return newCards
    })
  }

  return (
    <div
      className="relative mx-auto"
      style={{
        width: cardWidth,
        height: cardHeight,
        perspective: 600,
      }}
    >
      {cards.map((card, index) => {
        const randomRotate = randomRotation ? Math.random() * 10 - 5 : 0
        const scaleValue = isMobile ? 0.95 : Math.max(0.8, 1 + index * 0.06 - cards.length * 0.06)

        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
            isMobile={isMobile}
          >
            <motion.div
              className="rounded-2xl overflow-hidden border-2 border-white shadow-xl"
              onClick={sendToBackOnClick ? () => sendToBack(card.id) : undefined}
              animate={{
                rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                scale: scaleValue,
                transformOrigin: '90% 90%',
              }}
              initial={false}
              transition={{
                type: 'spring',
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping,
              }}
              style={{
                width: cardWidth,
                height: cardHeight,
              }}
            >
              <Image
                src={card.images[card.imageIndex].replace('./', '/')}
                alt={card.alt}
                layout="fill"
                objectFit="cover"
                className="pointer-events-none"
              />
            </motion.div>
          </CardRotate>
        )
      })}
    </div>
  )
}
