import { But } from './Button.styled';

export const Button = ({ onLoadMore, isLoad }) => {
  return (
    <But type="button" onClick={onLoadMore} disabled={!isLoad}>
      Load more
    </But>
  );
};
