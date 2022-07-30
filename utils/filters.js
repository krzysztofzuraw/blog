const { DateTime } = require("luxon");

module.exports = {
  humanizeDate: (date) =>
    DateTime.fromJSDate(date).toLocaleString({
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Europe/Warsaw",
    }),
  getLanguage: (lang) => (lang === "pl" ? "Polish" : "English"),
  formatDate: (date) =>
    DateTime.fromJSDate(date).toLocaleString({
      locale: "pl-PL",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      timeZone: "Europe/Warsaw",
    }),
  toISO: (date) => DateTime.fromJSDate(date, { zone: "Europe/Warsaw" }).toISO(),
  getYear: (date) => DateTime.fromJSDate(date, { zone: "Europe/Warsaw" }).toFormat("yyyy"),
};
