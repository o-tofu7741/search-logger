# Search Logger

Search Loggerは、Googleやその他の検索エンジンからの検索クエリを記録するブラウザ拡張機能です。

## インストール

1. リポジトリをクローンします。

    ```sh
    git clone https://github.com/yourusername/search-logger.git
    cd search-logger
    ```

2. ブラウザの拡張機能ページに移動し、「パッケージ化されていない拡張機能を読み込む」をクリックして、`src` フォルダを選択します。

## 使用方法

1. 検索エンジンで検索を行うと、検索クエリが記録されます。
2. ブラウザのツールバーに表示される拡張機能のアイコンをクリックします。
3. ポップアップが表示されるので、「Download Search Queries」ボタンをクリックします。
4. 検索クエリが `search_queries.json` ファイルとしてダウンロードされます。

## ファイル構成

- `src/background.js`: 検索クエリを記録し、ローカルストレージに保存するスクリプト。
- `src/manifest.json`: 拡張機能の設定ファイル。
- `src/popup.html`: ポップアップのHTMLファイル。
- `src/popup.js`: ポップアップのJavaScriptファイル。
- `release/`: リリース用のパッケージファイル。
- `web-ext-artifacts/`: Web拡張機能のアーティファクト。
- `.gitignore`: Gitで無視するファイルを指定する設定ファイル。

## 開発

1. リポジトリをクローンします。

    ```sh
    git clone https://github.com/yourusername/search-logger.git
    cd search-logger
    ```

2. 必要に応じてコードを編集します。

3. 変更をコミットし、リポジトリにプッシュします。

    ```sh
    git add .
    git commit -m "Your commit message"
    git push origin main
    ```

## ライセンス

このプロジェクトはMITライセンスの下でライセンスされています。詳細については、`LICENSE` ファイルを参照してください。
