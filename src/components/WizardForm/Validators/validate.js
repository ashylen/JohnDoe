const validate = values => {

    const errors = {};

    if (!values.header) {
        errors.header = 'Header is Required';
    };

    if (!values.href) {
        errors.href = 'Link is Required';
    };

    if (values.href) {
        const URLregExp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
        const regex = new RegExp(URLregExp);
        if (!values.href.match(regex)) {
            errors.href = 'Incorrect URL format.';
        }
    };

    if (!values.date) {
        errors.date = 'Date is Required';
    };


    if (!values.youTubeUrl) {
        errors.youTubeUrl = 'YouTube URL is Required';
    };

    if (values.youTubeUrl) {
        const regExp = /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/;
        if(!values.youTubeUrl.match(regExp)){
            errors.youTubeUrl = 'Incorrect YouToube URL format.';
        }
    }

    if (!values.subText) {
        errors.subText = 'This field is Required';
    };
    if (!values.text) {
        errors.text = 'This field is Required';
    };

    return errors;
};

export default validate;