"use strict"
const contentful = require("contentful")

exports.handler = function(event, context, callback) {
  async function main() {
    const client = contentful.createClient({
      space: "uj0jgu2ewl2q",
      environment: "master",
      accessToken: "OISxlWyWRg054ycyu6jJAvZCed52WaoR8HPs5TotXsM",
    })

    let classes = {}

    let monday = []
    let tuesday = []
    let wednesday = []
    let thursday = []
    let friday = []
    let saturday = []
    let sunday = []

    client
      .getEntries({ include: 2, content_type: "timetableClass" })
      .then(response => {
        response.items.forEach(item => {
          let entry = {}
          switch (item.fields.day) {
            case "Monday":
              entry.startTime = item.fields.startTime
              entry.day = item.fields.day
              entry.time = `${item.fields.startTime} - ${item.fields.endTime}`
              entry.coach = item.fields.coach.fields.name || ""
              entry.class = item.fields.class.fields.name
              monday.push(entry)
              break
            case "Tuesday":
              entry.startTime = item.fields.startTime
              entry.day = item.fields.day
              entry.time = `${item.fields.startTime} - ${item.fields.endTime}`
              entry.coach = item.fields.coach.fields.name || ""
              entry.class = item.fields.class.fields.name
              tuesday.push(entry)
              break
            case "Wednesday":
              entry.startTime = item.fields.startTime
              entry.day = item.fields.day
              entry.time = `${item.fields.startTime} - ${item.fields.endTime}`
              entry.coach = item.fields.coach.fields.name || ""
              entry.class = item.fields.class.fields.name
              wednesday.push(entry)
              break
            case "Thursday":
              entry.startTime = item.fields.startTime
              entry.day = item.fields.day
              entry.time = `${item.fields.startTime} - ${item.fields.endTime}`
              entry.coach = item.fields.coach.fields.name || ""
              entry.class = item.fields.class.fields.name
              thursday.push(entry)
              break
            case "Friday":
              entry.startTime = item.fields.startTime
              entry.day = item.fields.day
              entry.time = `${item.fields.startTime} - ${item.fields.endTime}`
              entry.coach = item.fields.coach.fields.name || ""
              entry.class = item.fields.class.fields.name
              friday.push(entry)
              break
            case "Saturday":
              entry.startTime = item.fields.startTime
              entry.day = item.fields.day
              entry.time = `${item.fields.startTime} - ${item.fields.endTime}`
              entry.coach = item.fields.coach.fields.name || ""
              entry.class = item.fields.class.fields.name
              saturday.push(entry)
              break
            case "Sunday":
              entry.startTime = item.fields.startTime
              entry.day = item.fields.day
              entry.time = `${item.fields.startTime} - ${item.fields.endTime}`
              entry.coach = item.fields.coach.fields.name || ""
              entry.class = item.fields.class.fields.name
              sunday.push(entry)
              break
          }
        })
      })
      .then(() => {
        classes.monday = monday.sort((a, b) => {
          let day1 = parseFloat(a.startTime)
          let day2 = parseFloat(b.startTime)
          return day1 - day2
        })
        classes.tuesday = tuesday.sort((a, b) => {
          let day1 = parseFloat(a.startTime)
          let day2 = parseFloat(b.startTime)
          return day1 - day2
        })
        classes.wednesday = wednesday.sort((a, b) => {
          let day1 = parseFloat(a.startTime)
          let day2 = parseFloat(b.startTime)
          return day1 - day2
        })
        classes.thursday = thursday.sort((a, b) => {
          let day1 = parseFloat(a.startTime)
          let day2 = parseFloat(b.startTime)
          return day1 - day2
        })
        classes.friday = friday.sort((a, b) => {
          let day1 = parseFloat(a.startTime)
          let day2 = parseFloat(b.startTime)
          return day1 - day2
        })
        classes.saturday = saturday.sort((a, b) => {
          let day1 = parseFloat(a.startTime)
          let day2 = parseFloat(b.startTime)
          return day1 - day2
        })
        classes.sunday = sunday.sort((a, b) => {
          let day1 = parseFloat(a.startTime)
          let day2 = parseFloat(b.startTime)
          return day1 - day2
        })
      })
      .then(() => {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            classes: classes,
          }),
        })

        // callback(null, {
        //   statusCode: 200,
        //   body: {
        //     classes: {
        //       monday: classes[0],
        //       tuesday: classes[1],
        //       wednesday: classes[2],
        //       thursday: classes[3],
        //       friday: classes[4],
        //       saturday: classes[5],
        //       sunday: classes[6],
        //     },
        //   },
        // })
      })
      .catch(console.error)
  }
  main().catch(console.error)
}
