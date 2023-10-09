export const Book = ({author, name, year, onDelete}) => {
    return (
        <div>
            <h2>Назва: {name}</h2>
            <h2>Автор: {author}</h2>
            <span>Рік видання: {year}</span>
            <button onClick={onDelete}>Видалити</button>
        </div>
    )
}