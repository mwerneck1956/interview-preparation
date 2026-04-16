import "./comments.style.css"

interface Props {
    comments: {
        id: number,
        comment: string;
    }[]
}

export function SlideComments(props: Props) {
    const { comments = [] } = props;

    return (
        <ul className="comments__container">
            {comments.map(comment => <li className="comment__item" key={comment.id}> {comment.comment} </li>)}
        </ul>
    )
}