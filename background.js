chrome.commands.onCommand.addListener(async (cmd) => {
  if (cmd !== 'redirect') return;

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab?.url) return;

  const swapped = tab.url.replace(
    /^https:\/\/(github|deepwiki)\.com/,
    (_, host) => host === 'github' ? 'https://deepwiki.com' : 'https://github.com'
  );

  if (swapped !== tab.url) chrome.tabs.update(tab.id, { url: swapped });
});
