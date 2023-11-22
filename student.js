const Calculator = () => {
    let math = document.getElementById("math").value;
    let phy = document.getElementById("phy").value;
    let chem = document.getElementById("chem").value;
    let bio = document.getElementById("bio").value;
    let comp = document.getElementById("comp").value;

    let total =
      parseFloat(math) +
      parseFloat(phy) +
      parseFloat(chem) +
      parseFloat(bio) +
      parseFloat(comp);
    let percentage = (total * 100) / 500;
    let grade;
    if (percentage <= 100 && percentage >= 85) {
      grade = "A";
    } else if (percentage <= 84 && percentage >= 75) {
      grade = "B";
    } else if (percentage <= 74 && percentage >= 65) {
      grade = "C";
    } else if (percentage <= 64 && percentage >= 55) {
      grade = "D";
    } else {
      grade = "F";
    }

    document.getElementById("total").innerHTML = total;
    document.getElementById("percentage").innerHTML = percentage;
    document.getElementById("grade").innerHTML = grade;
  };