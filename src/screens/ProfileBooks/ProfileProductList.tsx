import React, { FC } from 'react';
import * as s from './styles.module.scss';
import { useTokenContext } from 'src/TokenProvider';
import { ProfileShopProducts } from 'src/components/ProfileShopProducts/ProfileShopProducts';

const ProfileProductList: FC = () => {
  return (
    <div className={s.root}>
      <ProfileShopProducts />
    </div>
  );
};

export default ProfileProductList;
