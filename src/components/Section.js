import { Title } from "./FeedbackBtns.styled";
import PropTypes from "prop-types";

const Section = ({ title, children }) => {
  return (
    <section>
      <Title>{title}</Title>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};

export default Section;
