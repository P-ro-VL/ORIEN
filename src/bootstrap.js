document.addEventListener('DOMContentLoaded', (ev) => {
  var elements = document.getElementsByTagName('*');

  for (var i = 0, max = elements.length; i < max; i++) {
    var element = elements[i];
    var classes = element.classList;
    classes.forEach((cl) => {
      if (element.id == 'careers-sidebar') {
        console.log(cl);
      }
      if (cl.startsWith('opacity-')) {
        element.style.opacity = parseFloat(cl.replace('opacity-', '')) / 100.0;
      } else if (cl.startsWith('grid-')) {
        var rawData = cl.replace('grid-', '').split('-');
        element.style.display = 'grid';
        element.style.gridTemplate =
          '1fr '.repeat(parseInt(rawData[0])) +
          '1fr '.repeat(parseInt(rawData[1]));
      } else if (cl.startsWith('ratio-')) {
        var rawData = cl.replace('ratio-', '').split('-');
        element.style.aspectRatio = rawData[0] + ' / ' + rawData[1];
      } else if (cl.startsWith('col-gap-')) {
        element.style.columnGap = cl.replace('col-gap-', '') + 'rem';
      } else if (cl.startsWith('col-span-')) {
        var rawData = cl.replace('col-span-', '').split('-');
        element.style.gridColumn = rawData[0] + ' / ' + rawData[1];
      } else if (cl.startsWith('col-')) {
        element.style.gridColumn = parseInt(cl.replace('col-', ''));
      }
    });
  }
});
