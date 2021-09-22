import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import MenuForm from './MenuForm';
import './AddMenu.scss';

const AddMenu = () => {
    const { values } = useContext(AuthContext);
    const menuData = [
        {
            id: 1,
            title: "Current Antipasti & Pasta Menu",
            images: "menu.jpeg",
            menus: values.menu,
            setMenus: values.setMenu,
        },
        {
            id: 2,
            title: "Current Antipasti & Pasta Menu",
            images: "menu2.jpeg",
            menus: values.menu2,
            setMenus: values.setMenu2,
        },
        {
            id: 3,
            title: "Current Antipasti & Pasta Menu",
            images: "menu3.jpeg",
            menus: values.menu3,
            setMenus: values.setMenu3,
        }
    ]

    return (
        <section className="add-menu">
            <h3 className="add-menu__title">Add New Menus</h3>
            <div className="add-menu__form-wrap">
                {menuData.map((menu, i) =>
                    <MenuForm
                        key={i}
                        id={menu.id}
                        title={menu.title}
                        images={menu.images}
                        menus={menu.menus}
                        setMenus={menu.setMenus}
                    />
                )}
            </div>
        </section>
    )

}

export default AddMenu;