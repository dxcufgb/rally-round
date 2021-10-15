const initialState = {
  pointsForDNF: false,
  // websiteName: "jrc-results",
  subfolderName: "worldcup",
  showLivePoints: true,
  showLivePointsDaysRemaining: 4,
  showCarNameAsTextInResults: true,
  hideCarColumnInStandings: false,
  useCarAsTeam: false,
  useNationalityAsTeam: true,
  disableOverall: true,
  teamPointsForPowerstage: false,
  backgroundStyle:
    "background-image: linear-gradient(#2193b0, #6dd5ed); background-size: cover; background-repeat: no-repeat; background-attachment: fixed;",
  divisions: {
    worldCup: {
      divisionName: "worldCup",
      displayName: "JRC World Cup",
      disableSameCarValidation: true,
      // clubs: [{ clubId: "397779", championshipIds: ["???"] }],
      clubs: [{ clubId: "192069", championshipIds: ["521161"] }],
      events: [],
      points: {
        powerStage: [5, 4, 3, 2, 1],
        overall: [
          44,
          40,
          37,
          34,
          32,
          30,
          28,
          27,
          26,
          25,
          24,
          23,
          22,
          21,
          20,
          19,
          18,
          17,
          16,
          15,
          14,
          13,
          12,
          11,
          10,
          9,
          8,
          7,
          6,
          5,
          4,
          3,
          2,
          1,
          1
        ]
      },
      manualResults: []
    }
  }
};

module.exports = initialState;
