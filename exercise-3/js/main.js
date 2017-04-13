// Main JavaScript File

// First Exam
var exam1 = [
  {id:1, student:'Jade', grade:95},
  {id:2, student:'Billy', grade:90},
  {id:3, student:'Rose', grade:80},
];

// Second Exam
var exam2 = [
  {id:1, student:'Jade', grade:75},
  {id:2, student:'Billy', grade:85},
  {id:3, student:'Rose', grade:90},
  {id:4, student:'Avery', grade:90},
];

// Third Exam
var exam3 = [
  {id:1, student:'Jade', grade:95},
  {id:2, student:'Billy', grade:80},
  {id:3, student:'Rose', grade:80},
  {id:4, student:'Avery', grade:70},
];

// You'll have to wait for you page to load to assign events to the elements created in your index.html file
$(function() {
  // Select SVG
  

  // Reusable draw function
  let draw = (exam) => {
    let svg = d3.select('#my-svg').attr('height', 200);
    // Bind data to selection of rects in your svg
    let rects = svg.selectAll('rect').data(exam, exam => exam.id);

    // Enter rect elements
    rects.enter()
      .append('rect')
      .attr('width', 0)
      .attr('y', obj => obj.id * 40)
      .attr('x', 20)
      .attr('height', 30)
      .merge(rects) // Entering and updating elements rects
      .transition()
      .duration(500)
      .attr('width', obj => obj.grade)

    // Transition a remove for exiting elements
    rects.exit()
      .transition()
      .duration(500)
      .attr('width', 0)
      .remove();
      

    // Perform the same data-binding for text

    let texts = svg.selectAll('text').data(exam, exam => exam.id);

    // enter elements
    texts.enter()
      .append('text')
      .merge(texts)
      .attr('y', obj => obj.id * 40 + 19)
      .text(obj => obj.student)
      .style('fill', 'white')
      .attr('x', 23);

    texts.exit()
      .transition()
      .duration(500)
      .remove();


    // Entering and updating elements rects
  };




    // Transition a remove for exiting elements
    $('button').on('click', function() {
      var btn = $(this).attr("id");
      switch(btn){
        case 'exam-1':
          draw(exam1);
          break;
        case 'exam-2':
          draw(exam2);
          break;
        case 'exam-3':
          draw(exam3);
          break;
        default:
          break;
      };
    })



});
