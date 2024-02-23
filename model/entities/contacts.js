function recordLabel(record) {
    return record.field('lastName').val() + ', ' + record.field('firstName').val();
}

function fullNameFieldCalculation(record) {
    if (app.commons.stringUtils.isNotEmpty(record.field('firstName').val()) && app.commons.stringUtils.isNotEmpty(record.field('lastName').val())) {
        return app.commons.stringUtils.trim(record.field('firstName').val()) + ' ' + app.commons.stringUtils.trim(record.field('lastName').val());
    }
    return null;
}

function notesUserFieldDefaultValue() {
    return sys.context.getCurrentUserRecord();
}

function addNoteActions(record, oldRecord, action) {
    record.field('notes').add({
        note: action.field('note').val()
    });
    sys.data.save(record);
}