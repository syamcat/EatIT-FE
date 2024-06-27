const uploadBox = document.querySelector('.upload-box');
const fileInput = uploadBox.querySelector('input[type="file"]');
const uploadIcon = uploadBox.querySelector('.upload-icon');

fileInput.addEventListener('change', () => {
    const fileCount = fileInput.files.length;
    uploadBox.dataset.fileCount = fileCount;
    uploadBox.querySelector('::after').content = `${fileCount}/5`;
    if (fileCount > 0) {
        uploadIcon.style.display = 'none';
    } else {
        uploadIcon.style.display = 'block';
    }
});