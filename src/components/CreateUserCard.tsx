import { PropsWithoutRef } from 'react';
import H3 from './fonts/H3';

interface CreateUserCard extends PropsWithoutRef<JSX.IntrinsicElements['div']> {
  action?: 'create' | 'update';
  title?: string;
}

const CreateUserCard = ({ action, title, children }: CreateUserCard) => {
  return (
    <div className="card-container">
      <div className="grey-line"></div>
      <div className="action-title">
        <H3>New Petmate</H3>
      </div>
      {children}
      <button className="action-buttom">Create</button>
    </div>
  );
};

export default CreateUserCard;
