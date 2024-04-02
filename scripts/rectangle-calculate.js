function calculateRectangleArea(){
    //get width of rectangle
    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidth.value;
    const width = parseFloat(rectangleWidthText);
    // console.log(width);

    //get length of rectangle
    const rectangleLength = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLength.value;
    const length = parseFloat(rectangleLengthText);
    // console.log(length);

    //calculate rectangle area
    const area = width * length;
    console.log(area);

    //display rectangle area
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;
}