function Paragraph(props) {
  const { size, color, children } = props;

  const style = {
    fontSize: size,
    color: color
  };

  return <p style={style}>{children}</p>;
}

export default Paragraph;