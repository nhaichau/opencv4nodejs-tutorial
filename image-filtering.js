const cv = require("opencv4nodejs");

// load image from folder images
mat = cv.imread('./images/putin-01.jpg');

// Normalized Block Filter
for (i = 1; i < 31; i = i + 2) {
    nbFilterMat = cv.blur(mat, new cv.Size(i, i), new cv.Point(-1, -1));
}

// write image to another format
cv.imshow("nbFilter", nbFilterMat);

// Gaussian Filter
for (i = 1; i < 31; i = i + 2) {
    gaussianFilterMat = cv.gaussianBlur(mat, new cv.Size(i, i), 0, 0);
}

cv.imshow("Gaussian Blur", gaussianFilterMat);

// Median Blur Filter
for (i = 1; i < 31; i = i + 2) {
    medianBlurMat = cv.medianBlur(mat, i);
}

cv.imshow("Median Blur", medianBlurMat);

// Bilateral Filter is not available

cv.imwrite('./images/putin-01.png', medianBlurMat);

img = cv.imread('./images/putin-01.png');

// display image
cv.imshow('filtered image', img);

// close image by any key
cv.waitKey(0);

// destroy image window
cv.destroyAllWindows();