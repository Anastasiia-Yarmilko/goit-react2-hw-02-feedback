import PropsType from 'prop-types';

export function Section({ title, children, className }) {
  return (
    <div>
      <h2>{title}</h2>
      <section className={className}>{children}</section>
    </div>
  );
}

Section.PropsType = {
  title: PropsType.string,
  className: PropsType.string,
};
