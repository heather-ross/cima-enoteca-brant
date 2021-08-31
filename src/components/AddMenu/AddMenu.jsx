import React, { useState, useContext } from 'react';
import { storage } from '../../firebase';
import { AuthContext } from '../../contexts/AuthContext';
import './AddMenu.scss';

export default function AddMenu() {

    const [file, setFile] = useState(null);
    const [file2, setFile2] = useState(null);
    const [file3, setFile3] = useState(null);
    const { menu, setMenu } = useContext(AuthContext);
    const { menu2, setMenu2 } = useContext(AuthContext);
    const { menu3, setMenu3 } = useContext(AuthContext);

    function handleChange(e) {
        setFile(e.target.files[0]);
    }
    function handleChange2(e) {
        setFile2(e.target.files[0]);
    }
    function handleChange3(e) {
        setFile3(e.target.files[0]);
    }

    function handleUpload(e) {
        e.preventDefault();
        const uploadTask = storage.ref(`images/menu.jpeg`).put(file);
        uploadTask.on("state_changed", console.log, console.error, () => {
            storage
                .ref("images")
                .child('menu.jpeg')
                .getDownloadURL()
                .then((menu) => {
                    setFile(null);
                    setMenu(menu);
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
                .then((menu2) => {
                    setFile2(null);
                    setMenu2(menu2);
                }).catch(
                    console.error('Failed to upload'))
        })
    }
    function handleUpload3(e) {
        e.preventDefault();
        const uploadTask = storage.ref(`images/menu3.jpeg`).put(file3);
        uploadTask.on("state_changed", console.log, console.error, () => {
            storage
                .ref("images")
                .child('menu3.jpeg')
                .getDownloadURL()
                .then((menu3) => {
                    setFile3(null);
                    setMenu3(menu3);
                }).catch(
                    console.error('Failed to upload'))
        })
    }

    return (
        <section className="add-menu">
            <h3 className="add-menu__title">Add New Menus</h3>
            <div className="add-menu__form-wrap">
                <form
                    className="add-menu__form"
                    id="add-menuForm"
                    name="add-menuForm"
                    onSubmit={handleUpload}
                >
                    <h4>Current Antipasti & Pasta Menu</h4>
                    <img src={menu} alt="dinner menu" className="add-menu__thumb" />
                    <div className="add-menu__details">
                        <label className="add-menu__file" htmlFor="file">
                            <input
                                label="Upload New Menu"
                                placeholder="Upload menu..."
                                className="upload__file"
                                id="file"
                                name="file"
                                type="file"
                                onChange={handleChange}
                            />
                            <span className="add-menu__file-custom"></span>
                        </label>
                    </div>
                    <button className="add-menu__button form__button" type="submit">
                        Upload
                </button>
                
                </form>
                <form
                    className="add-menu__form"
                    id="add-menuForm2"
                    name="add-menuForm2"
                    onSubmit={handleUpload2}
                >
                    <h4>Current Pizza & Mains Menu</h4>
                    <img src={menu2} alt="Wine Menu" className="add-menu__thumb" />
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
                    
                </form>
                <form
                    className="add-menu__form"
                    id="add-menuForm3"
                    name="add-menuForm3"
                    onSubmit={handleUpload3}
                >
                    <h4>Current Vino & Cocktails Menu</h4>
                    <img src={menu3} alt="Wine Menu" className="add-menu__thumb" />
                    <div className="add-menu__details">
                        <label className="add-menu__file">
                            <input
                                label="Upload New Menu"
                                placeholder="Upload a PDF or image"
                                className="upload__file"
                                id="file2"
                                name="file2"
                                type="file"
                                onChange={handleChange3}
                            />
                            <span className="add-menu__file-custom"></span>
                        </label>
                    </div>

                    <button className="add-menu__button form__button" type="submit" s>Upload
                </button>
                    
                </form>
            </div>
        </section>
    )
}