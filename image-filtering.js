const cv = require("opencv4nodejs");

// load image from folder images
mat = cv.imread('./images/putin-01.jpg');

// Normalized Block Filter
for (i = 1; i < 31; i = i + 2) {
    nbFilterMat = mat.blur(new cv.Size(i, i), new cv.Point(-1, -1));
}

// write image to another format
cv.imshow("Normalized Block", nbFilterMat);

// Gaussian Filter
for (i = 1; i < 31; i = i + 2) {
    gaussianFilterMat = mat.gaussianBlur(new cv.Size(i, i), 0, 0);
}

cv.imshow("Gaussian Blur", gaussianFilterMat);

// Median Blur Filter
for (i = 1; i < 31; i = i + 2) {
    medianBlurMat = mat.medianBlur(i);
}

cv.imshow("Median Blur", medianBlurMat);

// Bilateral Filter
for (i = 1; i < 31; i = i + 2) {
    bilateralMat = mat.bilateralFilter(i, i * 2, i / 2);
}

cv.imwrite('./images/putin-01.png', bilateralMat);

img = cv.imread('./images/putin-01.png');

// display image
cv.imshow('Bilateral', img);

// close image by any key
cv.waitKey(0);

// destroy image window
cv.destroyAllWindows();