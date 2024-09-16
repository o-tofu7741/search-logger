const searchEngines = [
  "*://www.google.com/search*",
  "*://www.bing.com/search*",
  "*://search.yahoo.com/search*",
  "*://search.yahoo.co.jp/search*",
  "*://duckduckgo.com/*"
];

browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    // console.log(details)
    const url = new URL(details.url);
    const params = new URLSearchParams(url.search);

    let query = null;
    // 各検索エンジンの検索文字用クエリパラメータに合わせて取得
    if (url.hostname.includes("google.com") || url.hostname.includes("bing.com") || url.hostname.includes("duckduckgo.com")) {
      query = params.get("q"); // 'q' パラメータが検索文字列
    } else if (url.hostname.includes("yahoo.co.jp") || url.hostname.includes("yahoo.com")) {
      query = params.get("p")
    }

    if (query) {
      console.log("hostname:", url.hostname);
      console.log("検索クエリ:", query);
      const d = new Date();
      console.log(d.toISOString());

      // ローカルストレージに保存
      browser.storage.local.get("searchQueries").then((data) => {
        const queries = data.searchQueries || [];
        const q = { "query": query, "time": d.toISOString() }
        queries.push(q);
        browser.storage.local.set({ searchQueries: queries });
      });
    }
  },
  { urls: searchEngines },
  ["blocking"]
);

function downloadFile(content, filename) {
  const blob = new Blob([content], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  browser.downloads.download({
    url: url,
    filename: filename,
    saveAs: true
  });
}

function saveSearchQueriesToFile() {
  browser.storage.local.get("searchQueries").then((data) => {
    const queries = data.searchQueries || [];
    // JSON形式に変換して保存
    const fileContent = JSON.stringify(queries, null, 2);
    downloadFile(fileContent, "search_queries.json");
  });
}

// ポップアップボタンからダウンロードするイベントを設定
browser.runtime.onMessage.addListener((message) => {
  if (message.action === "download") {
    saveSearchQueriesToFile();
  }
});
