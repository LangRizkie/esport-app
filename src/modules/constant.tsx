class Jumbotron {
  static Title = ['Find your next', 'Within Seconds!']
  static Description = [
    'The one and only largest e-sport recruitment platform,',
    'we found you the most suitable needs to be the champion!'
  ].join('\n')
}

class Support {
  static Title = 'Integrated with'
}

class Opportunity {
  static Title = ['Get buffed from these']
}
class Home {
  static Jumbotron = Jumbotron
  static Support = Support
  static Opportunity = Opportunity

  static Variant = ['Team', 'Player', 'Talent']
}

class Constant {
  static Home = Home

  static HeaderNavigation = [
    { path: '/team', name: 'team' },
    { path: '/player', name: 'player' },
    { path: '/talent', name: 'talent' },
    { path: '/event', name: 'event' }
  ]
}

export default Constant
