# DeepWiki AutoRedirect

**DeepWiki AutoRedirect** は、ショートカットキー操作によって GitHubページを DeepWiki にリダイレクトする Chrome拡張機能です。

## 概要

- ショートカットキーを押すことで、現在開いている GitHubのリポジトリページを DeepWiki にリダイレクトします。
- ショートカットキーは Chrome 拡張機能設定画面（`chrome://extensions/shortcuts`）から自由に変更できます。


## インストール方法

### 開発者向け：ソースコードからインストール

1. このリポジトリをクローンまたはダウンロードします。
2. Chromeの「拡張機能管理」ページ（`chrome://extensions/`）を開きます。
3. 「デベロッパーモード」をオンにします。
4. 「パッケージ化されていない拡張機能を読み込む」をクリックし、ダウンロードしたフォルダを選択します。

### ユーザー向け：リリース版をインストール

1. [Releasesページ](https://github.com/dada994a/deepwiki_autoredirect/releases) にアクセスします。
2. Latestと緑色の文字がついているリリースからdeepwiki_autoredirect.crxをダウンロードします。
3. Chromeの「拡張機能管理」ページ`chrome://extensions/`を開きます。
4. ダウンロードした ファイルを、拡張機能ページにドラッグ＆ドロップします。
5. インストールを確認するポップアップが出たら「追加」を選択します。

注：ブラウザによってはファイルのドラッグ＆ドロップをブロックする場合があります。  
その場合は、手動インストール（Dev版）を試してください。

## インストール後の重要な設定（必須）

Chrome拡張機能の仕様により、インストール直後はショートカットキーが未設定状態になっています。  
以下の手順で、必ずショートカットキーを手動で設定してください：

1. `chrome://extensions/shortcuts` にアクセスします。
2. 「DeepWiki AutoRedirect」の欄を探します。
3. 好きなキーコンビネーション（例: `Ctrl+Shift+G`, `Ctrl+Shift+H`など）を設定します。

※設定しないとショートカットが動作しません！

## [ライセンス](https://github.com/dada994a/deepwiki_autoredirect?tab=License-1-ov-file)

