import React, { FC } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useTranslation } from 'react-i18next';

export const CategoryMenu: FC<{ setNameCategory?: (val: string) => void; categories: [] }> = ({
  setNameCategory,
  categories,
}) => {
  // localStorage.setItem('unTokenMode', 'true');
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (val: string) => {
    setNameCategory(val);
    setAnchorEl(null);
  };
  return (
    <>
      <>
        <Button
          id="category-button"
          aria-controls={open ? 'category-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
         {t('prodList.category')} 
        </Button>
        <Menu
          id="category-menu"
          aria-labelledby="category-button"
          anchorEl={anchorEl}
          open={open}
          onClose={() => {
            setAnchorEl(null);
          }}
        >
          {categories.map((category: any, index: React.Key) => {
            if (category.commandId == 'search-books') {
              return (
                <MenuItem key={index} onClick={() => handleClose(category.id)}>
                  {category.name}
                </MenuItem>
              );
            }
          })}
        </Menu>
      </>
    </>
  );
};
