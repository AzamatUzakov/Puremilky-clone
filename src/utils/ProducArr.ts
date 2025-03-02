interface Product {
  id: number;
  title: string;
  img: string;
}

const products: Product[] = [
  { id: 1, title: "Яблоко", img: "/1product.png" },
  { id: 2, title: "Банан", img: "/2product.png" },
  { id: 3, title: "Молоко", img: "/2product.png" },
  { id: 4, title: "Хлеб", img: "/1product.png" },
  { id: 5, title: "Сыр", img: "/2product.png" },
  { id: 6, title: "Йогурт", img: "/1product.png" },
];

export default products;
