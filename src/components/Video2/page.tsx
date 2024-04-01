import { useEffect, useState } from "react"

// throw new Error('String you pass in the constructor')
// { name: 'Error', message: 'String you pass in the constructor' }

const getErrorMessage = (error: unknown): string => {
    let message: string;
    
    // Kiểm tra nếu error là một đối tượng của lớp Error. 
    if (error instanceof Error) {
        //: Nếu error là một đối tượng Error, thì gán giá trị của thuộc tính message của đối tượng error cho biến message.
        message = error.message;
    } 
    // Kiểm tra nếu error không phải là một đối tượng Error nhưng là một đối tượng và có thuộc tính message.
    else if (error && typeof error === 'object' && 'message' in error) {
        //Nếu điều kiện trên đúng, chuyển đổi giá trị của thuộc tính message của đối tượng error thành chuỗi và gán cho biến message.
        message = String(error.message);
    } 
    // Nếu error là một chuỗi, gán giá trị của error cho biến message.
    else if (typeof error === 'string') {
        message = error;
    } else {
        message = 'Something went wrong. ';
    }

    return message;
}

const ProductPage = () => {

    const [product, setProduct] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products/1");
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                return {
                    message: getErrorMessage(error)
                }
                //console.log(error.name + error.message);
            }
        }    

        fetchData();

    }, [])

    return (
        <>
            {/* {
                products.length > 0 &&
                products.map((product) => {
                    return(
                        <div key={product.id}>
                            <p>{product.title}</p>
                            <p>{product.price}</p>
                            <p>{product.category}</p>
                            <img src={product.thumbnail} style={{width: "200px", height: "200px"}}/>
                        </div>
                    )
                })
            } */}
            { product.brand }
        </>
    )
}

export default ProductPage
