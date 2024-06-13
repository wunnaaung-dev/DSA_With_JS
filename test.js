//    #
//   ##
//  ###
// ####
function staircase(n) { // 4
   for(let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "#".repeat(i))
   }

}



staircase(4)