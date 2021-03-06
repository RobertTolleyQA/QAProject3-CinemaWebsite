import './Home.css';
import CarouselPage from './Carousel';
import image1 from '../../Resources/image1.JPG';
import image2 from '../../Resources/image2.jpg';
import image3 from '../../Resources/image3.jpg';
import WelcomePage from './WelcomePage';
import { Container } from 'react-bootstrap'
import data from '../../Components/Movies/NewReleases/NewReleases.json';
import NRFilms from '../../Components/Movies/NewReleases/NRFilms';
import LatestScreening from '../Latest/LatestScreening';
import Times from '../OpeningTimes/Times';







const Home = () => {
    return (
        <>


            <CarouselPage image1={image1} image2={image2} image3={image3} />
            <div className="container">

                <div className="row">
                    <div className="col-md-12">


                    </div>



                </div>
                <div className="container">
                    <div className="row-md" id="newreleasesheader">
                        <hr id="hr" />
                        <h1 className="container" style={{ color: 'gold' }}>Our New Releases</h1>
                        <hr id="hr" />

                    </div>

                    <div className="row">
                        {
                            data.map((film) => (
                                <div className="col-md-3">
                                    <br />
                                    <NRFilms

                                        key={film.id}
                                        title={film.title}
                                        runtime={film.runtime}
                                        rating={film.rating}
                                        poster={film.img}
                                        director={film.director}
                                        actors={film.actors} />
                                </div>
                            ))}
                    </div>
                </div>
                <h1 className="title">QA Cinema Reviews</h1>
                <Container className="beauty">
                    <WelcomePage />
                    <button className="cssStyle" id="FindOutMore"> Find Out More </button>
                    <hr />
                    <LatestScreening />

                    <h1 className="title">Opening Times</h1>
                    <Times />


                </Container>

            </div>


        </>
    )
}
export default Home;