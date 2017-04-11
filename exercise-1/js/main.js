// Main JavaScript File

// You'll have to wait for you page to load to assign events to the elements created in your index.html file
$(function() {

  // Select the element with id `sandbox` and append a `div` element to it. Make sure to store the div in a JavaScript varaible
  let sandbox = d3.select('#sandbox');
  let div = sandbox.append('div');
  // Create a variable `mySvg` by appending an `svg` element to your newly created `div`
  let mySvg = div.append('svg');

  // Set both the width and height attributes of your `svg` to 300 
  mySvg.attr('width', 300);
  mySvg.attr('height', 300);

  // Append a `circle` element to your `svg`, setting the properties noted in index.html
  let circle = mySvg.append('circle');
  circle.attr('r', 30);
  circle.attr('cx', 75);
  circle.attr('cy', 30);

  circle.style('opacity', 0.5);
  circle.style('fill', 'blue');

  // Append a `rect` element to your `svg`, setting the properties noted in index.html
  let rect = mySvg.append('rect');
  rect.attr('x', 70);
  rect.attr('y', 60);
  rect.attr('width', 10);
  rect.attr('height', 250);

  rect.style('opacity', 0.5);
  rect.style('fill', 'orange');

});
