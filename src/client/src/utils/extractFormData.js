const extractFormData = (form) => {
    const formData = {};
    const formEntries = new FormData(form).entries();
    for (const entry of formEntries) {
        formData[entry[0]] = entry[1];
    }
    return formData;
};

export default extractFormData;
