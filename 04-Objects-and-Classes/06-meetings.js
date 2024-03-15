function meeting(input) {
    const meetings = {};

    for (const line of input) {
        const [weekDay, name] = line.split(' ');

        if(meetings[weekDay]) {
            console.log(`Conflict on ${weekDay}!`)
        } else {
            meetings[weekDay] = name;
            console.log(`Scheduled for ${weekDay}`)
        }
    }

    for (const day in meetings) {
        console.log(`${day} -> ${meetings[day]}`);
    }
}

meeting(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])