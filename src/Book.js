

const Book = (props) => {
    const { img, title, author, } = props;
    return (
        <article className='book'>
            <img src={img} alt='' />
            <h3>{title}</h3>
            <h2>{author}</h2>
        </article>
    );
}
export default Book;