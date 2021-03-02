import data from './NewReleases.json';
import React, { useState } from 'react';
import NRFilms from './NRFilms';

const NR = () => {
    return (
        <div className="container">
            <div className="row-md" id="newreleasesheader">
                <hr />
                <h3>New Releases.</h3>
                <hr />
                <p>This page shows details of the new film releases we have at QA Cinemas.</p>
            </div>
            <div className="row">
                {
                    data.map((film) => (
                        <div className="col-md-3">
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
    )
}

export default NR;