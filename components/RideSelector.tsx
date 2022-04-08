import React, { useState } from 'react'
import Image from 'next/image'
import uberX from '../assets/rides/uberX.png'
import uberBlack from '../assets/rides/uberBlack.png'
import uberBlackSuv from '../assets/rides/uberBlackSuv.png'
import uberSelect from '../assets/rides/uberSelect.png'
import uberXL from '../assets/rides/uberXL.png'
import ethLogo from '../assets/eth-logo.png'

const styles = {
  wrapper: `h-full flex flex-col`,
  title: `text-gray-500 text-center text-xs py-2 border-b`,
  carList: `flex flex-col flex-1 overflow-scroll`,
  car: `flex p-3 m-2 items-center border-2 border-white`,
  carImage: `h-14`,
  carDetails: `ml-2 flex-1`,
  service: `font-medium`,
  time: `text-xs text-blue-500`,
  priceContainer: `flex items-center`,
  price: `mr-[-0.8rem]`,
}

const carList: any[] = [
  {
    service: 'UberX',
    iconUrl: uberX,
    priceMultiplier: 1,
  },
  {
    service: 'UberBlack',
    iconUrl: uberBlack,
    priceMultiplier: 1,
  },
  {
    service: 'UberBlackSuv',
    iconUrl: uberBlackSuv,
    priceMultiplier: 1,
  },
  {
    service: 'UberSelect',
    iconUrl: uberSelect,
    priceMultiplier: 1,
  },
  {
    service: 'UberXL',
    iconUrl: uberXL,
    priceMultiplier: 1,
  },
]

const basePrice = 1234

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
            <div className={styles.carDetails}>
              <div className={styles.service}>{car.service}</div>
              <div className={styles.time}>5 min away</div>
            </div>
            <div className={styles.priceContainer}>
              <div className={styles.price}>
                {((basePrice / 10 ** 5) * car.priceMultiplier).toFixed(5)}
              </div>
              <Image src={ethLogo} height={25} width={40} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RideSelector
