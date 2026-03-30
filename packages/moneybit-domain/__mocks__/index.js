import { AccountTypeChart, Journal } from "../index.js";

import journalObj from "./journal.json" with { type: "json" };
import chartObj from "./chart.json" with { type: "json" };

export const chart = new AccountTypeChart.Factory().createFromObject(chartObj);
export const journal = new Journal.Factory().createFromArray(journalObj);
