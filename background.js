chrome.commands.onCommand.addListener(async (cmd) => {
  if (cmd !== "redirect") return;

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab || !tab.url) return;

  try {
    const url = new URL(tab.url);
    const whitelist = ["github.com", "deepwiki.com"];
    
    if (!whitelist.includes(url.hostname)) {
      throw new Error(`不正なドメイン: ${url.hostname}`);
    }

    if (url.hostname === "github.com") {
      url.hostname = "deepwiki.com";
      await chrome.tabs.update(tab.id, { url: url.toString() });
    } else if (url.hostname === "deepwiki.com") {
      url.hostname = "github.com";
      await chrome.tabs.update(tab.id, { url: url.toString() });
    }
  } catch (error) {
    console.error("DeepWiki AutoRedirect エラー:", error);
    chrome.notifications.create({
      type: "basic",
      title: "DeepWiki AutoRedirect",
      message: `エラー発生: ${error.message}`
    });
  }
});
