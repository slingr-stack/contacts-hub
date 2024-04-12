
function fullNameFieldCalculation(record) {
    return (!record.field('firstName').isEmpty() ? record.field('firstName').val() : '') + ' ' + (!record.field('lastName').isEmpty() ? record.field('lastName').val() : '');
}

function emailFieldCalculation(record) {
    return !record.field('email').isEmpty() ? record.field('email').val().trim().toLowerCase(): null;
}

function sendWelcomeEmailFieldVisible(record) {
    return record.isNew();
}