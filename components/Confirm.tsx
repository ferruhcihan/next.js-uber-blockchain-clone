import React from 'react'
import RideSelector from './RideSelector'

const styles = {
  wrapper: `flex-1 h-full flex flex-col justify-between`,
  rideSelectorContainer: `h-full flex flex-col overflow-scroll`,
  confirmButtonContainer: ` border-t-2 cursor-pointer z-10`,
  confirmButton: `bg-black text-white m-4 py-4 text-center text-xl`,
}

const Confirm = () => {
  const storeTripDetails = async () => {}
  return (
    <div className={styles.wrapper}>
      <div className={styles.rideSelectorContainer}>
        <RideSelector />
      </div>
      <div className={styles.confirmButtonContainer}>
        <div className={styles.confirmButtonContainer}>
          <div
            className={styles.confirmButton}
            onClick={() => storeTripDetails()}
          >
            Confirm UberX
          </div>
        </div>
      </div>
    </div>
  )
}

export default Confirm
