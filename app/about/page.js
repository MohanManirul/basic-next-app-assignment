

async function getData(){
    const res = await fetch('https://dummyjson.com/products/1')
    return res.json();
}

const page = async () => {
    const data = await getData();
    return (
        <div>
            <p>Hello about layout</p>
            {JSON.stringify(data)}
            <p>Hi About page</p>
        </div>
    );
};

export default page;