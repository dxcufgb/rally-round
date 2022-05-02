const initialState = {
  pointsForDNF: false,
  websiteName: "rsc-results",
  useStandingsForHome: true,
  // subfolderName: "rbr",
  showLivePoints: true,
  showLivePointsDaysRemaining: 4,
  noSuperRallyPointsMultiplier: 2,
  showSuperRallyColumn: true,
  hideCarColumnInStandings: true,
  showCarNameAsTextInResults: true,
  nullTeamIsPrivateer: true,
  // useCarAsTeam: false,
  // useCarClassAsTeam: true,
  showTeamNameTextColumn: true,
  hideTeamLogoColumn: true,
  disableOverall: true,
  teamPointsForPowerstage: false,
  backgroundStyle:
    "background-image: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%); background-size: cover; background-repeat: no-repeat; background-attachment: fixed;",
  logo: "rsc-guy.png",
  siteTitlePrefix: "RSC",
  divisions: {
    rsc: {
      divisionName: "rsc",
      displayName: "RSC Season 4",
      disableSameCarValidation: true,
      // enableSameCarClassValidation: true,
      // maxDriversScoringPointsForTeam: 2,
      // filterEntries: true,
      rbr: {
        rallies: [
          {
            eventId: 43066,
            endTime: "2022-04-25 12:00",
            locationName: "Rally GB",
            locationFlag: "GB",
            numStages: 20,
            enduranceRoundMultiplier: 2
          },
          {
            eventId: 43383,
            endTime: "2022-05-02 12:00",
            locationName: "North West Stages",
            locationFlag: "NX",
            numStages: 7
          },
          {
            eventId: 43580,
            endTime: "2022-05-09 12:00",
            locationName: "Rally Papua New Guinea",
            locationFlag: "PG",
            numStages: 8
          }
        ]
      },
      manualResults: [],
      events: [],
      points: {
        powerStage: [5, 4, 3, 2, 1],
        overall: [30, 24, 19, 15, 12, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
        // stage: [1]
      }
      // cars: ["Peugeot 205 GTI"]
      // outputSheetId: "1C3fU9y1236wFmPuKcui4CEXBuSsUANH6OJ0BpQIasTc"
    }
  }
};
module.exports = initialState;
