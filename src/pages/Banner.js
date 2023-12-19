import { isMobile } from "react-device-detect";


const mobtext = {
    position: 'absolute',
    top: '20%',

    transform: 'translate(-50%, -30%)',
    textAlign: 'left',
    color: 'white',
}
const desktext = {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'left',
    color: 'white',
}


function Banner() {
    return (
        <>
           <div className="d-none d-sm-block">

            <div className="row">
                <div className="col-lg-12">
                    <div style={{ position: 'relative' }}>
                        <img
                            src="https://img.freepik.com/free-photo/still-life-home-atmosphere-interior-with-book-candles-table-cozy-bedspreads_169016-1308.jpg?w=1380&t=st=1702965733~exp=1702966333~hmac=01a53427cfaa1e5216e1bdf35e514be80d8c35c9bc7461ace62f526da9f9029a"
                            style={{ width: '100%', height: '400px' }}
                            alt="Banner"
                        />

                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the alpha value (0.5) to change the darkness
                            }}
                        ></div>
                    </div>
                    <div

                        style={isMobile ? mobtext : desktext}
                    >
                        <h1 style={{ color: 'white' }} >Journey Through Pages</h1>
                        <p>Embark on an incredible journey through books that will transport you beyond imagination. Explore unknown worlds, solve mysteries, and experience a multitude of stories. Find the magic within every page as new wonders and adventures unfold with each chapter.</p>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default Banner;
