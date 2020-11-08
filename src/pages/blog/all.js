import React from "react"
import ChainingContextManagersForMocks from "./chaining-context-managers-for-mocks"
import DailyOdooTeamRoutine from "./daily-odoo-team-routine"
import GuideToERP from "./guide-to-erp"
import GuideToNoBullshitBusinessMetrics from "./guide-to-no-bullshit-business-metrics"
import SimpleBusinessManifesto from "./simple-business-manifesto"
import WhatsInPython3dot8 from "./whats-in-python3.8"

export const articles = [
  ChainingContextManagersForMocks,
  DailyOdooTeamRoutine,
  GuideToERP,
  GuideToNoBullshitBusinessMetrics,
  SimpleBusinessManifesto,
  WhatsInPython3dot8,
]

// Workaround. Gatsby forces all page files to have a default export.
export default () => {
  return (<div></div>)
}
