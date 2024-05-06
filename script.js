// Function to calculate h-parameters for a two-port network
function calculateHParameters() {
    // Get the input values
    var v1 = parseFloat(document.getElementById('v1').value);
    var i1 = parseFloat(document.getElementById('i1').value);
    var v2 = parseFloat(document.getElementById('v2').value);
    var i2 = parseFloat(document.getElementById('i2').value);

    // Calculate h-parameters
    var h11 = v1 / i1;
    var h12 = i2 / i1;
    var h21 = i2 / v1;
    var h22 = v2 / i2;

    // Calculate determinant
    var determinant = (h11 * h22) - (h12 * h21);

    // Display the results in boxes
    document.getElementById('h-parameter').innerHTML = determinant;
    document.getElementById('h11-parameter').innerHTML = h11;
    document.getElementById('h12-parameter').innerHTML = h12;
    document.getElementById('h21-parameter').innerHTML = h21;
    document.getElementById('h22-parameter').innerHTML = h22;
}
