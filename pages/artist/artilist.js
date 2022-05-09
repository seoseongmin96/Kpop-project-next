import React from 'react'
import styles from "@/styles/Header.module.css"
const artilist = () => {
  return (
    <div className={styles.w3container}>
    <h2>Let me introduce My favorite K-pop artists!</h2>
    <p>I have been interested in K-pop since I was young and liked K-pop artists.
    Among the many artists, the artists I selected are BTS, TWICE, PSY, BLACKPINK, and IU, which are Korea's representative artists who promote K-pop around the world and create the Korean Wave.</p>
    <div className={styles.w3card4} style={{width:100}}>
      <img src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/EOKA7NCX6REIHICYCTR53H2ORA.png" alt="Alps" style={{width:500}}/>
      <p>BTS</p>
      <img src="https://file2.nocutnews.co.kr/newsroom/image/2020/04/23/20200423125939278872_0_800_548.jpg" alt="Lights" style={{width:500}}/>
      <p>TWICE</p>
      <img src="https://koreajoongangdaily.joins.com/data/photo/2022/04/22/f4b2e711-e20b-44b9-abb7-591a5ff5b173.jpg" alt="Lights" style={{width:500}}/>
      <p>PSY</p>
      <img src="https://img2.sbs.co.kr/img/sbs_cms/WE/2020/07/09/WE64849959_ori.jpg" alt="Lights" style={{width:500}}/>
      <p>BLACKPINK</p>
      <img src="https://file.mk.co.kr/meet/neds/2021/04/image_readtop_2021_330747_16177500644599916.jpg" alt="Lights" style={{width:500}}/>
      <p>IU</p>
      <div className={styles.w3container+ ' '+ styles.w3center}>
        
      </div>
    </div>
  </div>
  )
}

export default artilist