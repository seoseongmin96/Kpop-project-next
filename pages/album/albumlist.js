import React from 'react'
import styles from "@/styles/Header.module.css"
const albumlist = () => {
  return (
    <div className={styles.w3container}>
    <h2>Let me introduce My favorite K-pop albums!</h2>
    <p>These are the albums of artists that I chose. Among them, as a result of analyzing BTS' albums, BTS recorded a total of 32,783,223 cumulative album sales during the data aggregation period, becoming the most sold artist for the album. In particular, "MAP OF THE SOUL: 7," which was released in February 2020, sold more than 4.6 million copies, reaffirming BTS's status.</p>
    <div className={styles.w3card4} style={{width:100}}>
      <img src="https://ibighit.com/bts/images/bts/discography/map_of_the_soul-7/img01.jpg" alt="Alps" style={{width:500}}/>
      <p>BTS Album</p>
      <img src="https://cdnimg.melon.co.kr/cm2/album/images/103/31/167/10331167_500.jpg?15e9ddacaa8b660b4334022e4de95cd5" alt="Lights" style={{width:500}}/>
      <p>TWICE Album </p>
      <img src="https://image.inews24.com/v1/0d12246de7e59c.jpg" alt="Lights" style={{width:500}}/>
      <p>PSY Album</p>
      <img src="https://img7.yna.co.kr/etc/inner/KR/2020/07/28/AKR20200728040600005_01_i_P4.jpg" alt="Lights" style={{width:500}}/>
      <p>BLACKPINK Album</p>
      <img src="https://cdnimg.melon.co.kr/cm2/album/images/105/54/246/10554246_20210325161233_500.jpg?304eb9ed9c07a16ec6d6e000dc0e7d91" alt="Lights" style={{width:500}}/>
      <p>IU Album</p>
      <div className={styles.w3container+ ' '+ styles.w3center}>
        
      </div>
    </div>
  </div>
  

  )
}

export default albumlist