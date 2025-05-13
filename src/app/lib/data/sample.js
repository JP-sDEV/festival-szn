const { parseData } = require("../helpers/parseData");

const sampleData = {
  data: {
    items: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/70kkdajctXSbqSMJbQO424",
        },
        followers: {
          href: null,
          total: 1563412,
        },
        genres: [],
        href: "https://api.spotify.com/v1/artists/70kkdajctXSbqSMJbQO424",
        id: "70kkdajctXSbqSMJbQO424",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebc548c7ff983f25641dc71ffe",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174c548c7ff983f25641dc71ffe",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178c548c7ff983f25641dc71ffe",
            width: 160,
          },
        ],
        name: "Kacey Musgraves",
        popularity: 76,
        type: "artist",
        uri: "spotify:artist:70kkdajctXSbqSMJbQO424",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6mmSS7itNWKbapgG2eZbIg",
        },
        followers: {
          href: null,
          total: 141910,
        },
        genres: ["bass house", "edm", "bassline"],
        href: "https://api.spotify.com/v1/artists/6mmSS7itNWKbapgG2eZbIg",
        id: "6mmSS7itNWKbapgG2eZbIg",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb146b1d21d93b8cf3918ecd3d",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174146b1d21d93b8cf3918ecd3d",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178146b1d21d93b8cf3918ecd3d",
            width: 160,
          },
        ],
        name: "Knock2",
        popularity: 62,
        type: "artist",
        uri: "spotify:artist:6mmSS7itNWKbapgG2eZbIg",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4oLeXFyACqeem2VImYeBFe",
        },
        followers: {
          href: null,
          total: 1944701,
        },
        genres: ["stutter house", "house"],
        href: "https://api.spotify.com/v1/artists/4oLeXFyACqeem2VImYeBFe",
        id: "4oLeXFyACqeem2VImYeBFe",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb04a3b69e7f2bf27020773d8c",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab6761610000517404a3b69e7f2bf27020773d8c",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f17804a3b69e7f2bf27020773d8c",
            width: 160,
          },
        ],
        name: "Fred again..",
        popularity: 78,
        type: "artist",
        uri: "spotify:artist:4oLeXFyACqeem2VImYeBFe",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2hlmm7s2ICUX0LVIhVFlZQ",
        },
        followers: {
          href: null,
          total: 9430274,
        },
        genres: ["melodic rap"],
        href: "https://api.spotify.com/v1/artists/2hlmm7s2ICUX0LVIhVFlZQ",
        id: "2hlmm7s2ICUX0LVIhVFlZQ",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebb978b95b8e03351df8e103af",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174b978b95b8e03351df8e103af",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178b978b95b8e03351df8e103af",
            width: 160,
          },
        ],
        name: "Gunna",
        popularity: 87,
        type: "artist",
        uri: "spotify:artist:2hlmm7s2ICUX0LVIhVFlZQ",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6tPHARSq45lQ8BSALCfkFC",
        },
        followers: {
          href: null,
          total: 1254675,
        },
        genres: ["country"],
        href: "https://api.spotify.com/v1/artists/6tPHARSq45lQ8BSALCfkFC",
        id: "6tPHARSq45lQ8BSALCfkFC",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebcb092867a2a4c35434d0128b",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174cb092867a2a4c35434d0128b",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178cb092867a2a4c35434d0128b",
            width: 160,
          },
        ],
        name: "Lainey Wilson",
        popularity: 77,
        type: "artist",
        uri: "spotify:artist:6tPHARSq45lQ8BSALCfkFC",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5K4W6rqBFWDnAN6FQUkS6x",
        },
        followers: {
          href: null,
          total: 29918959,
        },
        genres: ["rap"],
        href: "https://api.spotify.com/v1/artists/5K4W6rqBFWDnAN6FQUkS6x",
        id: "5K4W6rqBFWDnAN6FQUkS6x",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb6e835a500e791bf9c27a422a",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051746e835a500e791bf9c27a422a",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1786e835a500e791bf9c27a422a",
            width: 160,
          },
        ],
        name: "Kanye West",
        popularity: 93,
        type: "artist",
        uri: "spotify:artist:5K4W6rqBFWDnAN6FQUkS6x",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5Pb27ujIyYb33zBqVysBkj",
        },
        followers: {
          href: null,
          total: 2080592,
        },
        genres: [],
        href: "https://api.spotify.com/v1/artists/5Pb27ujIyYb33zBqVysBkj",
        id: "5Pb27ujIyYb33zBqVysBkj",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebdbe0d58f538b7d18e324af5e",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174dbe0d58f538b7d18e324af5e",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178dbe0d58f538b7d18e324af5e",
            width: 160,
          },
        ],
        name: "RÜFÜS DU SOL",
        popularity: 77,
        type: "artist",
        uri: "spotify:artist:5Pb27ujIyYb33zBqVysBkj",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2ZRQcIgzPCVaT9XKhXZIzh",
        },
        followers: {
          href: null,
          total: 989171,
        },
        genres: ["edm", "melodic bass", "future bass"],
        href: "https://api.spotify.com/v1/artists/2ZRQcIgzPCVaT9XKhXZIzh",
        id: "2ZRQcIgzPCVaT9XKhXZIzh",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eba3e9c3422b7ace22d72cceab",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174a3e9c3422b7ace22d72cceab",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178a3e9c3422b7ace22d72cceab",
            width: 160,
          },
        ],
        name: "Gryffin",
        popularity: 70,
        type: "artist",
        uri: "spotify:artist:2ZRQcIgzPCVaT9XKhXZIzh",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2qoQgPAilErOKCwE2Y8wOG",
        },
        followers: {
          href: null,
          total: 2135347,
        },
        genres: [],
        href: "https://api.spotify.com/v1/artists/2qoQgPAilErOKCwE2Y8wOG",
        id: "2qoQgPAilErOKCwE2Y8wOG",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebc33cf3ad025517202d8efbc0",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174c33cf3ad025517202d8efbc0",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178c33cf3ad025517202d8efbc0",
            width: 160,
          },
        ],
        name: "GloRilla",
        popularity: 80,
        type: "artist",
        uri: "spotify:artist:2qoQgPAilErOKCwE2Y8wOG",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ",
        },
        followers: {
          href: null,
          total: 104483199,
        },
        genres: [],
        href: "https://api.spotify.com/v1/artists/1Xyo4u8uXC1ZmMpatF05PJ",
        id: "1Xyo4u8uXC1ZmMpatF05PJ",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051749e528993a2820267b97f6aae",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1789e528993a2820267b97f6aae",
            width: 160,
          },
        ],
        name: "The Weeknd",
        popularity: 97,
        type: "artist",
        uri: "spotify:artist:1Xyo4u8uXC1ZmMpatF05PJ",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5H4yInM5zmHqpKIoMNAx4r",
        },
        followers: {
          href: null,
          total: 8333742,
        },
        genres: ["uk drill", "drill", "grime"],
        href: "https://api.spotify.com/v1/artists/5H4yInM5zmHqpKIoMNAx4r",
        id: "5H4yInM5zmHqpKIoMNAx4r",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebf6469f2cbf0a7e78744a3173",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174f6469f2cbf0a7e78744a3173",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178f6469f2cbf0a7e78744a3173",
            width: 160,
          },
        ],
        name: "Central Cee",
        popularity: 83,
        type: "artist",
        uri: "spotify:artist:5H4yInM5zmHqpKIoMNAx4r",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7kNqXtgeIwFtelmRjWv205",
        },
        followers: {
          href: null,
          total: 488138,
        },
        genres: ["house", "tech house"],
        href: "https://api.spotify.com/v1/artists/7kNqXtgeIwFtelmRjWv205",
        id: "7kNqXtgeIwFtelmRjWv205",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb81180f8a7fd1f2c2e657c436",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab6761610000517481180f8a7fd1f2c2e657c436",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f17881180f8a7fd1f2c2e657c436",
            width: 160,
          },
        ],
        name: "John Summit",
        popularity: 75,
        type: "artist",
        uri: "spotify:artist:7kNqXtgeIwFtelmRjWv205",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/74XFHRwlV6OrjEM0A2NCMF",
        },
        followers: {
          href: null,
          total: 9377864,
        },
        genres: ["pop punk", "emo", "emo pop"],
        href: "https://api.spotify.com/v1/artists/74XFHRwlV6OrjEM0A2NCMF",
        id: "74XFHRwlV6OrjEM0A2NCMF",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebb10c34546a4ca2d7faeb8865",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174b10c34546a4ca2d7faeb8865",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178b10c34546a4ca2d7faeb8865",
            width: 160,
          },
        ],
        name: "Paramore",
        popularity: 82,
        type: "artist",
        uri: "spotify:artist:74XFHRwlV6OrjEM0A2NCMF",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1xr2G8Hlx4QWmT9HaUbmoO",
        },
        followers: {
          href: null,
          total: 244078,
        },
        genres: [],
        href: "https://api.spotify.com/v1/artists/1xr2G8Hlx4QWmT9HaUbmoO",
        id: "1xr2G8Hlx4QWmT9HaUbmoO",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb426433c9b6997417d193516c",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174426433c9b6997417d193516c",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178426433c9b6997417d193516c",
            width: 160,
          },
        ],
        name: "Young Stoner Life",
        popularity: 67,
        type: "artist",
        uri: "spotify:artist:1xr2G8Hlx4QWmT9HaUbmoO",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/59oA5WbbQvomJz2BuRG071",
        },
        followers: {
          href: null,
          total: 1675103,
        },
        genres: [],
        href: "https://api.spotify.com/v1/artists/59oA5WbbQvomJz2BuRG071",
        id: "59oA5WbbQvomJz2BuRG071",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb21f6e9ccd576bb2ef541a3fe",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab6761610000517421f6e9ccd576bb2ef541a3fe",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f17821f6e9ccd576bb2ef541a3fe",
            width: 160,
          },
        ],
        name: "Jungle",
        popularity: 75,
        type: "artist",
        uri: "spotify:artist:59oA5WbbQvomJz2BuRG071",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/205i7E8fNVfojowcQSfK9m",
        },
        followers: {
          href: null,
          total: 562671,
        },
        genres: ["house", "tech house"],
        href: "https://api.spotify.com/v1/artists/205i7E8fNVfojowcQSfK9m",
        id: "205i7E8fNVfojowcQSfK9m",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb9290e172cbcacc0521b02b11",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051749290e172cbcacc0521b02b11",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1789290e172cbcacc0521b02b11",
            width: 160,
          },
        ],
        name: "Dom Dolla",
        popularity: 73,
        type: "artist",
        uri: "spotify:artist:205i7E8fNVfojowcQSfK9m",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y5tJX1MQlPlqiwlOH1tJY",
        },
        followers: {
          href: null,
          total: 38505343,
        },
        genres: ["rap"],
        href: "https://api.spotify.com/v1/artists/0Y5tJX1MQlPlqiwlOH1tJY",
        id: "0Y5tJX1MQlPlqiwlOH1tJY",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb19c2790744c792d05570bb71",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab6761610000517419c2790744c792d05570bb71",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f17819c2790744c792d05570bb71",
            width: 160,
          },
        ],
        name: "Travis Scott",
        popularity: 94,
        type: "artist",
        uri: "spotify:artist:0Y5tJX1MQlPlqiwlOH1tJY",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg",
        },
        followers: {
          href: null,
          total: 40953265,
        },
        genres: ["hip hop", "west coast hip hop"],
        href: "https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg",
        id: "2YZyLoL8N0Wb9xBt1NhZWg",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb39ba6dcd4355c03de0b50918",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab6761610000517439ba6dcd4355c03de0b50918",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f17839ba6dcd4355c03de0b50918",
            width: 160,
          },
        ],
        name: "Kendrick Lamar",
        popularity: 96,
        type: "artist",
        uri: "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5he5w2lnU9x7JFhnwcekXX",
        },
        followers: {
          href: null,
          total: 7743746,
        },
        genres: ["dubstep", "edm", "electro", "electronic"],
        href: "https://api.spotify.com/v1/artists/5he5w2lnU9x7JFhnwcekXX",
        id: "5he5w2lnU9x7JFhnwcekXX",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebe32002317387b6d659308a94",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174e32002317387b6d659308a94",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178e32002317387b6d659308a94",
            width: 160,
          },
        ],
        name: "Skrillex",
        popularity: 81,
        type: "artist",
        uri: "spotify:artist:5he5w2lnU9x7JFhnwcekXX",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4",
        },
        followers: {
          href: null,
          total: 98355206,
        },
        genres: ["rap", "hip hop"],
        href: "https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4",
        id: "3TVXtAsR1Inumwj472S9r4",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051744293385d324db8558179afd9",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1784293385d324db8558179afd9",
            width: 160,
          },
        ],
        name: "Drake",
        popularity: 98,
        type: "artist",
        uri: "spotify:artist:3TVXtAsR1Inumwj472S9r4",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2vf4pRsEY6LpL5tKmqWb64",
        },
        followers: {
          href: null,
          total: 501375,
        },
        genres: [],
        href: "https://api.spotify.com/v1/artists/2vf4pRsEY6LpL5tKmqWb64",
        id: "2vf4pRsEY6LpL5tKmqWb64",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb11c38bac1b16bdcb2ea6ee7f",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab6761610000517411c38bac1b16bdcb2ea6ee7f",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f17811c38bac1b16bdcb2ea6ee7f",
            width: 160,
          },
        ],
        name: "Elderbrook",
        popularity: 70,
        type: "artist",
        uri: "spotify:artist:2vf4pRsEY6LpL5tKmqWb64",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2CpLIMBoE2ZzyY3ZBCRZ7j",
        },
        followers: {
          href: null,
          total: 236625,
        },
        genres: ["stutter house"],
        href: "https://api.spotify.com/v1/artists/2CpLIMBoE2ZzyY3ZBCRZ7j",
        id: "2CpLIMBoE2ZzyY3ZBCRZ7j",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb5b7e8e92c0f81880bf93bc6b",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051745b7e8e92c0f81880bf93bc6b",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1785b7e8e92c0f81880bf93bc6b",
            width: 160,
          },
        ],
        name: "BUNT.",
        popularity: 70,
        type: "artist",
        uri: "spotify:artist:2CpLIMBoE2ZzyY3ZBCRZ7j",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5f7VJjfbwm532GiveGC0ZK",
        },
        followers: {
          href: null,
          total: 20405982,
        },
        genres: [],
        href: "https://api.spotify.com/v1/artists/5f7VJjfbwm532GiveGC0ZK",
        id: "5f7VJjfbwm532GiveGC0ZK",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb514da623c55dc9d2155705dd",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174514da623c55dc9d2155705dd",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178514da623c55dc9d2155705dd",
            width: 160,
          },
        ],
        name: "Lil Baby",
        popularity: 88,
        type: "artist",
        uri: "spotify:artist:5f7VJjfbwm532GiveGC0ZK",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1vCWHaC5f2uS3yhpwWbIA6",
        },
        followers: {
          href: null,
          total: 23538265,
        },
        genres: ["edm"],
        href: "https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6",
        id: "1vCWHaC5f2uS3yhpwWbIA6",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebae07171f989fb39736674113",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174ae07171f989fb39736674113",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178ae07171f989fb39736674113",
            width: 160,
          },
        ],
        name: "Avicii",
        popularity: 84,
        type: "artist",
        uri: "spotify:artist:1vCWHaC5f2uS3yhpwWbIA6",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/699OTQXzgjhIYAHMy9RyPD",
        },
        followers: {
          href: null,
          total: 14148810,
        },
        genres: ["rage rap"],
        href: "https://api.spotify.com/v1/artists/699OTQXzgjhIYAHMy9RyPD",
        id: "699OTQXzgjhIYAHMy9RyPD",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebba50ca67ffc3097f6ea1710a",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174ba50ca67ffc3097f6ea1710a",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178ba50ca67ffc3097f6ea1710a",
            width: 160,
          },
        ],
        name: "Playboi Carti",
        popularity: 93,
        type: "artist",
        uri: "spotify:artist:699OTQXzgjhIYAHMy9RyPD",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0mmIPiJ8l2gAProE7THr37",
        },
        followers: {
          href: null,
          total: 20273,
        },
        genres: ["bass house"],
        href: "https://api.spotify.com/v1/artists/0mmIPiJ8l2gAProE7THr37",
        id: "0mmIPiJ8l2gAProE7THr37",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebbb59a85feeee739b73bb12ab",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174bb59a85feeee739b73bb12ab",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178bb59a85feeee739b73bb12ab",
            width: 160,
          },
        ],
        name: "ISOKNOCK",
        popularity: 49,
        type: "artist",
        uri: "spotify:artist:0mmIPiJ8l2gAProE7THr37",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4aKdmOXdUKX07HVd3sGgzw",
        },
        followers: {
          href: null,
          total: 573713,
        },
        genres: ["edm", "dubstep"],
        href: "https://api.spotify.com/v1/artists/4aKdmOXdUKX07HVd3sGgzw",
        id: "4aKdmOXdUKX07HVd3sGgzw",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb3fbd26a1c76c4d7248f5d2b0",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051743fbd26a1c76c4d7248f5d2b0",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1783fbd26a1c76c4d7248f5d2b0",
            width: 160,
          },
        ],
        name: "Rezz",
        popularity: 60,
        type: "artist",
        uri: "spotify:artist:4aKdmOXdUKX07HVd3sGgzw",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1RyvyyTE3xzB2ZywiAwp0i",
        },
        followers: {
          href: null,
          total: 21331120,
        },
        genres: ["rap"],
        href: "https://api.spotify.com/v1/artists/1RyvyyTE3xzB2ZywiAwp0i",
        id: "1RyvyyTE3xzB2ZywiAwp0i",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb7565b356bc9d9394eefa2ccb",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051747565b356bc9d9394eefa2ccb",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1787565b356bc9d9394eefa2ccb",
            width: 160,
          },
        ],
        name: "Future",
        popularity: 93,
        type: "artist",
        uri: "spotify:artist:1RyvyyTE3xzB2ZywiAwp0i",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1A9o3Ljt67pFZ89YtPPL5X",
        },
        followers: {
          href: null,
          total: 1352353,
        },
        genres: ["alternative r&b"],
        href: "https://api.spotify.com/v1/artists/1A9o3Ljt67pFZ89YtPPL5X",
        id: "1A9o3Ljt67pFZ89YtPPL5X",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb04ae2067ae0171af5cbf1cf1",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab6761610000517404ae2067ae0171af5cbf1cf1",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f17804ae2067ae0171af5cbf1cf1",
            width: 160,
          },
        ],
        name: "Snoh Aalegra",
        popularity: 70,
        type: "artist",
        uri: "spotify:artist:1A9o3Ljt67pFZ89YtPPL5X",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4zVCMnjw54nkhGHU4e1Pav",
        },
        followers: {
          href: null,
          total: 81046,
        },
        genres: ["bass house", "edm trap", "edm"],
        href: "https://api.spotify.com/v1/artists/4zVCMnjw54nkhGHU4e1Pav",
        id: "4zVCMnjw54nkhGHU4e1Pav",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb69dea5e9c932833f17b7ddce",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab6761610000517469dea5e9c932833f17b7ddce",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f17869dea5e9c932833f17b7ddce",
            width: 160,
          },
        ],
        name: "ISOxo",
        popularity: 55,
        type: "artist",
        uri: "spotify:artist:4zVCMnjw54nkhGHU4e1Pav",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4O15NlyKLIASxsJ0PrXPfz",
        },
        followers: {
          href: null,
          total: 18760282,
        },
        genres: ["melodic rap"],
        href: "https://api.spotify.com/v1/artists/4O15NlyKLIASxsJ0PrXPfz",
        id: "4O15NlyKLIASxsJ0PrXPfz",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eba8ce348f34f18241d3249fa9",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174a8ce348f34f18241d3249fa9",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178a8ce348f34f18241d3249fa9",
            width: 160,
          },
        ],
        name: "Lil Uzi Vert",
        popularity: 86,
        type: "artist",
        uri: "spotify:artist:4O15NlyKLIASxsJ0PrXPfz",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6Ip8FS7vWT1uKkJSweANQK",
        },
        followers: {
          href: null,
          total: 6092166,
        },
        genres: ["grime", "uk drill", "drill"],
        href: "https://api.spotify.com/v1/artists/6Ip8FS7vWT1uKkJSweANQK",
        id: "6Ip8FS7vWT1uKkJSweANQK",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebd03e9ecf77419871b96daee1",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174d03e9ecf77419871b96daee1",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178d03e9ecf77419871b96daee1",
            width: 160,
          },
        ],
        name: "Dave",
        popularity: 79,
        type: "artist",
        uri: "spotify:artist:6Ip8FS7vWT1uKkJSweANQK",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0M7GyeyRi2fG8c1LdP4jhi",
        },
        followers: {
          href: null,
          total: 68968,
        },
        genres: [],
        href: "https://api.spotify.com/v1/artists/0M7GyeyRi2fG8c1LdP4jhi",
        id: "0M7GyeyRi2fG8c1LdP4jhi",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb6a00dcc7a075040897f49585",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051746a00dcc7a075040897f49585",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1786a00dcc7a075040897f49585",
            width: 160,
          },
        ],
        name: "Lastlings",
        popularity: 46,
        type: "artist",
        uri: "spotify:artist:0M7GyeyRi2fG8c1LdP4jhi",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/523iXWyHL26prJR3GKjRhx",
        },
        followers: {
          href: null,
          total: 111056,
        },
        genres: ["rally house", "breakcore"],
        href: "https://api.spotify.com/v1/artists/523iXWyHL26prJR3GKjRhx",
        id: "523iXWyHL26prJR3GKjRhx",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb0c1039c2fad41bb2c14a1054",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051740c1039c2fad41bb2c14a1054",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1780c1039c2fad41bb2c14a1054",
            width: 160,
          },
        ],
        name: "Starjunk 95",
        popularity: 53,
        type: "artist",
        uri: "spotify:artist:523iXWyHL26prJR3GKjRhx",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4qLwtWhlhyAoQ4S9mSrDW9",
        },
        followers: {
          href: null,
          total: 104092,
        },
        genres: ["tech house", "bass house"],
        href: "https://api.spotify.com/v1/artists/4qLwtWhlhyAoQ4S9mSrDW9",
        id: "4qLwtWhlhyAoQ4S9mSrDW9",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb6b2234fbdc9b647b208d1714",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051746b2234fbdc9b647b208d1714",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1786b2234fbdc9b647b208d1714",
            width: 160,
          },
        ],
        name: "Odd Mob",
        popularity: 65,
        type: "artist",
        uri: "spotify:artist:4qLwtWhlhyAoQ4S9mSrDW9",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4xnMDfgEmXZEEDdITKcGuE",
        },
        followers: {
          href: null,
          total: 198146,
        },
        genres: ["edm", "progressive house"],
        href: "https://api.spotify.com/v1/artists/4xnMDfgEmXZEEDdITKcGuE",
        id: "4xnMDfgEmXZEEDdITKcGuE",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebdc41520ab6e466a1029e4fd2",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174dc41520ab6e466a1029e4fd2",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178dc41520ab6e466a1029e4fd2",
            width: 160,
          },
        ],
        name: "Audien",
        popularity: 58,
        type: "artist",
        uri: "spotify:artist:4xnMDfgEmXZEEDdITKcGuE",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/09C3CKFxKEw1n1Z7kvT3jb",
        },
        followers: {
          href: null,
          total: 85008,
        },
        genres: ["dubstep", "bass music"],
        href: "https://api.spotify.com/v1/artists/09C3CKFxKEw1n1Z7kvT3jb",
        id: "09C3CKFxKEw1n1Z7kvT3jb",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb627ea1e93b4c25cdf41d4a6b",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174627ea1e93b4c25cdf41d4a6b",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178627ea1e93b4c25cdf41d4a6b",
            width: 160,
          },
        ],
        name: "Deathpact",
        popularity: 48,
        type: "artist",
        uri: "spotify:artist:09C3CKFxKEw1n1Z7kvT3jb",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/50co4Is1HCEo8bhOyUWKpn",
        },
        followers: {
          href: null,
          total: 11709866,
        },
        genres: ["rap", "melodic rap", "trap"],
        href: "https://api.spotify.com/v1/artists/50co4Is1HCEo8bhOyUWKpn",
        id: "50co4Is1HCEo8bhOyUWKpn",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb3526c8e811f828c10fa4dd90",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051743526c8e811f828c10fa4dd90",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1783526c8e811f828c10fa4dd90",
            width: 160,
          },
        ],
        name: "Young Thug",
        popularity: 87,
        type: "artist",
        uri: "spotify:artist:50co4Is1HCEo8bhOyUWKpn",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6l3HvQ5sa6mXTsMTB19rO5",
        },
        followers: {
          href: null,
          total: 26235885,
        },
        genres: ["rap"],
        href: "https://api.spotify.com/v1/artists/6l3HvQ5sa6mXTsMTB19rO5",
        id: "6l3HvQ5sa6mXTsMTB19rO5",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb4b053c29fd4b317ff825f0dc",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051744b053c29fd4b317ff825f0dc",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1784b053c29fd4b317ff825f0dc",
            width: 160,
          },
        ],
        name: "J. Cole",
        popularity: 86,
        type: "artist",
        uri: "spotify:artist:6l3HvQ5sa6mXTsMTB19rO5",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1uRVM0wBdtyEuU582EeKJM",
        },
        followers: {
          href: null,
          total: 112313,
        },
        genres: ["bassline", "bass house", "drum and bass", "uk garage"],
        href: "https://api.spotify.com/v1/artists/1uRVM0wBdtyEuU582EeKJM",
        id: "1uRVM0wBdtyEuU582EeKJM",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb62651489e3cdd3511c6d27b8",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab6761610000517462651489e3cdd3511c6d27b8",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f17862651489e3cdd3511c6d27b8",
            width: 160,
          },
        ],
        name: "NOTION",
        popularity: 79,
        type: "artist",
        uri: "spotify:artist:1uRVM0wBdtyEuU582EeKJM",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5lCekoJW9jNq01B1wiqdAb",
        },
        followers: {
          href: null,
          total: 174439,
        },
        genres: ["dubstep", "riddim", "edm", "deathstep", "bass house"],
        href: "https://api.spotify.com/v1/artists/5lCekoJW9jNq01B1wiqdAb",
        id: "5lCekoJW9jNq01B1wiqdAb",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebef1f40da516ec2e4fb71a82c",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174ef1f40da516ec2e4fb71a82c",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178ef1f40da516ec2e4fb71a82c",
            width: 160,
          },
        ],
        name: "Crankdat",
        popularity: 55,
        type: "artist",
        uri: "spotify:artist:5lCekoJW9jNq01B1wiqdAb",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/08GQAI4eElDnROBrJRGE0X",
        },
        followers: {
          href: null,
          total: 13084520,
        },
        genres: ["classic rock", "soft rock"],
        href: "https://api.spotify.com/v1/artists/08GQAI4eElDnROBrJRGE0X",
        id: "08GQAI4eElDnROBrJRGE0X",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebc8752dd511cda8c31e9daee8",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174c8752dd511cda8c31e9daee8",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178c8752dd511cda8c31e9daee8",
            width: 160,
          },
        ],
        name: "Fleetwood Mac",
        popularity: 84,
        type: "artist",
        uri: "spotify:artist:08GQAI4eElDnROBrJRGE0X",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/13ubrt8QOOCPljQ2FL1Kca",
        },
        followers: {
          href: null,
          total: 16505968,
        },
        genres: ["rap"],
        href: "https://api.spotify.com/v1/artists/13ubrt8QOOCPljQ2FL1Kca",
        id: "13ubrt8QOOCPljQ2FL1Kca",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb5c58c41a506a0d6b32cc6cad",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051745c58c41a506a0d6b32cc6cad",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1785c58c41a506a0d6b32cc6cad",
            width: 160,
          },
        ],
        name: "A$AP Rocky",
        popularity: 87,
        type: "artist",
        uri: "spotify:artist:13ubrt8QOOCPljQ2FL1Kca",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3pK4EcflBpG1Kpmjk5LK2R",
        },
        followers: {
          href: null,
          total: 45180,
        },
        genres: [],
        href: "https://api.spotify.com/v1/artists/3pK4EcflBpG1Kpmjk5LK2R",
        id: "3pK4EcflBpG1Kpmjk5LK2R",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eba99dd2491b9e5dac906a91c6",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174a99dd2491b9e5dac906a91c6",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178a99dd2491b9e5dac906a91c6",
            width: 160,
          },
        ],
        name: "Joy Anonymous",
        popularity: 56,
        type: "artist",
        uri: "spotify:artist:3pK4EcflBpG1Kpmjk5LK2R",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d",
        },
        followers: {
          href: null,
          total: 10684591,
        },
        genres: ["k-pop"],
        href: "https://api.spotify.com/v1/artists/6HvZYsbFfjnjFrWF950C9d",
        id: "6HvZYsbFfjnjFrWF950C9d",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb80668ba2b15094d083780ea9",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab6761610000517480668ba2b15094d083780ea9",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f17880668ba2b15094d083780ea9",
            width: 160,
          },
        ],
        name: "NewJeans",
        popularity: 80,
        type: "artist",
        uri: "spotify:artist:6HvZYsbFfjnjFrWF950C9d",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5IcR3N7QB1j6KBL8eImZ8m",
        },
        followers: {
          href: null,
          total: 5001766,
        },
        genres: [],
        href: "https://api.spotify.com/v1/artists/5IcR3N7QB1j6KBL8eImZ8m",
        id: "5IcR3N7QB1j6KBL8eImZ8m",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eba59f2f483877c8d0142f71f3",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174a59f2f483877c8d0142f71f3",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178a59f2f483877c8d0142f71f3",
            width: 160,
          },
        ],
        name: "ScHoolboy Q",
        popularity: 76,
        type: "artist",
        uri: "spotify:artist:5IcR3N7QB1j6KBL8eImZ8m",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0spHbv2fw49lDMkbOAdaqX",
        },
        followers: {
          href: null,
          total: 658059,
        },
        genres: [],
        href: "https://api.spotify.com/v1/artists/0spHbv2fw49lDMkbOAdaqX",
        id: "0spHbv2fw49lDMkbOAdaqX",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb172d5c6e9176e108edf89c19",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174172d5c6e9176e108edf89c19",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178172d5c6e9176e108edf89c19",
            width: 160,
          },
        ],
        name: "WWE",
        popularity: 69,
        type: "artist",
        uri: "spotify:artist:0spHbv2fw49lDMkbOAdaqX",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4V8LLVI7PbaPR0K2TGSxFF",
        },
        followers: {
          href: null,
          total: 21807760,
        },
        genres: [],
        href: "https://api.spotify.com/v1/artists/4V8LLVI7PbaPR0K2TGSxFF",
        id: "4V8LLVI7PbaPR0K2TGSxFF",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebdfa2b0c7544a772042a12e52",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174dfa2b0c7544a772042a12e52",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178dfa2b0c7544a772042a12e52",
            width: 160,
          },
        ],
        name: "Tyler, The Creator",
        popularity: 91,
        type: "artist",
        uri: "spotify:artist:4V8LLVI7PbaPR0K2TGSxFF",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/40ZNYROS4zLfyyBSs2PGe2",
        },
        followers: {
          href: null,
          total: 6541619,
        },
        genres: ["country", "red dirt"],
        href: "https://api.spotify.com/v1/artists/40ZNYROS4zLfyyBSs2PGe2",
        id: "40ZNYROS4zLfyyBSs2PGe2",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb4fd54df35bfcfa0fc9fc2da7",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051744fd54df35bfcfa0fc9fc2da7",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1784fd54df35bfcfa0fc9fc2da7",
            width: 160,
          },
        ],
        name: "Zach Bryan",
        popularity: 89,
        type: "artist",
        uri: "spotify:artist:40ZNYROS4zLfyyBSs2PGe2",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4oUHIQIBe0LHzYfvXNW4QM",
        },
        followers: {
          href: null,
          total: 12507338,
        },
        genres: ["country"],
        href: "https://api.spotify.com/v1/artists/4oUHIQIBe0LHzYfvXNW4QM",
        id: "4oUHIQIBe0LHzYfvXNW4QM",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb4245b1652fcc23f2b76ccd07",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051744245b1652fcc23f2b76ccd07",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1784245b1652fcc23f2b76ccd07",
            width: 160,
          },
        ],
        name: "Morgan Wallen",
        popularity: 92,
        type: "artist",
        uri: "spotify:artist:4oUHIQIBe0LHzYfvXNW4QM",
      },
    ],
    total: 124,
    limit: 50,
    offset: 0,
    href: "https://api.spotify.com/v1/me/top/artists?limit=50&locale=*",
    next: "https://api.spotify.com/v1/me/top/artists?offset=50&limit=50&locale=*",
    previous: null,
  },
};

const sampleArtists = parseData(sampleData.data);

export default sampleArtists;
