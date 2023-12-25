const Key =process.env.REACT_APP_API_KEY_FRONT

const resend ={
    resendNetflixOrginal: `/tv/airing_today?api_key=${Key}&language=en-US&page=1`,
    resendTopRated: `/movie/top_rated?api_key=${Key}&language=en-US&page=2`,
    resendPopular:`discover/movie?api_key=${Key}&language=en-US&page=3`,
    resendUpcoming: `/movie/upcoming?api_key=${Key}&language=en-US&page=4`,
    resendTrending: `/trending/all/day?api_key=${Key}&language=en-US&page=5`,
    resendMovies: `/trending/movie/day?api_key=${Key}&language=en-US&page=6`,
    resendTv: `/trending/tv/day?api_key=${Key}&language=en-US&page=7`,
    resendAction: `/discover/movie?api_key=${Key}&language=en-US&page=8`,
    resendHorror: `/discover/movie?api_key=${Key}&language=en-US&query=horror&page=1&include_ad`,
    resendComedy: `/discover/movie?api_key=${Key}&language=en-US&page=10`,
    resendRomance: `/discover/movie?api_key=${Key}&language=en-US&page=11`,
    resendOldMoives: `/discover/movie?api_key=${Key}&language=en-US&page=12`,
}

export default resend