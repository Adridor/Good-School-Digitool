// let modalsAction = () => {
//
//   $("#mySignIn").click(function() {
//     $("#myModalSignIn").modal();
//   });
//
//   $("#mySignInRegister").click(function() {
//     // $("#myModalSignIn").hide() && $("#myModalSignUp").modal();
//     $("#myModalSignIn").modal("hide") && $("#myModalSignUp").modal();
//   });
//
//   $("#mySignUp").click(function() {
//     $("#myModalSignUp").modal();
//   });
//
// };

//integration json en modal bs

//modal Eau
$(document).on("click", "#clicktypeEau", function() {
  $.getJSON("./Assets/JSON/action.json", function(data) {
    let rand = Math.floor(Math.random() * 3) + 1;
    console.log(rand);
    var action = data[1].action[rand];
    $('.actionTitle').html('Eau');
    $('.doAction').html('<p> ' + action + ' </p>');
  });
});

//modal energie
$(document).on("click", "#clicktypeEnergie", function() {
  $.getJSON("./Assets/JSON/action.json", function(data) {
    let rand = Math.floor(Math.random() * 3) + 1;
    var action = data[0].action[rand];
    $('.actionTitle').html('Energie');
    $('.doAction').html('<p> ' + action + ' </p>');
  });
});
//modal dechets
$(document).on("click", "#clicktypeDechet", function() {
  $.getJSON("./Assets/JSON/action.json", function(data) {
    let rand = Math.floor(Math.random() * 3) + 1;
    var action = data[2].action[rand];
    $('.actionTitle').html('Déchets');
    $('.doAction').html('<p>' + action + ' </p>');
  });
});