const cv = require("opencv4nodejs");

const mat = new cv.Mat(600, 800, cv.CV_8UC3, [255, 255, 255]);

const image = cv.imread("./images/putin-recog.jpg");

// const imageBrighnessHigh50 = image.convertTo(-1, 1, 100);

// cv.imshow('brightness', imageBrighnessHigh50);

// Point
const point1 = new cv.Point(100, 100);
const point2 = new cv.Point(200, 200);

// Draw a line
const lineColor = new cv.Vec(255, 0, 0);
mat.drawLine(point1, point2, lineColor, 2, 1);

// Draw a rectangle
mat.drawRectangle(new cv.Point(300, 100), new cv.Point(500, 200), lineColor, 2);

// Draw a circle
mat.drawCircle(new cv.Point(700, 150), 60, new cv.Vec(0, 0, 255), 2);

// Display text
mat.putText("My self-tutor with opencv4nodejs", new cv.Point(50, 50), cv.FONT_HERSHEY_PLAIN, 1, new cv.Vec(0, 255, 0));

cv.imshow('drawing', mat);
cv.waitKey(0);
cv.destroyAllWindows();