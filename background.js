// Made By H_YPI
// This extension allows you to switch between GitHub and DeepWiki with a single command or split view.
// It uses the Chrome API to listen for commands and update the current tab or create a new window with the specified URL.
const swap = url =>
    url.replace(/^https:\/\/(github|deepwiki)\.com/, (_, h) =>
    h === 'github' ? 'https://deepwiki.com' : 'https://github.com');

chrome.commands.onCommand.addListener(async cmd => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab?.url) return;

  const other = swap(tab.url);
  if (other === tab.url) return;

  if (cmd === 'redirect') {
    chrome.tabs.update(tab.id, { url: other });
    return;
  }

  if (cmd === 'split_view') {
    const win = await chrome.windows.getCurrent();
    const half = Math.floor(win.width / 2);

    await chrome.windows.update(win.id, {
      state: 'normal',
      left: win.left,
      top: win.top,
      width: half,
      height: win.height
    });

    await chrome.windows.create({
      url: other,
      left: win.left + half,
      top: win.top,
      width: win.width - half,
      height: win.height,
      focused: true,
      type: 'normal'
    });
  }
});
