import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Logout from '@/components/auth/Logout.vue';
import TeamConfirmation from '@/components/Team/TeamConfirmation.vue';
import Portfolio from './views/Portfolio.vue';
import Termsandconditions from './views/Termsandconditions.vue'
import Media from './views/Media.vue'
import Team from './views/Team.vue'
import Privacypolicy from './views/PrivacyPolicy.vue'
import Dota2Search from './views/Dota2Search.vue'
import Posts from '@/components/Posts'
import NewPost from '@/components/NewPost'
import EditPost from '@/components/EditPost'
import Stats from '@/views/Stats.vue'
import Streams from '@/views/Streams.vue'
import StreamsForm from '@/views/StreamsForm.vue'
import Sponsors from '@/views/Sponsors.vue'
import SponsorsForm from '@/views/SponsorsForm.vue'
import Screenshots from '@/views/Screenshots.vue'
import ScreenshotsForm from '@/views/ScreenshotsForm.vue'
import Dota2 from '@/views/Dota2.vue'
import H2H from '@/views/H2H.vue'
import Tournaments from '@/views/Tournaments.vue'
import H2HIOS from '@/views/H2HIOS.vue'
import H2HAndroid from '@/views/H2HAndroid.vue'
import H2HAndroid8ballpool from '@/views/H2HAndroid8ballpool.vue'
import H2HAndroid8ballpool1 from '@/views/H2HAndroid8ballpool1.vue'
import TournamentsIOS from '@/views/TournamentsIOS.vue'
import TournamentsIOSFortnite from '@/views/TournamentsIOSFortnite.vue'
import TournamentsIOSFortnite1 from '@/views/TournamentsIOSFortnite1.vue'
import TournamentsAndroid from '@/views/TournamentsAndroid.vue'
import TournamentsAndroid8ballpool from '@/views/TournamentsAndroid8ballpool.vue'
import TournamentsAndroid8ballpool1 from '@/views/TournamentsAndroid8ballpool1.vue'
import TournamentsEsports from '@/views/TournamentsEsports.vue'
import TournamentsEsportsDota2 from '@/views/TournamentsEsportsDota2.vue'
import TournamentsEsportsDota21 from '@/views/TournamentsEsportsDota21.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/tournaments/esports',
      name: 'TournamentsEsports',
      component: TournamentsEsports
    },
    {
      path: '/tournaments/esports/dota2',
      name: 'TournamentsEsportsDota2',
      component: TournamentsEsportsDota2
    },
    {
      path: '/tournaments/esports/dota2/1',
      name: 'TournamentsEsportsDota21',
      component: TournamentsEsportsDota21
    },
    
    {
      path: '/h2h/android/8ballpool',
      name: 'H2HAndroid8ballpool',
      component: H2HAndroid8ballpool
    },  
    {
      path: '/h2h/android/8ballpool/1',
      name: 'H2HAndroid8ballpool1',
      component: H2HAndroid8ballpool1
    },
    {
      path: '/h2h/',
      name: 'H2H',
      component: H2H
    },
    {
      path: '/h2h/ios',
      name: 'H2HIOS',
      component: H2HIOS
    },
    {
      path: '/h2h/android',
      name: 'H2HAndroid',
      component: H2HAndroid
    },
    {
      path: '/tournaments/ios/fortnite',
      name: 'TournamentsIOSFortnite',
      component: TournamentsIOSFortnite
    },
    {
      path: '/tournaments/ios/fortnite/1',
      name: 'TournamentsIOSFortnite1',
      component: TournamentsIOSFortnite1
    },
    {
      path: '/tournaments/ios',
      name: 'TournamentsIOS',
      component: TournamentsIOS
    },
    {
      path: '/tournaments/android',
      name: 'TournamentsAndroid',
      component: TournamentsAndroid
    },
    {
      path: '/tournaments/android/8ballpool',
      name: 'TournamentsAndroid8ballpool',
      component: TournamentsAndroid8ballpool
    },
    {
      path: '/tournaments/android/8ballpool/1',
      name: 'TournamentsAndroid8ballpool1',
      component: TournamentsAndroid8ballpool1
    },
    {
      path: '/tournaments',
      name: 'Tournaments',
      component: Tournaments
    },
    {
      path: '/screenshots/form',
      name: 'ScreenshotsForm',
      component: ScreenshotsForm
    },
    {
      path: '/screenshots',
      name: 'Screenshots',
      component: Screenshots
    },
    {
      path: '/streams/form',
      name: 'StreamsForm',
      component: StreamsForm
    },
    {
      path: '/sponsors/form',
      name: 'SponsorsForm',
      component: SponsorsForm
    },
      {
      path: '/sponsors',
      name: 'Sponsors',
      component: Sponsors
    },
    {
      path: '/streams',
      name: 'Streams',
      component: Streams
    },
    {
      path: '/dota2/stats',
      name: 'Stats',
      component: Stats
    },
    {
      path: '/posts/:id',
      name: 'EditPost',
      component: EditPost
    },
    {
      path: '/posts/new',
      name: 'NewPost',
      component: NewPost
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/dota2/search',
      name: '/dota2search',
      component: Dota2Search,
      meta: {
        requiresAuth: true,
      }
    }, 
    {
      path: '/dota2',
      name: '/dota2',
      component: Dota2
      ,
      meta: {
        requiresAuth: true,
      }
    }, 
    {
      path: '/media',
      name: 'media',
      component: Media
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/termsandconditions',
      name: 'termsandconditions',
      component: Termsandconditions
    },
    {
      path: '/privacypolicy',
      name: 'privacypolicy',
      component: Privacypolicy
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresVisitor: true,
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        requiresVisitor: true,
      }
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/team/:teamId',
      name: 'team',
      component: Team,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/teamconfirmation/:token',
      name: 'team-confirmation',
      component: TeamConfirmation,
      // meta: {
      //   requiresAuth: true,
      // }
    }
  ]
})
