timeline_data = 
{
    friday : [
        ["14:30", "Wedding", "<3", "Buitenland"],
        ["14:30", "Wedding", "<3", "Buitenland"],
        ["14:30", "Wedding", "<3", "Buitenland"],
    ],
    saturday : [
        ["14:30", "Wedding", "<3", "Buitenland"],
        ["14:30", "Wedding", "<3", "Buitenland"],
        ["14:30", "Wedding", "<3", "Buitenland"],
    ],
    sunday : [
        ["14:30", "Wedding", "<3", "Buitenland"],
        ["14:30", "Wedding", "<3", "Buitenland"],
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