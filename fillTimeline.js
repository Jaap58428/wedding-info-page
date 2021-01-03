timeline_data = 
{
    friday : [
        // ["14:30", "Wedding", "<3", "Buitenland"],
        ["17:00", "Check-in", "🛎️", "Buitenland"],
        ["17:00 - 19:45", "Free Time", "⛱️", "Wherever you want"],
        ["20:00", "Legal Ceremony", "💏", "In front of Big Tipi"],
        ["21:00", "Small Toast At The Campfire", "🥂", "Buitenland"],
    ],
    saturday : [
        ["11:00", "Departure To Church", "🚌", "Buitenland"],
        ["12:00", "Church Wedding", "💒", "Somewhere"],
        ["13:00", "Toast & Lunch", "🥗", "Buitenland"],
        ["15:00", "Cake", "🍰", "Buitenland"],
        ["16:30", "Karaoke", "🎤", "Buitenland"],
        ["18:00", "Dinner", "🍽️", "Buitenland"],
        ["20:00", "First Dance", "💞", "Buitenland"],
        ["20:05", "Partay", "🎉", "Buitenland"],
        ["22:30", "Silent Disco", "🎧", "Buitenland"],
        ["01:00", "Chilling At The Campfire", "🔥", "Buitenland"],
    ],
    sunday : [
        ["09:00 - 11:00", "Leftover Breakfast", "<3", "Buitenland"],
        ["11:00 - ??:??", "Cleaning up", "<3", "Buitenland"],
        ["14:30", "Wedding", "<3", "Buitenland"],
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

            entry.forEach(data_item => {
                new_tl_item_entry = document.createElement('div')
                new_tl_item_entry.classList.add('tl_item_entry')
                
                if (counter === 0) {new_tl_item_entry.classList.add('tl_item_entry_friday')}
                if (counter === 1) {new_tl_item_entry.classList.add('tl_item_entry_saturday')}
                if (counter === 2) {new_tl_item_entry.classList.add('tl_item_entry_sunday')}

                new_tl_item_entry.innerHTML = data_item
                new_tl_item.appendChild(new_tl_item_entry)
            });
            
            timeline_container.appendChild(new_tl_item)

        });



        counter += 1
    }
}