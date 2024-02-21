export async function getAllOrder(token:string|null) {
    try {
        const res = await fetch( `${process.env.NEXT_PUBLIC_HOST}/api/orders`,{
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });
        if (!res.ok) {
        throw Error(`Failed to fetch data. Status: ${res.status}`);
    }
        const data = await res.json();
        return data.data.products.reverse();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}