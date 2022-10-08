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
  formatDate: (date) => DateTime.fromJSDate(date).toFormat("yyyy-LL-dd"),
  toISO: (date) => DateTime.fromJSDate(date, { zone: "Europe/Warsaw" }).toISO(),
  getYear: (date) => DateTime.fromJSDate(date, { zone: "Europe/Warsaw" }).toFormat("yyyy"),
};
