/*
 View: contactInfo
WARNING! This file is generated by Slingr. You shouldn't add new functions or delete the functions
manually unless you know what you are doing. To be safe, only modify the scripts inside functions.
*/

function notesTableRowsCalculation(record, options) {
    let rows = [];
    let filters = options.filters || {};
    let notes = record.field('notes').val();
    let from = options.from || 0;
    let to = options.to || notes.length;
    // apply filtering based on the 'note' column
    notes = notes.filter(function(noteItem) {
        let noteValue = noteItem.note
        if (filters.note && noteValue.toLowerCase().includes(filters.note.toLowerCase())) {
            return true;
        }
        return !filters.note;
    });
    // retrieve only the requested batch
    let notesBatch = notes.slice(from, to);
    notesBatch.forEach(function (note) {
        let userField = note.field('user');
        let noteField = note.field('note');
        rows.push({
            user: userField.label(),
            note: noteField.val()
        });
    });
    let columns = [
        {
            name: "user",
            label: "User"
        },
        {
            name: "note",
            label: "Note",
            options: {
                allowFiltering: true
            }
        }
    ];
    return {
        columns: columns,
        rows: rows
    };
}
