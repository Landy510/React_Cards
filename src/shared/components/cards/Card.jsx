import styles from './Card.module.css'
import PropTypes from 'prop-types';
import bulbUrl from '../../../assets/images/bulb.png'
import fireUrl from '../../../assets/images/fire.png'
import { useState } from 'react';

function Card({item}) {
  const [showMask, setShowMask] = useState(false)

  function handleMouseEnter(toggle) {
    setShowMask(toggle)
  }

  if(item.number === 4) {
    return (
      <div className={styles.noResult}>
        <h2 className={styles.header}>Ramble CrossFit</h2>
        <p className={styles.message}>Why not hit the gym</p>
        <p className={styles.message}>start your journey</p>
        <a 
          className={styles.button}
          href={item.btnUrl}
          target='blank'
        >Register</a>
      </div>
    )
  }
  else if(item.number === 1) {
    return (
      <a 
        className={[styles.card, `${showMask ? `${styles.show}`: ''}`].join(' ')}
        onMouseEnter={() => handleMouseEnter(true)}
        onMouseLeave={() => handleMouseEnter(false)}
        href={item.btnUrl}
      >
        <div className={styles.mask}>
          <p>Learn More</p>
        </div>
        <h4 className={styles['header']}>Daily Calorie Burn</h4>
        <div className={styles['item']}>
          <p 
            className={styles['itemLabel']}
            style={{
              marginBottom: '20px'
            }}
          >Recommended</p>
          <p className={styles['itemTxt']}>{item.burnedStart} - {item.burnedEnd} calories</p>
        </div>
        <div className={styles.hintTxt}>
          <img 
            src={bulbUrl}
            alt="light bulb" 
            width={20}
            height={20}
          />
          <span>Active calories burn could help you lose weights.</span>
        </div>
      </a>
    )
  }
  else if(item.number === 2) {
    return (
      <a 
        className={[styles.card, `${showMask ? `${styles.show}`: ''}`].join(' ')}
        onMouseEnter={() => handleMouseEnter(true)}
        onMouseLeave={() => handleMouseEnter(false)}
        href={item.btnUrl}
      >
        <div className={styles.mask}>
          <p>Learn More</p>
        </div>
        <h4 className={styles['header']}>Running</h4>
        <div className={styles['item']}>
          <p className={styles['itemLabel']}>Duration</p>
          <p className={styles['itemTxt']}>1 hr</p>
        </div>

        <div className={styles['item']}>
          <p className={styles['itemLabel']}>Calorie Burned</p>
          <p className={styles['itemTxt']}>
            <span>
              <img 
                src={fireUrl} 
                alt="coin icon" 
                width={24}
                height={24}
              />
            </span>
            <span>
              {item.burn}
            </span>
          </p>
        </div>        
      </a>
    )
  }
  else {
    return (
      <a 
        className={[styles.card, `${showMask ? `${styles.show}`: ''}`].join(' ')}
        onMouseEnter={() => handleMouseEnter(true)}
        onMouseLeave={() => handleMouseEnter(false)}
        href={item.btnUrl}
      >
        <div className={styles.mask}>
          <p>Learn More</p>
        </div>
        <h4 className={styles['header']}>Jump Rope</h4>
        <div className={styles['item']}>
          <p className={styles['itemLabel']}>Duration</p>
          <p className={styles['itemTxt']}>1 hr</p>
        </div>

        <div className={styles['item']}>
          <p className={styles['itemLabel']}>Calorie Burned</p>
          <p className={styles['itemTxt']}>
            <span>
              <img 
                src={fireUrl}
                alt="coin icon" 
                width={24}
                height={24}
              />
            </span>
            <span>
              {item.burn}
            </span>
          </p>
        </div>
      </a>
    )
  }
  
}

Card.propTypes = {
  item: PropTypes.object.isRequired
}

export default function CardsLogic ({source}) {
  const numberedData = source.map(item => {
    if(item.burnedStart && item.burnedEnd) {
      return {...item, number: 1}
    }
    else if(item.type === 'weight' && item.burn) {
      return {...item, number: 2}
    }
    else if(item.type === 'aerobic' && item.burn) {
      return {...item, number: 3}
    }

    return {...item, number: 4}
  })

  return (
    <div style={{
      display: 'flex'
    }}>
      {
        numberedData.map(item => <Card key={item.number} item={item} />)
      }
    </div>
  )
}

CardsLogic.propTypes = {
  source: PropTypes.array
}