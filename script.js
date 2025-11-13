function calculate() {
  let electricity = parseFloat(document.getElementById("electricity").value);
  let water = parseFloat(document.getElementById("water").value);
  let travel = parseFloat(document.getElementById("travel").value);

  if (isNaN(electricity) || isNaN(water) || isNaN(travel)) {
    alert("Please fill all the fields!");
    return;
  }

  let footprint = (electricity * 0.92) + (water * 0.001) + (travel * 0.21);
  let resultDiv = document.getElementById("result");
  let tipsDiv = document.getElementById("tips");

  resultDiv.innerHTML = `🌍 Your Carbon Footprint: <b>${footprint.toFixed(2)} kg CO₂/day</b>`;

  let message = "";
  let tips = "";
  let color = "";

  if (footprint < 10) {
    message = "✅ Excellent! You are very eco-friendly!";
    tips = "Keep up the great work! Continue conserving energy 💚";
    color = "#2e7d32";
  } else if (footprint < 25) {
    message = "⚠️ You can improve a bit!";
    tips = "Try switching to public transport or using LEDs 🚲";
    color = "#fbc02d";
  } else {
    message = "❌ High Carbon Emission!";
    tips = "Reduce electricity and vehicle use, and try renewable energy 🌞";
    color = "#c62828";
  }

  resultDiv.style.color = color;
  resultDiv.innerHTML += `<br>${message}`;
  tipsDiv.innerHTML = `<b>Tip:</b> ${tips}`;
}