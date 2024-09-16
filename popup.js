document.getElementById("download").addEventListener("click", () => {
  browser.runtime.sendMessage({ action: "download" });
});
