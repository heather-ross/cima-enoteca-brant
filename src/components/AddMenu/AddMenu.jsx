import React from 'react';
import './AddMenu.scss';

const AddMenu = () => {
    return (
        <section className="add-menu">
            <h3 className="add-menu__title">Add a New Menu</h3>
            <form
                className="add-menu"
                id="add-menuForm"
                name="add-menuForm">
                <div className="add-menu__details">
                    <label className="add-menu__file">
                        <input
                            label="Upload New Menu"
                            placeholder="Upload a PDF or image"
                            // className="upload__file"
                            id="file"
                            name="file"
                            type="file" />
                        <span className="add-menu__file-custom"></span>
                    </label>
                </div>

                <button className="add-menu__button form__button" type="submit">Upload</button>
            </form>
        </section>
    )
}

export default AddMenu
