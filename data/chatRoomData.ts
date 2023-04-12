import viewerIcon from "assets/icons/viewers.svg";
import likeIcon from "assets/icons/likes.svg";
import productViewIcon from "assets/icons/product-view.svg";
import ordersIcon from "assets/icons/orders.svg";

export const tabMenuData = [
  { id: 1, menu: "chat" },
  { id: 2, menu: "polls" },
  { id: 3, menu: "products" },
];

export const statusData = [
  { id: 1, title: "viewers", icon: viewerIcon, value: "-" },
  { id: 2, title: "likes", icon: likeIcon, value: "-" },
  { id: 3, title: "product_views", icon: productViewIcon, value: "-" },
  { id: 4, title: "orders", icon: ordersIcon, value: "-" },
];
