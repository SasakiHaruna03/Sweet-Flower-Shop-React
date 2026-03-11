/// <reference types="vite/client" />

// SCSSファイルをモジュールとして認識させる設定
declare module "*.scss" {
    const content: { [className: string]: string };
    export default content;
}

// 画像ファイルを認識させる設定
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";