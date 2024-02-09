import Login from "./auth/Login";
import Register from "./auth/Register";
import IndexStatistics from "./components/statistics/IndexStatistics";
import Home from "./home/Home";
import CreateNotebook from "./notebooks/CreateNotebook";
import EditNotebook from "./notebooks/EditNotebook";
import IndexNotebooks from "./notebooks/IndexNotebooks";
import CreateTrack from "./tracks/CreateTrack";
import EditTrack from "./tracks/EditTrack";
import IndexTracks from "./tracks/IndexTracks";
import RedirectToLandingPage from "./utils/RedirectToLandingPage";
const routes = [

    { path: '/register', component: Register },
    { path: '/login', component: Login },

    { path: '/tracks', component: IndexTracks, exact: true, isAdmin: true },
    { path: '/tracks/create', component: CreateTrack, isAdmin: true },
    { path: '/tracks/edit/:id(\\d+)', component: EditTrack, isAdmin: true },

    { path: '/notebooks', component: IndexNotebooks, exact: true, isAdmin: true },
    { path: '/notebooks/create', component: CreateNotebook, isAdmin: true },
    { path: '/notebooks/edit/:id(\\d+)', component: EditNotebook, isAdmin: true },

    { path: '/statistics', component: IndexStatistics, exact: true, isAdmin: true },

    { path: '/', component: Home, exact: true },
    { path: '*', component: RedirectToLandingPage }
]

export default routes;