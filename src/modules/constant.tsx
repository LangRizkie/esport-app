import Api from './partial/api'
import Home from './wording/home'

class Constant {
  static Home = Home
  static Api = Api

  static HeaderNavigation = [
    { path: '/team', name: 'teams' },
    { path: '/player', name: 'player' },
    { path: '/talent', name: 'talent' },
    { path: '/event', name: 'event' }
  ]
}

export default Constant
