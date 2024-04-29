const accountId = 232442
let accountEmail = "Saurabh@google.com"
var  accountPassword = "23132"
accountCity = 'Noida'
let accountState;


// accountId =132797 It does not allow because It is const (Constant value) so const value never change in program.

/*
prefer not to use var.
because of issue in block scope {} and functional scope{}.

*/

console.log(accountId);

accountEmail = "hc@google.com"
accountPassword = "899889"
accountCity = "GuruGaon"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

