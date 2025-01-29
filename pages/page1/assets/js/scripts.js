function calculateGWA() {
  // Get the values of name and grades
  var name = document.getElementById("name").value;
  var grade1 = parseFloat(document.getElementById("grade1").value);
  var grade2 = parseFloat(document.getElementById("grade2").value);
  var grade3 = parseFloat(document.getElementById("grade3").value);
  var grade4 = parseFloat(document.getElementById("grade4").value);
  var grade5 = parseFloat(document.getElementById("grade5").value);

  // Ensure all grades are entered as numbers
  if (isNaN(grade1) || isNaN(grade2) || isNaN(grade3) || isNaN(grade4) || isNaN(grade5)) {
    alert("Please enter valid grades.");
    return;
  }

  // Calculate the GWA
  var gwa = (grade1 + grade2 + grade3 + grade4 + grade5) / 5;

  // Display the result
  document.getElementById("gwa").innerHTML = name + ", your General Weighted Average (GWA) is: " + gwa.toFixed(2);
}