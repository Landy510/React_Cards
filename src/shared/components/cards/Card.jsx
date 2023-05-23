import styles from './Card.module.css'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight,  } from '@fortawesome/free-solid-svg-icons'

function Card({item}) {
  
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
      <div className={styles.card}>
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
            src="src/assets/images/bulb.png" 
            alt="light bulb" 
            width={20}
            height={20}
          />
          <span>Active calories burn could help you lose weights.</span>
        </div>
        <a className={styles.button}>
          <span>learn more</span>
          <span className={styles.arrowIcon}>
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </a>
      </div>
    )
  }
  else if(item.number === 2) {
    return (
      <div className={styles.card}>
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
                src="src/assets/images/fire.png" 
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
        
        <a className={styles.button}>
          <span>learn more</span>
          <span className={styles.arrowIcon}>
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </a>
      </div>
    )
  }
  else {
    return (
      <div className={styles.card}>
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
                src="src/assets/images/fire.png" 
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
        
        <a className={styles.button}>
          <span>learn more</span>
          <span className={styles.arrowIcon}>
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </a>
      </div>
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