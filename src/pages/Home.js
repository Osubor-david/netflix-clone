import React from 'react'
import Main from '../componenets/Main'
import Row from '../componenets/Row'
import request from '../Request'

function Home() {
  return (
    <div>
        <Main/>
        <Row rowID='1' title='UpComing' fetchURL={request.requestUpcoming}/>
        <Row rowID='2' title='Popular' fetchURL={request.requestPopular}/>
        <Row rowID='3' title='Trending' fetchURL={request.requestTrending}/>
        
        <Row rowID='4' title='TopRated' fetchURL={request.requestTopRated}/>
        <Row rowID='5' title='Horror' fetchURL={request.requestHorror}/>

    </div>
  )
}

export default Home