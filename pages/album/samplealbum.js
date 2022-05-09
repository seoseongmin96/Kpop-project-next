import React from 'react'
import styles from "@/styles/Header.module.css"
const samplealbum = () => {
  return (
    <div className={styles.w3container}>
    <h2>Sample Album</h2>
    <p>When artists release a new album, each agency puts an album jacket designed for each album concept and releases it. The jacket I am introducing now is a sample album jacket. These jackets can serve as a visual representation of the artist's color depending on how they design.</p>
    <div className={styles.w3card4} style={{width:100}}>
      <img src="https://hiphopplaya.com/g2/data/cheditor5/1903/view_thumbnail/mania-done-20190327110952_swrmqawt.jpg" alt="Alps" style={{width:500}}/>
      <p>Sample jacket1</p>
      <img src="https://previews.123rf.com/images/gloffs/gloffs1512/gloffs151200027/49039844-lp-%EB%B9%84%EB%8B%90-%EB%A0%88%EC%BD%94%EB%93%9C-%EC%95%A8%EB%B2%94-%EC%BB%A4%EB%B2%84%EC%9D%98-%EA%B0%9C%EB%85%90%EC%A0%81-%EB%B2%A1%ED%84%B0-%ED%96%87%EB%B9%9B%EA%B3%BC-%EC%82%AC%EB%9E%8C%EC%9D%98-%EC%98%81%ED%98%BC%EC%9D%98-%EA%B1%B0%EC%9A%B8%EC%B2%98%EB%9F%BC-%EC%9D%8C%EC%95%85-%EC%83%98%ED%94%8C-%ED%85%8D%EC%8A%A4%ED%8A%B8%EB%A5%BC%EC%9C%84%ED%95%9C-%EA%B3%B5%EA%B0%84-.jpg" alt="Lights" style={{width:500}}/>
      <p>Sample jacket2</p>
      <img src="https://d2v80xjmx68n4w.cloudfront.net/gigs/5PJKy1562597683.jpg" alt="Lights" style={{width:500}}/>
      <p>Sample jacket3</p>
      <div className={styles.w3container+ ' '+ styles.w3center}>
        
      </div>
    </div>
  </div>
  )
}

export default samplealbum