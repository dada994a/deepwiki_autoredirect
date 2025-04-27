chrome.commands.onCommand.addListener(async (cmd) => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab || !tab.url) return;

  try {
    if (cmd === "redirect-root") {
      chrome.tabs.update(tab.id, { url: "https://deepwiki.com/" });
      return;
    }

    if (cmd === "redirect") {
      const url = new URL(tab.url);
      if (url.hostname !== "github.com") return;
      url.hostname = "deepwiki.com";
      chrome.tabs.update(tab.id, { url: url.toString() });
    }
  } catch {
  }
});
