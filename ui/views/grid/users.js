
function contactsColumnCalculation(record) {
    return sys.internal.users.lastLoginColumnCalculation(record);
}

function fromIpColumnCalculation(record) {
    return sys.internal.users.getLastLoginIp(record);
}

function connectionStatusColumnCalculation(record) {
    return sys.internal.users.getConnectionStatus(record);
}