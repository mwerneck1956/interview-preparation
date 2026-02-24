interface Props {
    comments: {
        id: number,
        comment: string;
    }[]
}

export function SlideComments(props: Props) {
    const { comments = [] } = props;

    return (
        <ul>
            {comments.map(comment => <li key={comment.id}> {comment.comment} </li>)}
        </ul>
    )
}