chrome.commands.onCommand.addListener(async (cmd) => {
  if (cmd !== "redirect") return;

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab || !tab.url) return;

  try {
    const url = new URL(tab.url);
    if (url.hostname === "github.com") {
      url.hostname = "deepwiki.com";
      chrome.tabs.update(tab.id, { url: url.toString() });
    } else if (url.hostname === "gitlab.com") {
      url.hostname = "deepwiki.com";
      chrome.tabs.update(tab.id, { url: url.toString() });
    } else {
      chrome.notifications.create({
        type: "basic",
        iconUrl: "icon.png",
        title: "DeepWiki AutoRedirect",
        message: "このURLは変換できません。GitHub/GitLabのみ対応しています。"
      });
    }
  } catch (error) {
    console.error("DeepWiki AutoRedirect エラー:", error);
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icon.png",
      title: "DeepWiki AutoRedirect",
      message: "URLの変換中にエラーが発生しました。"
    });
  }
});
