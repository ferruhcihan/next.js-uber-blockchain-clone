import { createContext, useState, useEffect } from 'react'

export const UberContext = createContext('') as any

export const UberProvider = ({ children }: any) => {
  const [pickup, setPickup] = useState('')
  const [dropoff, setDropoff] = useState('')
  const [pickupCoordinates, setPickupCoordinates] = useState()
  const [dropoffCoordinates, setDropoffCoordinates] = useState()

  let metamask

  if (typeof window !== 'undefined') {
    metamask = window.ethereum
  }

  const createLocationCoordinatePromise = (
    locationName: any,
    locationType: any
  ) => {
    return new Promise<void>(async (resolve, reject) => {
      try {
        const response = await fetch('api/map/getLocationCoordinates', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            location: locationName,
          }),
        })

        const data = await response.json()

        if (data.message === 'success') {
          switch (locationType) {
            case 'pickup':
              setPickupCoordinates(data.data)
              break
            case 'dropoff':
              setDropoffCoordinates(data.data)
              break
          }
          resolve()
        } else {
          reject()
        }
      } catch (error) {
        console.error(error)
        reject()
      }
    })
  }

  useEffect(() => {
    if (pickup && dropoff) {
      ;(async () => {
        await Promise.all([
          createLocationCoordinatePromise(pickup, 'pickup'),
          createLocationCoordinatePromise(dropoff, 'dropoff'),
        ])
      })()
    } else return
  }, [pickup, dropoff])

  return (
    <UberContext.Provider
      value={{
        pickup,
        setPickup,
        dropoff,
        setDropoff,
        pickupCoordinates,
        setPickupCoordinates,
        dropoffCoordinates,
        setDropoffCoordinates,
      }}
    >
      {children}
    </UberContext.Provider>
  )
}
