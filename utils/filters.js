const { DateTime } = require("luxon");

module.exports = {
  humanizeDate: (date) => {
    return DateTime.fromJSDate(date).toLocaleString({
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Europe/Warsaw",
    });
  },
  getLanguage: (lang) => {
    switch (lang) {
      case "en":
        return "English";
      case "pl":
        return "Polish";
      default:
        return "English";
    }
  },
  formatDate: (date) => DateTime.fromJSDate(date).toFormat("yyyy-MM-dd"),
  toISO: (date) => DateTime.fromJSDate(date, { zone: "Europe/Warsaw" }).toISO(),
  formatISO: (dateString) => DateTime.fromISO(dateString).toFormat("yyyy-MM-dd"),
  getYear: (date) => DateTime.fromJSDate(date, { zone: "Europe/Warsaw" }).toFormat("yyyy"),
};
