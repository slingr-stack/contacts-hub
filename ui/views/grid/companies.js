function contactsColumnCalculation(record) {
    return sys.data.count('contacts', {company: record.id()});
}