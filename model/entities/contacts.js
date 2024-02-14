function recordLabelCalculation(record) {
    return record.field('lastName').val() + ', ' + record.field('firstName').val();
}

function fullNameFieldCalculation(record) {
    return record.field('firstName').val() + ' ' + record.field('lastName').val();
}