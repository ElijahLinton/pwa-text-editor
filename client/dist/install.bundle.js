(() => {
  const e = document.getElementById("buttonInstall");
  window.addEventListener("beforeinstallprompt", (d) => {
    console.log("event" + d),
      (window.defferedPrompt = d),
      e.classList.toggle("hidden", !1);
  }),
    e.addEventListener("click", async () => {
      const d = window.defferedPrompt;
      d &&
        (d.prompt(),
        (window.defferedPrompt = null),
        e.classList.toggle("hidden", !0));
    }),
    window.addEventListener("appinstalled", (e) => {
      window.defferedPrompt = null;
    });
})();
