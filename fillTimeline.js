timeline_data = 
{
    friday : [
        ["From 17:00", "Check-in For Overnight Guests", "🛎️", "'t Buitenland"],
        ["17:00 - 19:45", "Free Time", "⛱️", "Wherever You Want"],
        ["20:00", "Legal Ceremony", "💏", "In Front Of Big Tipi"],
        ["21:00", "Small Toast", "🥂", "'t Buitenland"],
    ],
    saturday : [
        ["11:00", "All Guests Meet At The Venue", "🕚", "'t Buitenland"],
        ["11:15", "Departure To Church", "🚌", "In Front Of 't Buitenland"],
        ["12:00", "Church Wedding", "💒", "Sint-Jozefkerk Tilburg"],
        ["14:00", "Toast", "🥂", "'t Buitenland"],
        ["14:30", "Cake", "🍰", "'t Buitenland"],
        ["15:30", "SECRET ACTIVITY", "⁉️", "'t Buitenland"],
        ["16:30", "Karaoke", "🎤", "'t Buitenland"],
        ["18:00", "Dinner", "🍽️", "'t Buitenland"],
        ["19:00", "SECRET ACTIVITY", "⁉️", "'t Buitenland"],
        ["20:00", "First Dance", "💞", "'t Buitenland"],
        ["20:05", "Partay", "🎉", "'t Buitenland"],
        ["22:30", "Silent Disco", "🎧", "'t Buitenland"],
        ["01:00", "Chilling At The Campfire", "🔥", "'t Buitenland"],
    ],
    sunday : [
        ["09:00 - 11:00", "Leftover Breakfast", "🍛", "'t Buitenland"],
        ["11:00 - ??:??", "Cleaning up - Helping is appreciated", "🧼", "'t Buitenland"],
    ]
}

counter = 0

timeline_container = document.getElementById('timeline_container')

for (const days in timeline_data) {
    if (Object.hasOwnProperty.call(timeline_data, days)) {
        const day = timeline_data[days];

        dayHeader = document.createElement('h2')
        dayHeader.classList.add('dayHeader')

        if (counter === 0) {dayHeader.innerHTML = 'Friday'}
        if (counter === 1) {dayHeader.innerHTML = 'Saturday'}
        if (counter === 2) {dayHeader.innerHTML = 'Sunday'}

        timeline_container.appendChild(dayHeader)

        day.forEach(entry => {
            new_tl_item = document.createElement('div')
            new_tl_item.classList.add('tl_item')

            if (counter === 0) {new_tl_item.classList.add('tl_item_entry_friday')}
            if (counter === 1) {new_tl_item.classList.add('tl_item_entry_saturday')}
            if (counter === 2) {new_tl_item.classList.add('tl_item_entry_sunday')}

            data_index = 0

            entry.forEach(data_item => {
                new_tl_item_entry = document.createElement('div')
                new_tl_item_entry.classList.add('tl_item_entry')

                if (data_index == 2) {
                    new_tl_item_entry.classList.add('timeline_emoji')
                }

                new_tl_item_entry.innerHTML = data_item
                new_tl_item.appendChild(new_tl_item_entry)

                data_index += 1
            });
            
            timeline_container.appendChild(new_tl_item)

        });



        counter += 1
    }
}