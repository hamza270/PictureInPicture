const videoElement = document.getElementById('video');
const btn = document.getElementById('button');

// aycnc Function

async function pictureInPicture(){
    try {
        const stream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = stream;
        
    } catch (error) {
        alert("OOPs an Error Occure  " + error);
    }
}
btn.addEventListener('click', async () => {
    btn.disabled = true;
    await videoElement.requestPictureInPicture();
    btn.disabled = false;
})

pictureInPicture();