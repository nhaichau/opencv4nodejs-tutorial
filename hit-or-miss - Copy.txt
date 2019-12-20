const cv = require("opencv4nodejs");
const tf = require("@tensorflow/tfjs-node");

const inputData = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 255, 255, 255, 0, 0, 0, 255],
    [0, 255, 255, 255, 0, 0, 0, 0],
    [0, 255, 255, 255, 0, 255, 0, 0],
    [0, 0, 255, 0, 0, 0, 0, 0],
    [0, 0, 255, 0, 0, 255, 255, 0],
    [0, 255, 0, 255, 0, 0, 255, 0],
    [0, 255, 255, 255, 0, 0, 0, 0]
];
let input_image = new cv.Mat(inputData, cv.CV_8UC1);

let kernelData = tf.tensor([
    [-1, -1, 0],
    [-1, 1, 0],
    [-1, -1, 0]
]);

kernelData = kernelData.add(1).mul(127);

kernelDataArray = kernelData.arraySync();

console.log(kernelDataArray);

let kernel = new cv.Mat(kernelDataArray, cv.CV_8UC1);

output_image = input_image.morphologyEx(kernel, cv.MORPH_HITMISS);

outputImageArray = output_image.getDataAsArray();
console.log(outputImageArray);

const rate = 50;

kernel = kernel.resize(new cv.Size(), rate, rate, cv.INTER_NEAREST);
cv.imshow("kernel", kernel);
cv.moveWindow("kernel", 0, 0);

input_image = input_image.resize(new cv.Size(), rate, rate, cv.INTER_NEAREST);
cv.imshow("Original", input_image);
cv.moveWindow("Original", 0, 200);

output_image = output_image.resize(new cv.Size(), rate, rate, cv.INTER_NEAREST);
cv.imshow("Hit or Miss", output_image);
cv.moveWindow("Hit or Miss", 500, 200);

cv.waitKey(0);
cv.destroyAllWindows();
