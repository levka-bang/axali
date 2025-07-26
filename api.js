document.addEventListener("DOMContentLoaded", function () {
  const link = document.getElementById("pictureOfDayLink");

  link.addEventListener("click", function (e) {
    e.preventDefault();

    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((res) => res.json())
      .then((data) => {
        showApod(data);
      })
      .catch((err) => {
        console.error("Error fetching APOD:", err);
      });
  });

  function showApod(data) {

    const existing = document.getElementById("apodModal");
    if (existing) existing.remove();

    const modal = document.createElement("div");
    modal.id = "apodModal";
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0,0,0,0.9)";
    modal.style.color = "white";
    modal.style.zIndex = "1000";
    modal.style.overflowY = "auto";
    modal.style.padding = "40px";
    modal.style.boxSizing = "border-box";

    modal.innerHTML = `
      <div style="max-width: 900px; margin: auto;">
        <button id="closeApod" style="font-size: 24px; float: right; background: none; border: none; color: white;">&times;</button>
        <h1>${data.title}</h1>
        <p>${data.date}</p>
        ${data.media_type === "image" ? `<img src="${data.url}" alt="${data.title}" style="width: 100%; border-radius: 10px;">` : `<iframe width="100%" height="500" src="${data.url}" frameborder="0" allowfullscreen></iframe>`}
        <p style="margin-top: 20px;">${data.explanation}</p>
      </div>
    `;

    document.body.appendChild(modal);

    document.getElementById("closeApod").addEventListener("click", () => {
      modal.remove();
    });
  }
});
