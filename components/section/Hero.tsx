import React from 'react'
import { FlipWords } from '../ui/FlipWords'
import { H1 } from '../ui/h1'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="relative flex h-screen items-center">
      <Image
        src={'/images/me.svg'}
        height={800}
        width={800}
        alt={'Hero BG'}
        className="absolute bottom-0 right-0 lg:-right-40"
        // style={{
        //   filter: 'invert(1)',
        // }}
      />
      <H1>
        Hello! I&apos;m Aufi, <br /> a{' '}
        <FlipWords
          words={[
            'Software Developer',
            'Project Manager',
            // funny words
            'Human Being',
            'Coffee Drinker',
            'Cat Lover',
          ]}
        />
      </H1>
    </div>
  )
}

export default Hero
