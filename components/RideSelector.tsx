import React, { useState } from 'react'
import Image from 'next/image'
import uberX from '../assets/rides/uberX.png'

const styles = {
  wrapper: `h-full flex flex-col`,
  title: `text-gray-500 text-center text-xs py-2 border-b`,
  carList: `flex flex-col flex-1 overflow-scroll`,
  car: `flex p-3 m-2 items-center border-2 border-white`,
  carImage: `h-14`,
}

const carList: any[] = [
  {
    service: 'UberX',
    iconUrl: uberX,
    priceMultiplier: 1,
  },
]

const RideSelector = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Choose a ride, or swipe up for more</div>
      <div className={styles.carList}>
        {carList.map((car, index) => (
          <div className={styles.car} key={index}>
            <Image
              src={car.iconUrl}
              className={styles.carImage}
              height={50}
              width={50}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default RideSelector
