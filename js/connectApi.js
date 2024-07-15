// CONNECT API

async function listProducts() {
    try {
        const connection = await fetch("https://challenge-api-one-alurageek.vercel.app/produtos");
        const convertedConnection = await connection.json();
        return convertedConnection;
    } catch (error) {
        console.error("Ocorreu um erro ao listar produtos:", error);
        throw error;
    }
}



async function buildProduct(name, price, image) {
    try {
        const floatPrice = parseFloat(price).toFixed(2);
        const formattedPrice = floatPrice.toString().replace('.', ',');

        const connection = await fetch("https://challenge-api-one-alurageek.vercel.app/produtos", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                nome: name,
                preco: formattedPrice,
                imagem: image
            })
        });


        
        const convertedConnection = await connection.json();
        return convertedConnection;
    } catch (error) {
        console.error("Ocorreu um erro ao construir produto:", error);
        throw error;
    }
}



async function deleteProduct(productId) {
    try {
        const connection = await fetch(`https://challenge-api-one-alurageek.vercel.app/produtos/${productId}`, {
            method: "DELETE",
        });
        const data = await connection.json();
        console.log(data); 
    } catch (error) {
        console.error("Ocorreu um erro ao deletar produto:", error);
        throw error;
    }
}

export const connectApi = {
    listProducts,
    buildProduct,
    deleteProduct
}