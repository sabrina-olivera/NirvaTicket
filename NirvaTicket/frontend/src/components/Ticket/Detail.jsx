import DetailItem from './DetailItem';

const Detail = ({ items }) => {
    return (
        <div>
            {items.map(item => (
                <DetailItem key={item.id} item={item} />
            ))}
        </div>
    )
}

export default Detail