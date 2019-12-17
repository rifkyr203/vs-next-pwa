import Recomendation from './homepage/recomendation'


const ChildrenComponent = () => {
    return (
        <div className="main-container">
            <p className="proximanova-18-semibold">Hello, Jimmy</p>
            <div className="box-assesment d-flex justify-content-between">
                <div>
                    <p className="proximanova-16-bold text-white mb-1">Be the best 21st Century<br/>Champion Today</p>
                    <div className="d-flex">
                        <p className="proximanova-12 text-white">Take Assesment</p>
                    </div>
                </div>
                <div>
                    <div className="gamepad-container">

                    </div>
                </div>
            </div>
            <Recomendation />
        </div>
    )
}

export default ChildrenComponent