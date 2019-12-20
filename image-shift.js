const cv = require("opencv4nodejs");
//const tf = require("@tensorflow/tfjs-node");

const img = cv.imread('./images/putin-02.jpg');

cols = img.cols;
console.log(cols);

rows = img.rows;
console.log(rows);

// Define a matrix to shift img 50 pix to the right and 20 pix down
let mArray = [
    [1, 0, 50],
    [0, 1, 20]
]

let M = new cv.Mat(mArray, cv.CV_32FC1);

shiftedImg = img.warpAffine(M, new cv.Size(cols, rows));

cv.imshow("Shifted image", shiftedImg);
cv.waitKey();
cv.destroyAllWindows();