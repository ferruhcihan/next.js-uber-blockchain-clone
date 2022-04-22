import React, { useState, useContext, useEffect } from 'react'
import Image from 'next/image'
import ethLogo from '../assets/eth-logo.png'
import { UberContext } from '../context/uberContext'

const styles = {
  wrapper: `h-full flex flex-col`,
  title: `text-gray-500 text-center text-xs py-2 border-b`,
  carList: `flex flex-col flex-1 overflow-scroll`,
  car: `flex p-3 m-2 items-center border-2 border-white`,
  selectedCar: `border-2 border-black flex p-3 m-2 items-center`,
  carImage: `h-14`,
  carDetails: `ml-2 flex-1`,
  service: `font-medium`,
  time: `text-xs text-blue-500`,
  priceContainer: `flex items-center`,
  price: `mr-[-0.8rem]`,
}

const RideSelector = () => {
  const [carList, setCarList] = useState([]) as any
  const { selectedRide, setSelectedRide, setPrice, basePrice } =
    useContext(UberContext)

  console.log(basePrice)

  useEffect(() => {
    ;(async () => {
      try {
        const response = await fetch('/api/db/getRideTypes')

        const data = await response.json()
        setCarList(data.data)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Choose a ride, or swipe up for more</div>
      <div className={styles.carList}>
        {carList.map((car: any, index: number) => (
          <div
            key={index}
            className={`${
              selectedRide.service === car.service
                ? styles.selectedCar
                : styles.car
            }`}
            onClick={() => {
              setSelectedRide(car)
              setPrice(((basePrice / 10 ** 5) * car.priceMultiplier).toFixed(5))
            }}
          >
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
