import React, { useState, useContext } from 'react';
import { storage } from '../../firebase';
import { AuthContext } from '../../contexts/AuthContext';
import './AddMenu.scss';


export default function AddMenu(props) {
    const [file, setFile] = useState(null);
    const { url, setURL } = useContext(AuthContext);

    console.log(url)

    function handleChange(e) {
        setFile(e.target.files[0]);
    }

    function handleUpload(e) {
        e.preventDefault();
        const uploadTask = storage.ref(`images/menu.jpeg`).put(file);
        uploadTask.on("state_changed", console.log, console.error, () => {
            storage
                .ref("images")
                .child('menu.jpeg')
                .getDownloadURL()
                .then((url) => {
                    setFile(null);
                    setURL(url);
                    const menuData = [{...props.data}]
                    menuData[0].links.link1 = url
                    props.setData(menuData);
                    localStorage.setItem('menuData', JSON.stringify(menuData));
                }).catch(
                    console.error('Failed to upload'))
        })
    }


    return (
        <section className="add-menu">
            <h3 className="add-menu__title">Add a New Menu</h3>
            <form
                className="add-menu"
                id="add-menuForm"
                name="add-menuForm"
                onSubmit={handleUpload}
            >
                <div className="add-menu__details">
                    <label className="add-menu__file">
                        <input
                            label="Upload New Menu"
                            placeholder="Upload a PDF or image"
                            className="upload__file"
                            id="file"
                            name="file"
                            type="file"
                            onChange={handleChange}
                        />
                        <span className="add-menu__file-custom"></span>
                    </label>
                </div>

                <button className="add-menu__button form__button" type="submit" s>Upload
                </button>
                <p>Current Menu</p>
                <img src={url} alt="image upload" className="add-menu__thumb" />
            </form>

        </section>
    )
}

