import QrScanner from 'qr-scanner';
import QrScannerWorkerPath from '!!file-loader!qr-scanner/qr-scanner-worker.min.js';

window.addEventListener('load', function () {
    const startButton = document.getElementById('qr-scanner-start');
    const stopButton = document.getElementById('qr-scanner-stop');
    const resultEl = document.getElementById('qr-scanner-result');

    (async function() {
        QrScanner.WORKER_PATH = QrScannerWorkerPath;

        const qrScanner = new QrScanner(
            document.getElementById('qr-scanner'),
            onSuccess,
            onError,
        );

        const hasCamera = await QrScanner.hasCamera();

        if (!hasCamera) {
            alert('No camera available or camera permission denied');
        }

        startButton.addEventListener('click', () => {
            qrScanner.start();
        });

        stopButton.addEventListener('click', () => {
            qrScanner.stop();
        });
    })();

    function onSuccess(result) {
        console.log('decoded qr code:', result);

        resultEl.innerHTML = result;
    }

    function onError(error) {
        console.log('error:', error);
    }
});
