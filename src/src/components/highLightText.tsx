type THighLightText = {
  text: string
  link?: string
  className?: string
}

const HighLightText = (props: THighLightText): React.ReactNode => {
  if (!props.text) return <span></span>
  const parts = props.text.split(/(#.+?#)/g);
  const NewTag = props.link ? "a" : 'span'
  return parts.map((part) => {
    if (part.startsWith('#') && part.endsWith('#')) {
      const hightLightText = part.slice(1, -1)
      return (
        <NewTag
          href={props.link}
          target="_blank"
          key={part} className={props.className}>
          {hightLightText}
        </NewTag>
      );
    }
    return part;
  });
}

export default HighLightText