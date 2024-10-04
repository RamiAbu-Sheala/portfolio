type TitleHighlightProps = {
    text: string;
}

function TitleHighlight({ text }: TitleHighlightProps) {
    return (
        <span className="font-extrabold title-highlight">{text}</span>
    );
}

export {TitleHighlight};