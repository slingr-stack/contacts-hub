function recordLabel(record) {
    return record.field('lastName').val() + ', ' + record.field('firstName').val();
}

function fullNameFieldCalculation(record) {
    return record.field('firstName').val() + ' ' + record.field('lastName').val();
}

function userFieldDefaultValue() {
    return sys.context.getCurrentUserRecord();
}

function addNoteActions(record, oldRecord, action) {
    record.field('notes').add({
        note: action.field('note').val()
    });
    sys.data.save(record);
}