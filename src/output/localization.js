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
    car_name: "Car Name",
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
    incorrect_car_choice: "Incorrect car choice",
    endurance_multiplied: "endurance round: points multiplied by",
    page_not_found: "Page not found",
    last_updated: "Last updated at",
    series: "series",
    historical: "historical",
    manual_result_applied: "Manual result applied"
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
    car_name: "Bil Namn",
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
    incorrect_car_choice: "val av fel bil",
    endurance_multiplied: "endurance round: points multiplied by",
    page_not_found: "Sidan kan inte hittas",
    last_updated: "Senast uppdaterad vid",
    series: "serier",
    historical: "historiska",
    manual_result_applied: "Manuellt resultat tillämpat"
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
