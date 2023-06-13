class Jumbotron {
  static Title = ['Find your next', 'Within Seconds!']
  static Description = [
    'The one and only largest e-sport recruitment platform,',
    'we found you the most suitable needs to be the champion!'
  ].join('\n')
  static Button = 'Be Champion!'
}

class Support {
  static Title = 'Integrated with'
  static Assets = ['garena', 'krafton', 'valve', 'riot', 'zepetto', 'moonton', 'tencent']
}

class Opportunity {
  static Title = ['Get buffed from these']
}

class Home {
  static Jumbotron = Jumbotron
  static Support = Support
  static Opportunity = Opportunity

  static Variant = ['teams', 'players', 'talents']
}

export default Home
