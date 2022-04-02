import type { NextPage } from 'next'

const styles = {
  wrapper: 'flex min-h-screen flex-col items-center justify-center',
}

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Uber Clone</h1>
    </div>
  )
}

export default Home
