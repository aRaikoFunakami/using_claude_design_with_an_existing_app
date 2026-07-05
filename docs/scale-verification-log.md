# スケール検証ログ：複雑なアプリ（Redmine 風チケット管理）を Claude Design で Notion 風に変える

Issue #1 で確立したワークフロー（DS ライブラリ化 → Design Sync → Claude Design で変更 → コード反映 → 動作確認）が、**相当に複雑なアプリの大規模デザイン変更**でも通用するかを検証する記録です。各ステップをスクリーンショットと操作ログで残します（Issue #9）。

- **対象**：React 製チケット管理 UI（サイドバー / 多カラムの一覧テーブル / フィルタ / チケット詳細 / タブ）
- **変更の方向性**：Redmine 風（密・境界線多め・グレー/青のコーポレート） → Notion 風（余白・境界線少なめ・洗練タイポ）
- **プロセス**：Claude Design 側の変更は Playwright MCP Browser Extension でログイン済み実ブラウザを操作して実施

---

## フェーズ 1：Redmine 風アプリと `@ds/ui` の拡張

### やったこと

既存モノレポ（`packages/ui` + `apps/*`）に、新しいアプリ `apps/tracker` を追加し、`@ds/ui` に一覧・詳細で使う再利用コンポーネントを拡張した。

- **`@ds/ui` に追加**：`Badge`（ステータス）/ `Tag`（トラッカー種別）/ `Avatar`（イニシャル）/ `SidebarItem` / `Toolbar` / `Table`（`Table/THead/TBody/TR/TH/TD` の密なテーブル基本要素）。
- **`apps/tracker` の画面**：
  - サイドバー（Overview / Issues / Gantt / Wiki / Settings）
  - チケット一覧：フィルタツールバー + 多カラムの密なテーブル（#ID / Tracker / Status / Priority / Subject / Assignee / Updated）+ ステータスバッジ + ページャ
  - チケット詳細：パンくず + 説明パネル + 履歴 + プロパティ表
- **設計方針**：テーブルのセル境界・密度・バッジ色などの「Redmine らしさ」を `@ds/ui` 側の CSS に持たせ、**後の Notion 化が `@ds/ui` の変更だけで全画面に伝播する**ようにした。

### 動作チェック（実ブラウザ）

`npm run build`（ui: `tsc`→`dist/`、tracker: `tsc`+`vite build`）が通過。CSS は約 15KB で、`@source` により `@ds/ui` の全クラスが出力されていることを確認。

一覧（Redmine 風・密なテーブル）：

![Redmine 風 チケット一覧](images/scale/tracker-list-redmine.png)

詳細（プロパティ表・履歴）：

![Redmine 風 チケット詳細](images/scale/tracker-detail-redmine.png)

### この時点の所見

- シンプル版（Button/Card/Dialog）に比べ、コンポーネント数・画面の情報密度が大きく増えた。特に**テーブルは要素数が多く**、Design Sync / デザイン変更でここがどう扱われるかが焦点になりそう。
- 「スタイルを `@ds/ui` に寄せる」方針は、複雑アプリでこそ効くはず（変更の伝播点を1箇所に集約できる）。次フェーズ以降で検証する。

---

## フェーズ 2：Design Sync（このあと追記）

## フェーズ 3：Claude Design で Notion 風に変更（このあと追記）

## フェーズ 4：コードへ反映・動作チェック（このあと追記）

## フェーズ 5：スケール検証のまとめ（このあと追記）
