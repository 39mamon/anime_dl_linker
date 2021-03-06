# amine_dl_linker

特定のサイト構造でのみ使用できるDLリンク生成ツールです。  
現在は開発段階で、一つのサイトにしか適応できません。
https://ww1.gogoanime.io/

## 概要

主に複数の動画へのDLリンクを取得するのに使用します。  
例えば対象のサイトで  
アニメのタイトル -> 各話 -> DLリンク  
のような構造になっている場合、アニメのタイトルページのurlを使用することで  
各DLリンクのみを取得できます。

コマンドとして、引数を渡して使用する方法と  
bookmarkletとして使用する方法があります。

## DEMO

bookmarkletの場合は保存して、対象のページで使用してください。  

コマンドの場合は引数に対象のurlを渡すと、レスポンスとしてDLリンクのリストが返ってきます。  

```bash
amine_dl_linker "https://ww1.gogoanime.io/"
```

## 機能と特徴

- 分割、分散しているDLリンクを一発でリスト化できます。  
- 将来的にはサイトの構造に限定されなくてもいいようにしていく予定です。  

## 使い方

bookmarkletの場合は保存して、対象のページで使用してください。  

コマンドの場合は引数に対象のurlを渡すと、レスポンスとしてDLリンクのリストが返ってきます。  

```bash
amine_dl_linker "https://ww1.gogoanime.io/"
```

## インストール方法

bookmarkletで使用する場合はzipかgit cloneでソースを入手し、anime_dl_linker.jsのソースをbookmarkとして保存してください。  

コマンドの場合はnpmを利用してください(未開発)

## 作成者

@39mamon

## ライセンス

MIT