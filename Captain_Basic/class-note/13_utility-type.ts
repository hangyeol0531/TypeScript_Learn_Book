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

// pick과 반대로 옆 리스트 속성을 제외하는것
type ShoppingItemOmit = Omit<Product, 'brand' | 'stock'>

// 특정 상품의 상제 정보를 나타내기 위한 함수
function displayProductDetail(shoppingItem: ShoppingItem){

}

// interface UpdateProduct{
//     id?: number;
//     name?: string;
//     price?: number;
//     brand?: string;
//     stock?: number; 
// }

// 전부 선택적으로
type UpdateProduct = Partial<Product>
// 3. 특정 상품 정보를 업데이트(갱신)하는 함수
function updateProductItem(productItem : UpdateProduct){

}

// 4. 유틸리티 타입 구현 - Partial

interface UserProfile{
    username: string;
    email: string;
    productPhotoUrl: string;
}

// interface UserProfileUpdate{
//     username?: string;
//     email?: string;
//     productPhotoUrl?: string;
// }

// #1
// type UserProfileUpdate = {
//     username?: UserProfile['username'];
//     email?: UserProfile['email'];
//     productPhotoUrl?: UserProfile['productPhotoUrl'];
// }

// #2
// type UserProfileUpdate = {
//     [p in 'username' | 'email' | 'productPhotoUrl']? : UserProfile[p]
// }

type UserProfileKeys = keyof UserProfile

// #3
type UserProfileUpdate<T> = {
    [p in keyof T]? : T[p]
}