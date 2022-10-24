const localization = {
  en: {
    driver_standings: "Driver Standings",
    driver_results: "Driver Results",
    team_standings: "Team Standings",
    stage_points: "Stage Points",
    total_points: "Total Points",
    nat: "Nat",
    pos: "Pos",
    driver: "Driver",
    div: "Div",
    team: "Team",
    stage: "Stage",
    total: "Total",
    team_name: "Team Name",
    car: "Car",
    ps: "PS",
    sr: "SR",
    diff: "Diff",
    points: "Points",
    overall: "Overall",
    gap: "Gap",
    cost: "Cost",
    budget: "Budget",
    profit: "Profit",
    value: "Value / €",
    transfers: "Transfers",
    location: "Location",
    captain: "Captain",
    valid_qn: "Is it valid",
    roster_to_clipboard: "Copy roster to clipboard",
    adr: "ADR*",
    full_results: "full results",
    second_penalty: "second penalty applied for incorrect car choice",
    endurance_multiplied: "endurance round: points multiplied by",
    page_not_found: "Page not found",
    last_updated: "Last updated at"
  },
  se: {
    driver_standings: "Poängställning",
    driver_results: "Resultat",
    team_standings: "Teammästerskap",
    stage_points: "Sträckpoäng",
    total_points: "Totalpoäng",
    nat: "Nat",
    pos: "Pos",
    driver: "Förare",
    div: "Div",
    team: "Team",
    stage: "Sträcka",
    total: "Total",
    team_name: "Team",
    car: "Bil",
    ps: "PS",
    sr: "SR",
    diff: "Diff",
    points: "Poäng",
    overall: "Total",
    gap: "Gap",
    cost: "Cost",
    profit: "Profit",
    value: "Value / €",
    location: "Location",
    captain: "Captain",
    adr: "ADR*",
    full_results: "fullständigt resultat",
    second_penalty: "sekunder tidstillägg för val av fel bil",
    endurance_multiplied: "endurance round: points multiplied by",
    page_not_found: "Sidan kan inte hittas",
    last_updated: "Senast uppdaterad vid"
  }
};

const getLocalization = () => {
  if (process.env.LOCALE && localization[process.env.LOCALE]) {
    return localization[process.env.LOCALE];
  }
  return localization.en;
};

const translate = stringToTranslate => {
  if (process.env.LOCALE && localization[process.env.LOCALE]) {
    let translatedString = localization[process.env.LOCALE][stringToTranslate];
    if (typeof translatedString != "undefined") {
      return translatedString;
    } else if (typeof localization.en[stringToTranslate] != "undefined") {
      return localization.en[stringToTranslate];
    } else {
      return stringToTranslate;
    }
  }
  return localization.en[stringToTranslate];
};

module.exports = { getLocalization, translate };
