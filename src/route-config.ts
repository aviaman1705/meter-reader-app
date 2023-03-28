import IndexSearch from "./search/IndexSearch";
import CreateTrack from "./tracks/CreateTrack";
import Editrack from "./tracks/Editrack";
import IndexTracks from "./tracks/IndexTracks";
import LandingPage from "./utils/LandingPage";
import RedirectToLandingPage from "./utils/RedirectToLandingPage";

const routes = [
    { path: '/tracks', component: IndexTracks, exact: true },
    { path: '/tracks/create', component: CreateTrack },
    { path: '/tracks/edit/:id(\\d+)', component: Editrack },

    { path: '/search-results/:term', component: IndexSearch },

    { path: '/', component: LandingPage, exact: true },
    { path: '*', component: RedirectToLandingPage }
]

export default routes;