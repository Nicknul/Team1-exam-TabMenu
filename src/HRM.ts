document.addEventListener("DOMContentLoaded", () => {
  const names = ["구하림", "송이현", "김정수", "정호연", "이연승"];
  const root = document.getElementById("root");

  if (!root) return;

  // Create tabs container
  const tabsContainer = document.createElement("div");
  tabsContainer.id = "tabs";

  // Append tabs and content container to root
  root.appendChild(tabsContainer);

  // Create tabs
  names.forEach((name) => {
    const tab = document.createElement("div");
    tab.className = "tab";
    tab.dataset.name = name;
    tab.textContent = name;
    tabsContainer.appendChild(tab);
  });

  const tabs = document.querySelectorAll(".tab");

  function updateActiveTab() {
    const hash = location.hash.substring(1);
    tabs.forEach((tab) => {
      if (tab instanceof HTMLElement) {
        if (tab.dataset.name === hash) {
          tab.classList.add("active");
        } else {
          tab.classList.remove("active");
        }
      }
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      if (tab instanceof HTMLElement) {
        const name = tab.dataset.name!;
        location.hash = name;
        const newWindow = window.open("", "_blank", "width=300,height=200");
        if (newWindow) {
          newWindow.document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>${name}</title>
            </head>
            <body>
              <p>안녕 나는 ${name} 이야</p>
            </body>
            </html>
          `);
        }
      }
    });
  });

  window.addEventListener("hashchange", updateActiveTab);

  // Initialize
  if (location.hash) {
    updateActiveTab();
  } else {
    location.hash = names[0];
  }
});
