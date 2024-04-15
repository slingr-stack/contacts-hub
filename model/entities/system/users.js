
function fullNameFieldCalculation(record) {
    return (!record.field('firstName').isEmpty() ? record.field('firstName').val() : '') + ' ' + (!record.field('lastName').isEmpty() ? record.field('lastName').val() : '');
}

function emailFieldCalculation(record) {
    return !record.field('email').isEmpty() ? record.field('email').val().trim().toLowerCase(): null;
}

function sendWelcomeEmailFieldVisible(record) {
    return record.isNew();
}

function generatePasswordFieldVisible(record) {
    return record.isNew() && !record.field('sendWelcomeEmail').val();
}

function newPasswordFieldRequired(record) {
    return record.isNew() && !record.field('authentication.generatePassword').val();
}

function newPasswordFieldReadWriteAccess(record) {
    return record.isNew() && !record.field('authentication.generatePassword').val();
}

function passwordConfirmationFieldRequired(record) {
    return record.isNew() && !record.field('authentication.generatePassword').val();
}

function passwordConfirmationFieldReadWriteAccess(record) {
    return record.isNew() && !record.field('authentication.generatePassword').val();
}

function phoneNumberFieldRequired(record) {
    return record.isNew() && !record.field('authentication.generatePassword').val();
}

function phoneNumberFieldReadWriteAccess(record) {
    return record.isNew() && !record.field('authentication.generatePassword').val();
}

function identityProvidersFieldRequired(record) {
    return !record.isNew();
}
