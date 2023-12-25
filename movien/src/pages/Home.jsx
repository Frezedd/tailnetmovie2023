import React from 'react'
import Main from '../Components/Main'
import Row from '../Components/Row'
import resend from '../resend'


const Home = () => {
  return (
    <>
      <Main/>
      <Row rowID='1' title='NetflixOrginal' fetchURL={resend.resendNetflixOrginal}/>
      <Row rowID='2' title='TopRated' fetchURL={resend.resendTopRated}/>
      <Row rowID='3' title='Popular' fetchURL={resend.resendPopular}/>
      <Row rowID='4' title='Upcoming' fetchURL={resend.resendUpcoming}/>
      <Row rowID='5' title='Trending' fetchURL={resend.resendTrending}/>
      <Row rowID='6' title='Adventure' fetchURL={resend.resendMovies}/>
      <Row rowID='7' title='Drama' fetchURL={resend.resendTv}/>
      <Row rowID='8' title='Action' fetchURL={resend.resendAction}/>
      <Row rowID='9' title='Horror' fetchURL={resend.resendHorror}/>
      <Row rowID='10' title='Comedy' fetchURL={resend.resendComedy}/>
      <Row rowID='11' title='Romance' fetchURL={resend.resendRomance}/>
      <Row rowID='12' title='OldMoives' fetchURL={resend.resendOldMoives}/>
    </>
  )
}

export default Home
