This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Git から Clone した後に必要なパッケージのインストールを行います。

```bash
yarn install
```

## サーバーの立ち上げ

```bash
yarn dev
```

## Storybook の立ち上げ

```bash
yarn sb
```

## テスト

```bash
yarn test
```

## Tips

バージョン情報
主なパッケージのパージョンは以下の通りです。

- Next.js : 12.1.0
- React : 17.0.2
- TypeScript : 4.6.2
- Tailwind CSS : 3.0.23
- ESLint : 8.10.0
- Prettier : 2.5.1
- Storybook：6.4.19
- Jest：27.5.1
- React Testing Library：12.1.3

## プロジェクト

### コンポーネントの単位

- Atom (Presentational Component)

  - コンポーネントの実装は行わず Tailwind CSS の @apply などで決められる範囲内が目安

- Molecule (Presentational Component)

  - 複数の Atom をまとめて使いやすくする程度

- Organism (Presentational Component)

  - SSR / CSR でデータ挿入前の最大の単位

- Template (Container Component)

  - Client Sider Rendering (CSR) でデータ挿入

- Page (Container Component)
  - SSR でデータ挿入

## Authors

大前 紘一(Koichi Omae)
