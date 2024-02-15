function activateActions(record, oldRecord, action) {
    record.field('status').val('active');
    sys.data.save(record);
}

function deactivateActions(record, oldRecord, action) {
    record.field('status').val('inactive');
    sys.data.save(record);
}