import CreateTrack from "./tracks/CreateTrack";
import Editrack from "./tracks/Editrack";
import IndexTracks from "./tracks/IndexTracks";
import LandingPage from "./utils/LandingPage";
import RedirectToLandingPage from "./utils/RedirectToLandingPage";


const routes = [
    { path: '/tracks', component: IndexTracks, exact: true },
    { path: '/tracks/create', component: CreateTrack },
    { path: '/tracks/edit/:id(\\d+)', component: Editrack },

    // { path: '/actors', component: IndexActors, exact: true },
    // { path: '/actors/create', component: CreateActor },
    // { path: '/actors/edit/:id(\\d+)', component: EditActor },

    // { path: '/movieTheaters', component: IndexMovieTheaters, exact: true },
    // { path: '/movieTheaters/create', component: CreateMovieTheater },
    // { path: '/movieTheaters/edit/:id(\\d+)', component: EditMovieTheater },


    // { path: '/movies/create', component: CreateMovie },
    // { path: '/movies/edit/:id(\\d+)', component: EditMovie },
    // { path: '/movies/filter', component: FilterMovies },
    // { path: '/movie/:id(\\d+)', component: MovieDetails },

    { path: '/', component: LandingPage, exact: true },
    { path: '*', component: RedirectToLandingPage }
]

export default routes;