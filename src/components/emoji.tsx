interface emojiProps {
    //this is the label screenreaders will read
    ariaLabel?: string;
    symbol: string;
}

const Emoji = ({ ariaLabel, symbol }: emojiProps) => (
    <span
        className="emoji"
        role="img"
        aria-label={ariaLabel ? ariaLabel : ""}
        aria-hidden={ariaLabel ? "false" : "true"}
    >
        {symbol}
    </span>
);
export default Emoji;
