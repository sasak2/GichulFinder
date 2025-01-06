document.getElementById("searchButton").addEventListener("click", function() {
  const imageName = document.getElementById("imageName").value.trim();
  const resultDiv = document.getElementById("result");

  if (imageName) {
    const imagePath = `file/${imageName}`;
    const img = new Image();

    img.onload = function() {
      resultDiv.innerHTML = "";
      resultDiv.appendChild(img);
    };

    img.onerror = function() {
      resultDiv.innerHTML = `<p>Image not found: ${imageName}</p>`;
    };

    img.src = imagePath;
  } else {
    resultDiv.innerHTML = "<p>Please enter an image name.</p>";
  }
});
