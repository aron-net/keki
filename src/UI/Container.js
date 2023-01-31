/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

const Container = (props) => {
  const classes = `col-lg-4 text-center ${props.className}`;
  return <div className={classes}>{ props.children }</div>;
};

export default Container;
