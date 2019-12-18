import Slider from 'react-slick'
const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1.25,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
}


const RecomendationCourses = () => {
    return (
        <>
            <p className="proximanova-16-semibold mb-3 mt-4">Recomended Courses</p>
                <Slider {...settings}>
                    <div className="pr-4">
                        <div className="rec-box">
                            <h1 className="text-white">1</h1>
                        </div>
                    </div>
                    <div className="pr-4">
                        <div className="rec-box">
                            <h1 className="text-white">1</h1>
                        </div>
                    </div>
                    <div className="pr-4">
                        <div className="rec-box">
                            <h1 className="text-white">1</h1>
                        </div>
                    </div>
                </Slider><br/><br/><br/><br/><br/><br/><br/><br/>
        </>
    )
}

export default RecomendationCourses