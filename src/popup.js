function showPopup(id) {
  var element = document.getElementById(id);
  if (element == undefined)
    throw Error("Cannot find popup element with id'" + id + "'");
  var elementOverlay = document.getElementById(id + '-overlay');
  if (elementOverlay == undefined)
    throw Error(
      "The popup element must be wrapped inside an div with id '" +
        id +
        "-overlay'"
    );
  if (!elementOverlay.classList.contains('overlay'))
    throw Error("The popup element has not implemented class 'overlay' yet.");

  elementOverlay.style.display = 'flex';
  element.style.display = 'flex';
}

function closePopup(id) {
  var element = document.getElementById(id);
  if (element == undefined)
    throw Error("Cannot find popup element with id'" + id + "'");
  var elementOverlay = document.getElementById(id + '-overlay');
  if (elementOverlay == undefined)
    throw Error(
      "The popup element must be wrapped inside an div with id '" +
        id +
        "-overlay'"
    );
  if (!elementOverlay.classList.contains('overlay'))
    throw Error("The popup element has not implemented class 'overlay' yet.");

  elementOverlay.style.display = 'none';
  element.style.display = 'none';
}
