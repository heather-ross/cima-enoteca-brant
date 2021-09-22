import React, { useState } from 'react';
import { storage } from '../../firebase';
import './AddMenu.scss';

const MenuForm = ({ id, title, images, menus, setMenus }) => {
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        setFile(e.target.files[0]);
    }

    const handleUpload = (e) => {
        e.preventDefault();
        const uploadTask = storage.ref(`images/${images}`).put(file);
        uploadTask.on("state_changed", console.log, console.error, () => {
            storage
                .ref("images")
                .child(images)
                .getDownloadURL()
                .then((file) => {
                    setFile(null)
                    setMenus(file)
                })
                .catch(
                    console.error('Failed to upload')
                )
        })
        e.target.reset();
    }

    return (
        <form
            className="add-menu__form"
            name="add-menuForm"
            onSubmit={handleUpload}
        >
            <h4>{title}</h4>
                <img src={menus}  alt="wine menu" className="add-menu__thumb" />
            <div className="add-menu__details">
                <label className="add-menu__file" htmlFor={id}>

                    <input
                        label="Upload New Menu"
                        placeholder="Upload menu..."
                        className="upload__file"
                        id={id}
                        name="file"
                        type="file"
                        onChange={handleChange}
                    />
                    <span className="add-menu__file-custom"></span>
                </label>
            </div>
            <button className="add-menu__button form__button" type="submit" >
                Upload
                </button>
        </form>
    )
}

export default MenuForm;