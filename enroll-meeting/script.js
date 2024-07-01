let uploadedFiles = [];

document.getElementById('file-input').addEventListener('change', function(event) {
    const newFiles = Array.from(event.target.files);
    const totalFiles = uploadedFiles.length + newFiles.length;

    const fileCountDisplay = document.getElementById('file-count');
    const imagePreview = document.getElementById('image-preview');
    const submitButton = document.getElementById('submit-button');

    if (totalFiles > 5) {
        alert('최대 5개의 이미지만 업로드할 수 있습니다.');
        event.target.value = ''; // 입력 초기화
        return;
    }

    uploadedFiles = uploadedFiles.concat(newFiles);

    fileCountDisplay.textContent = `${uploadedFiles.length}/5`;

    // 기존 이미지를 초기화
    imagePreview.innerHTML = '';

    // 업로드된 이미지 표시
    uploadedFiles.forEach((file, index) => {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgContainer = document.createElement('div');
            imgContainer.classList.add('image-container');

            const img = document.createElement('img');
            img.src = e.target.result;
            imgContainer.appendChild(img);

            const removeButton = document.createElement('button');
            removeButton.classList.add('remove-button');
            removeButton.innerHTML = '&times;';
            removeButton.addEventListener('click', function() {
                uploadedFiles.splice(index, 1);
                updateImagePreview();
            });
            imgContainer.appendChild(removeButton);

            imagePreview.appendChild(imgContainer);
        };
        reader.readAsDataURL(file);
    });

    // 입력 필드 초기화
    event.target.value = '';

    submitButton.disabled = uploadedFiles.length === 0;
});

function updateImagePreview() {
    const fileCountDisplay = document.getElementById('file-count');
    const imagePreview = document.getElementById('image-preview');
    const submitButton = document.getElementById('submit-button');

    fileCountDisplay.textContent = `${uploadedFiles.length}/5`;
    imagePreview.innerHTML = '';

    uploadedFiles.forEach((file, index) => {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgContainer = document.createElement('div');
            imgContainer.classList.add('image-container');

            const img = document.createElement('img');
            img.src = e.target.result;
            imgContainer.appendChild(img);

            const removeButton = document.createElement('button');
            removeButton.classList.add('remove-button');
            removeButton.innerHTML = '&times;';
            removeButton.addEventListener('click', function() {
                uploadedFiles.splice(index, 1);
                updateImagePreview();
            });
            imgContainer.appendChild(removeButton);

            imagePreview.appendChild(imgContainer);
        };
        reader.readAsDataURL(file);
    });

    submitButton.disabled = uploadedFiles.length === 0;
}
