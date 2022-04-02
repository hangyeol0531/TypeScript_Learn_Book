// 유틸리티 타입은 이미 정의해 놓은 타입을 변환 할때 사용하기 좋은 타입

interface Product{
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]>{
    
}

// interface ProductDetail {
//     id: number;
//     name: string;
//     price: number;
// }

// utility type, generic type

type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>

function displayProductDetail(shoppingItem: ShoppingItem){

}