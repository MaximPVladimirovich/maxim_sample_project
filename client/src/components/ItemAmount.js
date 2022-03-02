
export default function ItemAmount({ items }) {
    let sum = 0;
    if (items.length !== 0) {
        items.map(item => sum += parseInt(item.price))
    }
    return (
        <>
            <p>Total: ${sum}</p>
        </>

    )
}