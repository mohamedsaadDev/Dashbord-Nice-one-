export async function getAllUsers(token:string|null) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/users`,{
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });
        if (!res.ok) {
        throw Error(`Failed to fetch data. Status: ${res.status}`);
    }
        const data = await res.json();
        return data.data.users.reverse();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}