import React, { FC, useContext, useState } from 'react';
import * as styles from './styles.module.scss';
import AddIcon from '@mui/icons-material/Add';
import { ThemeContext } from '../Provider/ThemeProvider';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '../Modal/Modal';
import { ProductForm } from '../ProductForm/ProductForm';
import { useDispatch } from 'react-redux';
import { cartProductsActions } from 'src/store/cartProducts';
import IconButton from '@mui/material/IconButton';

export type EditProductVariables = {
  putId?: string;
  input?: any;
  removeId?: string;
};
export interface ShopProductСartProps {
  id?: string;
  price: number;
  index?: number;
  image?: string;
  name: string;
  description: string;
  addMode?: boolean;
  noEdit?: boolean;
  adminMode?: boolean;
  refetch?: () => void;
}

export const ShopProductСart: FC<ShopProductСartProps> = ({
  id,
  price,
  image,
  description,
  name,
  addMode,
  adminMode,
  noEdit,
  refetch,
}) => {
  const [theme] = useContext(ThemeContext);

  const dispatch = useDispatch();
  const addCartProduct = () => dispatch(cartProductsActions.set({ id, name, image, price, description }));
  const removeCartProduct = () => {
    dispatch(cartProductsActions.remove({ id }));
  };
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <Modal visible={visible} onClose={() => setVisible(false)}>
        <ProductForm
          id={id}
          price={price}
          image={image}
          description={description}
          name={name}
          onClose={() => {
            setVisible(false);
            refetch();
          }}
        />
      </Modal>
      <div
        className={styles.shortProductCard}
        style={theme === 'dark' ? { backgroundColor: 'rgb(177, 189, 230)' } : {}}
      >
        <div
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F5F7FF' }}
        >
          <img height={'70px'} src={image} />
          <div>
            <h3>{name}</h3>{' '}
          </div>
          <div style={{ width: '300px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
            <div>
              <h3>{price + ' $'}</h3>
            </div>
            <>
              {addMode ? (
                <IconButton color="primary">
                  <AddIcon style={{ padding: '10px' }} onClick={addCartProduct} />
                </IconButton>
              ) : (
                <IconButton color="primary">
                  <DeleteOutlineSharpIcon style={{ padding: '10px' }} onClick={removeCartProduct} />
                </IconButton>
              )}
            </>
            <>
              {noEdit
                ? null
                : adminMode && (
                    <IconButton color="primary">
                      <EditIcon
                        style={{ padding: '10px' }}
                        onClick={() => {
                          setVisible(true);
                        }}
                      />
                    </IconButton>
                  )}
            </>
          </div>
        </div>
      </div>
    </>
  );
};
