const cv = require("opencv4nodejs");

// Load img as Grey 
img = cv.imread("./images/putin-01.jpg", 0);

threshold_value = 200;

// Convert img to black or white based on threshold value
binary_threshold = img.threshold(threshold_value, 255, cv.THRESH_BINARY);
cv.imshow("binary", binary_threshold);
cv.imshow("origin", img);
cv.waitKey();
cv.destroyAllWindows();
