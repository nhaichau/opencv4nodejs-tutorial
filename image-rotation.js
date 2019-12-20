const cv = require("opencv4nodejs");

img = cv.imread("./images/putin-02.jpg");

rows = img.rows;
cols = img.cols;
center = new cv.Point(cols / 2, rows / 2);
angle = 270;

M = cv.getRotationMatrix2D(center, angle, 1);

// Rotate image
rotatedImg = img.warpAffine(M, new cv.Size(cols, rows));
cv.imshow("rotated image", rotatedImg);
cv.imshow("origin", img);

cv.waitKey();
cv.destroyAllWindows();