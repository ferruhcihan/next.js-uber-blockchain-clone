import type { NextPage } from 'next'
import Navbar from "../components/Navbar";

const styles = {
  wrapper: `h-screen w-screen flex flex-col`,
  main: `h-full w-screen flex-1 z-10`,
  mapContainer: `flex-1 w-full h-full`,
  rideRequestContainer: `h-full w-[400px] ml-[1rem] py-[3rem] absolute top-0 left-0 flex flex-col justify-end z-20`,
  rideRequest: `h-full max-h-[700px] bg-white rounded-lg flex flex-col overflow-scroll`,
}

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.main}>{/* map */}</div>
      <div className={styles.rideRequestContainer}>
        <div className={styles.rideRequest}>
          {/* location selector */}
          {/* confirm ride */}
        </div>
      </div>
    </div>
  )
}

export default Home
