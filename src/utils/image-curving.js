// for reference, the full method
export const getQuadraticBezierXYatT = (start_point, control_point, end_point, T) => {

  let pow1minusTsquared = Math.pow(1 - T, 2);
  let powTsquared = Math.pow(T, 2);

  let x = pow1minusTsquared * start_point.x + 2 * (1 - T) * T * control_point.x + powTsquared * end_point.x;
  let y = pow1minusTsquared * start_point.y + 2 * (1 - T) * T * control_point.y + powTsquared * end_point.y;

  return {
    x: x,
    y: y
  };
}

export const warpHorizontally = (
    image_to_warp, 
    invert_curve, 
    warp_percentage_input, 
    warp_canvas, 
    img
  ) => {
  let image_width  = image_to_warp.width;
  let image_height = image_to_warp.height;
  let warp_percentage = parseFloat(warp_percentage_input, 10);
  // for fun purposes and nicer controls
  // I chose to determine the offset by applying a percentage value to the image width
  let warp_x_offset = warp_percentage * image_width;
 
  warp_canvas.width  = image_width + Math.ceil(warp_x_offset * 2); 
  warp_canvas.height = image_height;
  const warp_context = warp_canvas.getContext('2d');
// see https://www.rgraph.net/blog/an-example-of-the-html5-canvas-quadraticcurveto-function.html
// for more details regarding start_point, control_point si end_point
  let start_point = {
    x: 0,
    y: 0
  };
  let control_point = {
    x: invert_curve ? warp_x_offset : -warp_x_offset,
    y: image_height / 2
  };
  let end_point = {
    x: 0,
    y: image_height
  };
  
  let offset_x_points = [];
  let t = 0;
  for ( ; t < image_height; t++ ) {
    let xyAtT = getQuadraticBezierXYatT(start_point, control_point, end_point, t / image_height);
    let x = parseInt(xyAtT.x);
    offset_x_points.push(x);
  }

  warp_context.clearRect(0, 0, warp_canvas.width, warp_canvas.height);

  let y = 0;
  for ( ; y < image_height; y++ ) {

    warp_context.drawImage(image_to_warp,
    // clip 1 pixel wide slice from the image
    //x, 0, 1, image_height + warp_y_offset,
    0, y, image_width + warp_x_offset, 1,
    // draw that slice with a y-offset
    //x, warp_y_offset + offset_y_points[x], 1, image_height + warp_y_offset
    warp_x_offset + offset_x_points[y], y, image_width + warp_x_offset, 1
    );
  }
}

export const  warpVertically = (
  image_to_warp, 
  invert_curve, 
  warp_percentage_input, 
  warp_canvas,
  img
  ) => {

  const widthRat = img.width / image_to_warp.width;
  const heightRat = img.height / image_to_warp.height;

  const image_width  = image_to_warp.width;
  const image_height = image_to_warp.height;
  const warp_percentage = parseFloat(warp_percentage_input, 10);
// for fun purposes and nicer controls
// I chose to determine the offset by applying a percentage value to the image height
//  const warp_y_offset = warp_percentage * image_height;
  const warp_y_offset = warp_percentage * image_height*0.2;
  //warp_canvas.width  = image_width;
  //warp_canvas.height = image_height + Math.ceil(warp_y_offset * 2); 

  warp_canvas.width  = img.width;
  warp_canvas.height = img.height; 

  let warp_context = warp_canvas.getContext('2d');

  console.log(warp_canvas.height)

// see https://www.rgraph.net/blog/an-example-of-the-html5-canvas-quadraticcurveto-function.html
// for more details regarding start_point, control_point si end_point
  const start_point = {
    x: 0,
    y: 0
  };
  const control_point = {
    x: image_width / 2,
    y: invert_curve ? warp_y_offset : -warp_y_offset
  };
  const end_point = {
    x: image_width,
    y: 0
  };

  const offset_y_points = [];
  for (let t=0; t < image_width; t++ ) {
    const xyAtT = getQuadraticBezierXYatT(start_point, control_point, end_point, t / image_width);
    const y = parseInt(xyAtT.y);
    offset_y_points.push(y);
  }

  warp_context.clearRect(0, 0, warp_canvas.width, warp_canvas.height);

  //warp_context.drawImage(img, 0, 0, 100, 100);
  //warp_context.globalCompositeOperation="source-in";


  for (let x=0; x < image_width; x++ ) {
    warp_context.drawImage(image_to_warp,
    // clip 1 pixel wide slice from the image
    x, 0, 1, image_height + warp_y_offset,
    // draw that slice with a y-offset
    x*widthRat, warp_y_offset + offset_y_points[x], 1*widthRat, image_height*heightRat + warp_y_offset
//    x, warp_y_offset + offset_y_points[x], 1, image_height + warp_y_offset
//    x*widthRat, offset_y_points[x], 1*widthRat, image_height*heightRat
    );
  }
  warp_context.globalCompositeOperation = "source-over";
  warp_context.drawImage(img, 0, 0);
}
