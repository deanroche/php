const slugify = function(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, "") // Trim - from end of text
}

const sortDays = function(days) {
  const sorter = {
    // "sunday": 0, // << if sunday is first day of week
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
    sunday: 7,
  }

  days.sort(function sortByDay(a, b) {
    let day1 = a.toLowerCase()
    let day2 = b.toLowerCase()
    return sorter[day1] - sorter[day2]
  })
  return days
}

module.exports = { slugify, sortDays }
