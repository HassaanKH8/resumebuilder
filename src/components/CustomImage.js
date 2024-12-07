import React, { useState } from "react";

const CustomImage = ({ setimageSubmitted, setSkillsSubmitted, avatarImage, setAvatarImage }) => {

    const [selectedImage, setSelectedImage] = useState(avatarImage || '')

    const handleSubmit = (e) => {
        e.preventDefault();
        setimageSubmitted(true)
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(file);
            setAvatarImage(file)
        }
    };

    return (
        <div className="customImage">
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <img alt='backarrow' src={require("../assets/arrow.png")} style={{ height: 22, width: 22, marginRight: 20, marginTop: 20, cursor: 'pointer' }} onClick={() => { setSkillsSubmitted(false) }} />
                <h1 className="personalinfoheading" style={{ fontSize: 32 }}>Add Your Image (optional)</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div style={{ marginTop: 30, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    <input
                        className="imageinput"
                        type="file"
                        accept="image/*"
                        required
                        onChange={handleImageChange}
                    />
                    <button className="submit-btn" type="submit" style={{ marginTop: 30 }}>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default CustomImage;
