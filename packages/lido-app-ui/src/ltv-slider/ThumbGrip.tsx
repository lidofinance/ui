import styles from './LtvSlider.module.css'

export const ThumbGrip = () => (
  <svg
    className={styles.grip}
    width='8'
    height='10'
    viewBox='0 0 8 10'
    fill='none'
    aria-hidden='true'
  >
    <path
      d='M1 1V9M4 1V9M7 1V9'
      stroke='#3A3A3A'
      strokeWidth='1.6'
      strokeLinecap='round'
    />
  </svg>
)
