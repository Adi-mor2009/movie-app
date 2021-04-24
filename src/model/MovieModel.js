class MovieModel {
    constructor(plainMovieOrName, runtime, director, stars, plot, poster, homepage) {
        if(typeof plainActorOrFirstName === 'object') {
            this.name = plainMovieOrName.name;
            this.runtime = plainMovieOrName.runtime;
            this.director = plainMovieOrName.director;
            this.stars = plainMovieOrName.stars;
            this.plot = plainMovieOrName.plot;
            this.poster = plainMovieOrName.poster;
            this.homepage = plainMovieOrName.homepage;
        } else {
            this.name = plainMovieOrName;
            this.runtime = runtime;
            this.director = director;
            this.stars = stars;
            this.plot = plot;
            this.poster = poster;
            this.homepage = homepage;
        }
    }
}

export default MovieModel;