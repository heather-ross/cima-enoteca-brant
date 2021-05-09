import React, { useState, useContext } from 'react';
import { storage } from '../../firebase';
import { AuthContext } from '../../contexts/AuthContext';
import './AddMenu.scss';


export default function AddMenu() {
    const [file, setFile] = useState(null);
    const [file2, setFile2] = useState(null);
    const { url, setURL } = useContext(AuthContext);
    const { url2, setURL2 } = useContext(AuthContext);

    console.log(url)

    function handleChange(e) {
        setFile(e.target.files[0]);
    }
    function handleChange2(e) {
        setFile2(e.target.files[0]);
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
                }).catch(
                    console.error('Failed to upload'))
        })
    }
    function handleUpload2(e) {
        e.preventDefault();
        const uploadTask = storage.ref(`images/menu2.jpeg`).put(file2);
        uploadTask.on("state_changed", console.log, console.error, () => {
            storage
                .ref("images")
                .child('menu2.jpeg')
                .getDownloadURL()
                .then((url2) => {
                    setFile2(null);
                    setURL2(url2);
                }).catch(
                    console.error('Failed to upload'))
        })
    }


    return (
        <section className="add-menu">
            <h3 className="add-menu__title">Add a New Menus</h3>
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
                <p>Current Dinner Menu</p>
                <img src={url} alt="image upload" className="add-menu__thumb" />
            </form>
            <form
                className="add-menu"
                id="add-menuForm2"
                name="add-menuForm2"
                onSubmit={handleUpload2}
            >
                <div className="add-menu__details">
                    <label className="add-menu__file">
                        <input
                            label="Upload New Menu"
                            placeholder="Upload a PDF or image"
                            className="upload__file"
                            id="file2"
                            name="file2"
                            type="file"
                            onChange={handleChange2}
                        />
                        <span className="add-menu__file-custom"></span>
                    </label>
                </div>

                <button className="add-menu__button form__button" type="submit" s>Upload
                </button>
                <p>Current Vino & Cocktails Menu</p>
                <img src={url2} alt="image upload" className="add-menu__thumb" />
            </form>

        </section>
    )
}

