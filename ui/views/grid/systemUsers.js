/*
 View: systemUsers
WARNING! This file is generated by Slingr. You shouldn't add new functions or delete the functions
manually unless you know what you are doing. To be safe, only modify the scripts inside functions.
*/

function lastLoginCalculation(record, parentField, action) {
    return sys.internal.users.getLastLoginDate(record);
}

function fromIpCalculation(record, parentField, action) {
    return sys.internal.users.getLastLoginIp(record);
}

function connectionStatusCalculation(record, parentField, action) {
    return sys.internal.users.getConnectionStatus(record);
}
